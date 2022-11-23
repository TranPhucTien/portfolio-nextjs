import React, { MouseEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { ToggleTheme } from '~/components/buttons/ToggleTheme';

const cx = classNames.bind(styles);

const Navbar: React.FC = () => {
    return (
        <nav className={cx('wrapper')} id="Nav">
            <div className={cx('content')}>
                <Link href="/" className={cx('logo')}>
                    PhucTien
                </Link>
                <ul className={cx('list')}>
                    <li className={cx('user-select-none')}>
                        <Link href="#about" scroll={false}>
                            About
                        </Link>
                    </li>
                    <li className={cx('user-select-none')}>
                        <Link href="#projects" scroll={false}>
                            Projects
                        </Link>
                    </li>
                    <li className={cx('user-select-none')}>
                        <Link
                            href="/assets/Tran_Phuc_Tien-Resume.pdf"
                            download={true}
                            target="_blank"
                        >
                            Resume
                        </Link>
                    </li>
                    <li className={cx('user-select-none')}>
                        <Link href="#contact" scroll={false}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className={cx('toggle-btn')}>
                    <ToggleTheme />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
