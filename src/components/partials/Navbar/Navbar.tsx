import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { MouseEventHandler, useState } from 'react';
import { ToggleTheme } from '~/components/buttons/ToggleTheme';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

interface PropsList {
    className?: string;
    onClick?: MouseEventHandler<HTMLLIElement>;
}

const List: React.FC<PropsList> = ({ className, onClick }) => {
    return (
        <ul className={className}>
            <li className={cx('user-select-none')} onClick={onClick}>
                <Link href="#about" scroll={false}>
                    About
                </Link>
            </li>
            <li className={cx('user-select-none')} onClick={onClick}>
                <Link href="#projects" scroll={false}>
                    Projects
                </Link>
            </li>
            <li className={cx('user-select-none')} onClick={onClick}>
                <Link
                    href="/assets/Tran_Phuc_Tien-Resume.pdf"
                    download={true}
                    target="_blank"
                >
                    Resume
                </Link>
            </li>
            <li className={cx('user-select-none')} onClick={onClick}>
                <Link href="#contact" scroll={false}>
                    Contact
                </Link>
            </li>
        </ul>
    );
};

const Navbar: React.FC = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsShowMenu((prev) => !prev);
    };

    return (
        <nav className={cx('wrapper')} id="Nav">
            <div className={cx('content')}>
                <Link href="/" className={cx('logo')}>
                    PhucTien
                </Link>

                <List className={cx('list')} />

                <div className={cx('toggle-btn')}>
                    <ToggleTheme />
                    <button className={cx('menu-btn')} onClick={toggleMenu}>
                        {isShowMenu ? (
                            <XIcon className={cx('menu-icon', 'close')} />
                        ) : (
                            <MenuIcon className={cx('menu-icon')} />
                        )}
                    </button>
                </div>
            </div>
            <List
                className={cx('menu', 'transition-default', {
                    active: isShowMenu,
                })}
                onClick={toggleMenu}
            />
        </nav>
    );
};

export default Navbar;
