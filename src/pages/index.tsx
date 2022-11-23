import { useTheme } from 'next-themes';
import Script from 'next/script';
import React from 'react';
import { useEffectOnce } from 'usehooks-ts';
import {
    About,
    DarkBanner,
    LightBanner,
    Projects,
} from '~/components/partials';
import Skills from '~/components/partials/Skills';
import ClientOnly from '~/components/shared/ClientOnly';
import Head from '~/components/shared/Head';
import AnimateBird from '~/utils/AnimateBird';
import AnimateSpace from '~/utils/AnimateSpace';
import { renderCanvas } from '~/utils/renderCanvas';

const Home: React.FC = () => {
    const { theme } = useTheme();

    useEffectOnce(() => {
        renderCanvas();
    });

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
            <Head />
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
                <About />
                <Skills />
                <Projects />
            </ClientOnly>
            <canvas className="canvas" id="canvas"></canvas>
        </>
    );
};

export default Home;
