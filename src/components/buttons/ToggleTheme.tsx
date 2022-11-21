import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import classNames from 'classnames/bind';
import { useTheme } from 'next-themes';
import React from 'react';
import ClientOnly from '../shared/ClientOnly';
import styles from './ToggleTheme.module.scss';

const cx = classNames.bind(styles);

export const ToggleTheme: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <ClientOnly>
            <button
                onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                className={cx('button')}
            >
                {theme === 'light' ? (
                    <SunIcon className={cx('icon')} />
                ) : (
                    <MoonIcon className={cx('icon')} />
                )}
            </button>
        </ClientOnly>
    );
};
