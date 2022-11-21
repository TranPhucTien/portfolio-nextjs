import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import Quote from '~/components/shared/Quote';
import { renderCanvas } from '~/utils/renderCanvas';
import styles from './LightBanner.module.scss';

const cx = classNames.bind(styles);

const LightBanner: React.FC = () => {
    useEffectOnce(() => {
        renderCanvas();
    });

    return (
        <>
            <section className={cx('wrapper')} id="banner">
                <div className={cx('title')}>
                    <h1 className={cx('transition-default')}>Phuc Tien</h1>
                </div>
                <motion.h2
                    className={cx('description')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.5 }}
                >
                    I'm a <span>Frontend </span>
                    Developer.
                </motion.h2>
                <Quote className={cx('quote')} />
            </section>
            <canvas className={cx('canvas')} id="canvas"></canvas>
        </>
    );
};

export default memo(LightBanner);