// components/SnowBackground.tsx
import React, { useEffect, useRef } from 'react';

interface Snowflake {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
}

const SnowBackground: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const snowflakesRef = useRef<Snowflake[]>([]);
    const animationFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 初始化雪花
        const initSnowflakes = () => {
            snowflakesRef.current = [];
            const snowflakeCount = isDarkMode ? 150 : 120; // 暗色模式下更多雪花

            for (let i = 0; i < snowflakeCount; i++) {
                snowflakesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 0.5, // 水平飘动速度
                    vy: Math.random() * 2 + 1, // 垂直下落速度
                    size: Math.random() * 4 + 2, // 雪花大小 2-6px
                    opacity: Math.random() * 0.5 + 0.3 // 透明度 0.3-0.8
                });
            }
        };

        initSnowflakes();

        const animate = () => {
            if (!ctx || !canvas) return;

            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 更新并绘制雪花
            snowflakesRef.current.forEach(snowflake => {
                // 更新位置
                snowflake.x += snowflake.vx;
                snowflake.y += snowflake.vy;

                // 添加轻微的摆动效果
                snowflake.x += Math.sin(snowflake.y * 0.01) * 0.2;

                // 边界检测 - 如果雪花落到屏幕底部，重新从顶部出现
                if (snowflake.y > canvas.height) {
                    snowflake.y = -snowflake.size;
                    snowflake.x = Math.random() * canvas.width;
                }

                // 如果雪花超出左右边界，从另一边进入
                if (snowflake.x > canvas.width) {
                    snowflake.x = 0;
                } else if (snowflake.x < 0) {
                    snowflake.x = canvas.width;
                }

                // 绘制雪花（用圆形代表）
                ctx.beginPath();
                ctx.arc(snowflake.x, snowflake.y, snowflake.size * 0.5, 0, Math.PI * 2);

                // 根据模式设置颜色
                if (isDarkMode) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
                } else {
                    ctx.fillStyle = `rgba(20, 71, 230, ${snowflake.opacity})`; // 略带蓝色的白色
                }

                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.8 }}
        />
    );
};

export default SnowBackground;