import { useRouter } from 'next/router';
import React from 'react';
import NextHead from 'next/head';
import { WEBSITE_URL } from '~/constants';

interface Props {
    title?: string;
    description?: string;
    image?: string;
}

const Head: React.FC<Props> = ({
    title = "Phuc Tien's portfolio",
    description = "Phuc Tien's portfolio",
    image = '/assets/imgs/portfolio.png',
}) => {
    const { asPath } = useRouter();

    return (
        <NextHead>
            <title>{title}</title>
            <link rel="manifest" href="/manifest.json" />
            <link
                rel="icon"
                sizes="192x192"
                href="/assets/icons/icon-192x192.png"
            ></link>

            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={WEBSITE_URL + asPath} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={WEBSITE_URL + asPath} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="Phuc Tien's portfolio" />
            <meta
                name="apple-mobile-web-app-title"
                content="Phuc Tien's portfolio"
            />
            <meta name="theme-color" content="#fff" />
            <meta name="msapplication-navbutton-color" content="#fff" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
            <meta name="msapplication-starturl" content="/" />
        </NextHead>
    );
};

export default Head;
