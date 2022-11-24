import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProjectItem.module.scss';
import Atropos from 'atropos/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { FaGithub } from 'react-icons/fa';
import { Project } from '~/constants/interfaces';

const cx = classNames.bind(styles);

interface Props extends Project {
    isReverse: boolean;
}

const ProjectItem: React.FC<Props> = (props) => {
    const {
        desc,
        name,
        techStackList,
        thumbnail,
        liveDemoLink,
        githubLink,
        isReverse,
    } = props;

    return (
        <div className={cx('wrapper', { 'flex-reverse': isReverse })}>
            <Atropos shadow={false}>
                <div className={cx('img')}>
                    <div className="img-border"></div>
                    <img src={thumbnail} alt={name} />
                </div>
            </Atropos>
            <div className={cx('content')}>
                <h3 className={cx('name')}>{name}</h3>
                <p className={cx('desc')}>{desc}</p>
                <span className={cx('tech-stack')}>Tech stack:</span>
                <ul className={cx('list')}>
                    {techStackList.map((techStack, index) => (
                        <li className={cx('item')} key={index}>
                            <Link className={cx('link')} href={techStack.link}>
                                <img
                                    className={cx('transition-default')}
                                    src={techStack.image}
                                    alt={techStack.name}
                                />
                                {techStack.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={cx('buttons')}>
                    <Link
                        className={cx('button-item', 'transition-default')}
                        href={liveDemoLink}
                        target="_blank"
                    >
                        <ExternalLinkIcon className={cx('icon')} />
                        Live Demo
                    </Link>
                    <Link
                        className={cx('button-item', 'transition-default')}
                        href={githubLink}
                        target="_blank"
                    >
                        <FaGithub className={cx('icon')} />
                        View Github
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
