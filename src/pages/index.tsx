import { useTheme } from 'next-themes';
import Script from 'next/script';
import React from 'react';
import { MainLayout } from '~/components/layouts/MainLayout';
import { About, DarkBanner, LightBanner } from '~/components/partials';
import ClientOnly from '~/components/shared/ClientOnly';
import AnimateBird from '~/utils/AnimateBird';
import AnimateSpace from '~/utils/AnimateSpace';

const Home: React.FC = () => {
    const { theme } = useTheme();

    if (typeof window !== 'undefined') {
        if (theme === 'light') {
            document.body.style.background = '#FFF';
            document.body.style.color = '#000';
        } else {
            document.body.style.background = '#000';
            document.body.style.color = '#fff';
        }
    }

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                strategy="beforeInteractive"
            />
            <MainLayout>
                <ClientOnly>
                    {theme === 'light' ? (
                        <>
                            <LightBanner />
                            <AnimateBird />
                        </>
                    ) : (
                        <>
                            <DarkBanner />
                            <AnimateSpace />
                        </>
                    )}
                </ClientOnly>
                <About />
            </MainLayout>
        </>
    );
};

export default Home;
