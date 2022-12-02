import iconApi from './iconApi';
import { Project } from './interfaces';

const projectList: Array<Project> = [
    {
        name: 'Portfolio',
        desc: 'This is portfolio for me',
        thumbnail: '/assets/imgs/portfolio.png',
        techStackList: [iconApi.sass, iconApi.react, iconApi.next],
        liveDemoLink: 'https://phuc-tien-portfolio.vercel.app',
        githubLink: 'https://github.com/TranPhucTien/portfolio-nextjs',
    },
    {
        name: 'FoodG',
        desc: 'Order Food Delivery Online. however, now the API is broken :(',
        thumbnail: '/assets/imgs/foodg.png',
        techStackList: [iconApi.sass, iconApi.react],
        liveDemoLink: 'https://foodg.vercel.app',
        githubLink: 'https://github.com/TranPhucTien/foodg',
    },
    {
        name: 'Music Player',
        desc: 'A music player',
        thumbnail: '/assets/imgs/music.png',
        techStackList: [iconApi.html, iconApi.css, iconApi.js],
        liveDemoLink: 'https://tranphuctien.github.io/music_player',
        githubLink: 'https://github.com/TranPhucTien/music_player',
    },
];

export default projectList;
