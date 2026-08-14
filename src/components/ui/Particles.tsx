// components/ui/Particles.tsx — React Bits 风格粒子背景
// 墨色细粒子缓慢上浮，鼠标靠近时被轻轻推开；支持 reduce-motion 与页面隐藏时暂停
import {useEffect, useRef, type FC} from 'react';

interface ParticlesProps {
    /** 粒子数量 */
    quantity?: number;
    /** RGB 0-1 数组，默认墨色 #1b1915 */
    color?: [number, number, number];
    /** 基础半径 */
    size?: number;
    className?: string;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    pushX: number;
    pushY: number;
}

const Particles: FC<ParticlesProps> = ({
                                           quantity = 80,
                                           color = [0.106, 0.098, 0.082],
                                           size = 1.5,
                                           className = ''
                                       }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const mouse = {x: -9999, y: -9999};
        let w = 0;
        let h = 0;
        let raf = 0;
        const particles: Particle[] = [];

        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < quantity; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.22,
                    vy: -(Math.random() * 0.18 + 0.04), // 缓慢上浮
                    size: Math.random() * size + size * 0.4,
                    alpha: Math.random() * 0.22 + 0.1,
                    pushX: 0,
                    pushY: 0
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            const rgb = `${Math.round(color[0] * 255)}, ${Math.round(color[1] * 255)}, ${Math.round(color[2] * 255)}`;
            const radius = 130;

            for (const p of particles) {
                // 鼠标推离（距离越近力度越大）
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist2 = dx * dx + dy * dy;
                if (dist2 < radius * radius && dist2 > 0.01) {
                    const dist = Math.sqrt(dist2);
                    const force = (1 - dist / radius) * 0.6;
                    p.pushX += (dx / dist) * force;
                    p.pushY += (dy / dist) * force;
                }
                // 缓动回归
                p.pushX *= 0.88;
                p.pushY *= 0.88;

                if (!reduceMotion) {
                    p.x += p.vx + p.pushX * 0.35;
                    p.y += p.vy + p.pushY * 0.35;
                }

                // 边界环绕
                if (p.y < -10) {
                    p.y = h + 10;
                    p.x = Math.random() * w;
                }
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
                ctx.fill();
            }

            raf = requestAnimationFrame(draw);
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const onVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(raf);
            } else {
                raf = requestAnimationFrame(draw);
            }
        };

        resize();
        init();
        if (!reduceMotion) {
            raf = requestAnimationFrame(draw);
        } else {
            draw(); // 静态一帧
            cancelAnimationFrame(raf);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, [quantity, color, size]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className={`pointer-events-none fixed inset-0 ${className}`}
        />
    );
};

export default Particles;
