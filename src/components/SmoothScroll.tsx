// src/components/SmoothScroll.tsx
"use client";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = () => {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        });

        gsap.ticker.lagSmoothing(0);
        
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        const handleClick = (e: Event) => {
            e.preventDefault();
            const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            if (targetId) {
                lenis.scrollTo(targetId);
            }
        };

        anchorLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });

        // ** THE FIX: Listen for custom events to stop/start Lenis scroll **
        const stopLenis = () => lenis.stop();
        const startLenis = () => lenis.start();

        window.addEventListener('stop-lenis', stopLenis);
        window.addEventListener('start-lenis', startLenis);

        // Cleanup function
        return () => {
            lenis.destroy();
            anchorLinks.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
            // Remove custom event listeners on cleanup
            window.removeEventListener('stop-lenis', stopLenis);
            window.removeEventListener('start-lenis', startLenis);
        };

    }, [pathname]);

    return null;
}

export default SmoothScroll;
