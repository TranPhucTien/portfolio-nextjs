import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './AnimateBird.module.scss';

const cx = classNames.bind(styles);

const AnimateBird = () => {
    return (
        <>
            <div className={cx('bird')}></div>
            <div className={cx('sky')}>
                <div className={cx('clouds')}>
                    <div className={cx('c1', 'one')}></div>
                    <div className={cx('c1', 'two')}></div>
                    <div className={cx('c1', 'three')}></div>
                    <div className={cx('c1', 'four')}></div>
                    <div className={cx('c2', 'one')}></div>
                    <div className={cx('c2', 'two')}></div>
                    <div className={cx('c2', 'three')}></div>
                    <div className={cx('c2', 'four')}></div>
                </div>
            </div>
        </>
    );
};

export default AnimateBird;
