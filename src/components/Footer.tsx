// src/components/Footer.tsx

"use client";
import { useLayoutEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// SVG Icon Components
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

// ** THE FIX: Replaced with a consistent, outlined icon style **
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

// ** THE FIX: Replaced with a consistent, outlined icon style **
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


const Footer = () => {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".footer-col").forEach(col => {
                gsap.from(col, {
                    scrollTrigger: {
                        trigger: col,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            });
        }, footerRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="w-full bg-gray-900/40 border-t border-purple-800/40 text-gray-400 font-sans">
            <div className="container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                
                {/* Column 1: Logos and Description */}
                <div className="footer-col flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                        <div className="relative h-8 w-28">
                            <Image src="/nexentia-logo.png" alt="Nexentia Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className="relative h-12 w-12">
                            <Image src="/sjclogo.png" alt="School Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className="relative h-12 w-14">
                             <Image src="/jicts-logo.png" alt="JICTS Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                    </div>
                    <p className="text-sm">
                        Nexentia, the flagship ICT Day of St. Joseph&apos;s Girls&apos; School, is an inter-school event celebrating future tech and digital innovation.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="#about" className="hover:text-purple-400 transition-colors" data-cursor-hover>About</Link></li>
                        <li><Link href="#categories" className="hover:text-purple-400 transition-colors" data-cursor-hover>Categories</Link></li>
                        <li><Link href="#countdown" className="hover:text-purple-400 transition-colors" data-cursor-hover>Countdown</Link></li>
                        <li><Link href="#contact" className="hover:text-purple-400 transition-colors" data-cursor-hover>Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div className="footer-col break-words">
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Contact Us</h3>
                    <p className="text-sm">Josephian ICT Society,<br/>St. Joseph&apos;s Girls&apos; School,<br/>Nugegoda.</p>
                    
                    <a href="mailto:jictsofficial@gmail.com" className="inline-flex items-center gap-2 mt-2 text-sm hover:text-purple-400 transition-colors" data-cursor-hover>
                        <MailIcon />
                        <span>jictsofficial@gmail.com</span>
                    </a>
                </div>

                {/* Column 4: Follow Us */}
                 <div className="footer-col">
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Follow Us</h3>
                    <p className="text-sm mb-4">Stay connected with us on social media for the latest updates!</p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://whatsapp.com/channel/0029Vb503fR9RZAT3ekcV81k" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" data-cursor-hover aria-label="WhatsApp Channel">
                            <WhatsAppIcon />
                        </a>
                        <a href="https://www.instagram.com/jicts_official/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" data-cursor-hover aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar with Copyright and Developer Credit */}
            <div className="w-full border-t border-purple-800/40 py-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved by JICTS</p>
                
                <p className="text-xs text-gray-500 mt-2">
                    Designed & Developed by{' '}
                    <a 
                        href="https://axioralabs.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors font-semibold"
                        data-cursor-hover
                    >
                        Axiora Labs
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
