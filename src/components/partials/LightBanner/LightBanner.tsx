import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import React, { memo } from 'react';
import Quote from '~/components/shared/Quote';
import styles from '../DarkBanner/Banner.module.scss';

const cx = classNames.bind(styles);

const LightBanner: React.FC = () => {
    return (
        <>
            <section className={cx('wrapper', 'light')} id="banner">
                <div className={cx('title', 'light')}>
                    <h1
                        className={cx('transition-default', 'user-select-none')}
                    >
                        Phuc Tien
                    </h1>
                </div>
                <motion.h2
                    className={cx('description', 'light')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.5 }}
                >
                    I'm a <span>Frontend </span>
                    Developer.
                </motion.h2>
                <Quote className={cx('quote', 'light')} />
            </section>
        </>
    );
};

export default memo(LightBanner);
