import React from 'react';
import classNames from 'classnames/bind';
import styles from './Skills.module.scss';
import Link from 'next/link';
import { skillList } from '~/constants/skillsApi';

const cx = classNames.bind(styles);

const Skills: React.FC = () => {
    return (
        <section id="skills" className={cx('wrapper')}>
            <h2 className={cx('title')}>My Skills</h2>
            <span className={cx('desc')}>Focus on</span>
            <ul className={cx('list')}>
                {skillList.focusOn.map((skill, index) => (
                    <li key={index} className="item">
                        <Link className={cx('link')} href={skill.link}>
                            <img src={skill.image} alt={skill.name} />
                            {skill.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <span className={cx('desc')}>Able to adapt</span>
            <ul className={cx('list', 'grid-2')}>
                {skillList.ableAdaptTo.map((skill, index) => (
                    <li key={index} className={cx('user-select-none')}>
                        <Link className={cx('link')} href={skill.link}>
                            <img src={skill.image} alt={skill.name} />
                            {skill.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
