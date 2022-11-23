import React, { ReactNode, useState } from 'react';
import { Footer, Navbar } from '../partials';
import { ScrollerMotion } from 'scroller-motion';
import { useEffectOnce, useEventListener } from 'usehooks-ts';

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffectOnce(() => {
        setIsMobile(window.innerWidth < 768);
    });

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
