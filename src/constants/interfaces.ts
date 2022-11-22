interface TechStack {
    image: string;
    name: string;
    link: string;
}

export interface Project {
    name: string;
    desc: string;
    thumbnail: string;
    techStackList: Array<TechStack>;
    liveDemoLink: string;
    githubLink: string;
}
