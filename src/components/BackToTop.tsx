// components/BackToTop.tsx — 回到顶部（方框按钮）
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from 'framer-motion';
import {RiArrowUpLine} from '@remixicon/react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

const BackToTop: React.FC = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState(false);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (v) => setVisible(v > 480));

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 12}}
                    transition={{duration: 0.2}}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    aria-label={t('common.backToTop')}
                    title={t('common.backToTop')}
                    className="fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-[var(--paper)] text-ink transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]"
                >
                    <RiArrowUpLine size={17}/>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
