import React from 'react';
import { motion } from 'framer-motion';
import QuoteIcon from '../icons/QuoteIcon';
import classNames from 'classnames/bind';
import styles from './Quote.module.scss';
import { useTheme } from 'next-themes';

const cx = classNames.bind(styles);

interface Props {
    className?: string;
}

const Quote: React.FC<Props> = ({ className }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className={className}
        >
            <small
                className={cx('icon')}
                style={{ fill: theme === 'light' ? '#000' : '#FFF' }}
            >
                <QuoteIcon />
            </small>
            <p className={cx('text')}>
                I will enjoy life as an
                <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
                >
                    &nbsp;(Arrow Function) =&gt; &#123; &#125;
                </a>
                . Because it cannot be "bind", "call" and "apply".
            </p>
        </motion.div>
    );
};

export default Quote;
