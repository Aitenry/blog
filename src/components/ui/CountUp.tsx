// ui/CountUp.tsx — 等宽数字计数
import {animate, useInView} from 'framer-motion';
import {useEffect, useRef, useState, type FC} from 'react';

interface CountUpProps {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

const CountUp: FC<CountUpProps> = ({value, duration = 1.4, suffix = '', className = ''}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, {once: true, margin: '-40px'});
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration,
            ease: 'easeOut',
            onUpdate: (v) => setDisplay(v)
        });
        return () => controls.stop();
    }, [inView, value, duration]);

    return (
        <span ref={ref} className={`font-mono tabular-nums ${className}`}>
            {String(Math.round(display)).padStart(2, '0')}
            {suffix}
        </span>
    );
};

export default CountUp;
