import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import { contactList } from '~/constants';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
    return (
        <div className={cx('wrapper')} id="contact">
            <h3 className={cx('title')}>Easy to find me</h3>
            <ul className={cx('list')}>
                {contactList.map((item) => {
                    const Icon = item.icon;
                    return (
                        <li className={cx('item', 'transition-default')}>
                            <Link
                                href={item.link}
                                target="_blank"
                                className={cx('link')}
                            >
                                <Icon />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Footer;
