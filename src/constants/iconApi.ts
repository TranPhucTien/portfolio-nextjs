interface IconItem {
    image: string;
    link: string;
    name: string;
}

interface IconList {
    html: IconItem;
    css: IconItem;
    sass: IconItem;
    js: IconItem;
    ts: IconItem;
    react: IconItem;
    next: IconItem;
    nodejs: IconItem;
}

const iconList: IconList = {
    html: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/html.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        name: 'HTML',
    },
    css: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/css.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        name: 'CSS',
    },
    sass: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/sass.svg',
        link: 'https://sass-lang.com',
        name: 'SASS',
    },
    js: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        name: 'JavaScript',
    },
    ts: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/typescript.svg',
        link: 'https://www.typescriptlang.org/',
        name: 'TypeScript',
    },
    react: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/react.svg',
        link: 'https://reactjs.org',
        name: 'ReactJS',
    },
    next: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/next.svg',
        link: 'https://nextjs.org',
        name: 'NextJS',
    },
    nodejs: {
        image: 'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/nodejs.svg',
        link: 'https://nodejs.org/en/docs/',
        name: 'NodeJS',
    },
};

export default iconList;
