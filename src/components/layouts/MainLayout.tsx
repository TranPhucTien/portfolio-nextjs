import React, { ReactNode } from 'react';
import { Navbar } from '../partials';

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </>
    );
};
