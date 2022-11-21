import { NextPage } from 'next';
import React from 'react';
import Script from 'next/script';
import { MainLayout } from '~/components/layouts/MainLayout';
import { DarkBanner } from '~/components/partials';
import { useTheme } from 'next-themes';
import ClientOnly from '~/components/shared/ClientOnly';
import LightBanner from '~/components/partials/LightBanner';
import AnimateBird from '~/utils/AnimateBird';
import AnimateStar from '~/utils/AnimationStar';
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
            </MainLayout>
        </>
    );
};

export default Home;
