import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import avatar from '~/assets/imgs/avatar.jpg';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <section id="about" className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={avatar.src} alt="avatar" />
            </div>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Who am I?</h2>
                <p className={cx('desc')}>
                    Hi! My name is `Tran Phuc Tien`. My target 🎯 is a
                    Full-stack developer in the future. Now I am more focused on
                    JavaScript and the front-end side of things where I am using
                    ReactJS to create beautiful and reusable user interfaces. I
                    love coding, sports, anime and manga
                </p>
            </div>
        </section>
    );
};

export default About;
