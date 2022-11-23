import React from 'react';
import { FaDiscord, FaFacebookSquare, FaGithub } from 'react-icons/fa';

interface ContactItem {
    name: string;
    icon: React.FC;
    link: string;
}

const contactList: Array<ContactItem> = [
    {
        name: 'Facebook',
        icon: FaFacebookSquare,
        link: 'https://www.facebook.com/tranphuctien2003',
    },
    {
        name: 'Github',
        icon: FaGithub,
        link: 'https://github.com/TranPhucTien',
    },
    {
        name: 'Discord',
        icon: FaDiscord,
        link: 'https://discord.com/users/Tranphuctien#6060',
    },
];

export default contactList;
