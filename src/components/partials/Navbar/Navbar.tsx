import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { ToggleTheme } from '~/components/buttons/ToggleTheme';

const cx = classNames.bind(styles);

const Navbar: React.FC = () => {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link href="/" className={cx('logo')}>
                    PhucTien
                </Link>
                <ul className={cx('list')}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
                <div className={cx('toggle-btn')}>
                    <ToggleTheme />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
