// ui/TiltedCard.tsx — React Bits TiltedCard 改编：照片卡片跟随鼠标 3D 倾斜
// 编辑部风格化：去掉移动端警告/提示气泡，hover 显示等宽「查看」标签，点击触发回调
import {motion, useMotionValue, useSpring} from 'framer-motion';
import {useRef, type FC, type ReactNode} from 'react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

interface TiltedCardProps {
    imageSrc: string;
    altText: string;
    /** hover 时叠加的覆盖内容（如「查看大图」标签） */
    overlay?: ReactNode;
    /** 外层容器 class（宽高比/边框由调用方控制） */
    className?: string;
    rotateAmplitude?: number;
    scaleOnHover?: number;
    onClick?: () => void;
}

const TiltedCard: FC<TiltedCardProps> = ({
                                              imageSrc,
                                              altText,
                                              overlay,
                                              className = '',
                                              rotateAmplitude = 14,
                                              scaleOnHover = 1.04,
                                              onClick
                                          }) => {
    const ref = useRef<HTMLDivElement>(null);

    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const overlayOpacity = useSpring(0, springValues);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
        rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    };

    const handleMouseEnter = () => {
        scale.set(scaleOnHover);
        overlayOpacity.set(1);
    };

    const handleMouseLeave = () => {
        overlayOpacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{perspective: 900}}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
        >
            <motion.div style={{rotateX, rotateY, scale}} className="relative h-full w-full">
                <img src={imageSrc} alt={altText} loading="lazy" draggable={false}
                     className="h-full w-full object-cover select-none"/>
                {overlay && (
                    <motion.div
                        style={{opacity: overlayOpacity}}
                        className="pointer-events-none absolute inset-0 flex items-end justify-start p-3"
                    >
                        {overlay}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default TiltedCard;
