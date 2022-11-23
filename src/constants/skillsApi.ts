interface Item {
    image: string;
    link: string;
    name: string;
}

interface SkillList {
    focusOn: Array<Item>;
    ableAdaptTo: Array<Item>;
}

const skillList: SkillList = {
    focusOn: [
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/html.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            name: 'HTML',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/css.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            name: 'CSS',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/sass.svg',
            link: 'https://sass-lang.com',
            name: 'SASS',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/javascript.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            name: 'JavaScript',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/typescript.svg',
            link: 'https://www.typescriptlang.org/',
            name: 'TypeScript',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/react.svg',
            link: 'https://reactjs.org',
            name: 'ReactJS',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/next.svg',
            link: 'https://nextjs.org',
            name: 'NextJS',
        },
        {
            image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/nodejs.svg',
            link: 'https://nodejs.org/en/docs/',
            name: 'NodeJS',
        },
    ],
    ableAdaptTo: [
        {
            image: 'https://res.cloudinary.com/dcykhs0bm/image/upload/v1661391482/personal/6202fcdee5ee8636a145a41b_1234_lajt0v.png',
            link: 'https://expressjs.com/',
            name: 'Express',
        },
        {
            image: 'https://res.cloudinary.com/dcykhs0bm/image/upload/v1661156305/personal/mongodb-svgrepo-com_o4vh1l.svg',
            link: 'https://www.mongodb.com/',
            name: 'MongoDB',
        },
    ],
};

export default skillList;
