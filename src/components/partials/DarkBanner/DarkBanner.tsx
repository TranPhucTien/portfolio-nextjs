import { motion } from 'framer-motion';
import React, { memo, useEffect, useRef, useState } from 'react';
//@ts-ignore
import HALO from 'vanta/dist/vanta.halo.min';

import classNames from 'classnames/bind';
import Quote from '~/components/shared/Quote';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

const DarkBanner: React.FC = () => {
    const bannerRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        try {
            if (!vantaEffect && typeof window !== undefined) {
                setVantaEffect(
                    HALO({
                        el: bannerRef.current,
                        backgroundColor: 0x0,
                        size: 0.8,
                        amplitudeFactor: 2.0,
                        mouseControls: false,
                        touchControls: false,
                        yOffset: 0.12,
                    }),
                );
            }
        } catch (error) {
            alert(
                'Your browser does not support WebGL. Please try to switch to another browser!. (Trình duyệt của bạn đã cũ hoặc không hỗ trợ, Vui lòng nâng cấp hoặc thử trình duyệt khác!)',
            );
        }
    }, [vantaEffect]);

    return (
        <>
            <section
                className={cx('wrapper', 'dark')}
                id="banner"
                ref={bannerRef}
            >
                <div className={cx('title', 'dark')}>
                    <h1
                        className={cx(
                            'transition-default',
                            'user-select-none',
                            'dark',
                        )}
                    >
                        Phuc Tien
                    </h1>
                </div>
                <motion.h2
                    className={cx('description', 'dark')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.5 }}
                >
                    I'm a <span>Frontend </span>
                    Developer.
                </motion.h2>
                <Quote className={cx('quote', 'dark')} />
            </section>
        </>
    );
};

export default memo(DarkBanner);
