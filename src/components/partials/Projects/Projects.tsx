import React from 'react';
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import ProjectItem from './ProjectItem';
import projectList from '~/constants/projectApi';

const cx = classNames.bind(styles);

const Projects: React.FC = () => {
    return (
        <section id="projects" className={cx('wrapper')}>
            <h2 className={cx('title')}>My Projects</h2>
            <div className={cx('inner')}>
                {projectList.map((project, index) => (
                    <ProjectItem
                        key={index}
                        name={project.name}
                        desc={project.desc}
                        thumbnail={project.thumbnail}
                        techStackList={project.techStackList}
                        isReverse={index % 2 === 0}
                        liveDemoLink={project.liveDemoLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
