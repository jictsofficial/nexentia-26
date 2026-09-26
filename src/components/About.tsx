// src/components/About.tsx

"use client";
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHackerText } from '@/hooks/useHackerText';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const [title, scrambleTitle] = useHackerText("ABOUT NΕΧΕΝΤΙΑ");

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
    
            gsap.from(".about-title", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
            gsap.utils.toArray<HTMLElement>(".about-line").forEach(line => {
                gsap.from(line.children, {
                    scrollTrigger: {
                        trigger: line,
                        start: "top 90%",
                    },
                    yPercent: 100,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.05 
                });
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // ** ASKICHAWI: ** Non-breaking spaces (\u00A0) have been added to the school's name to prevent line breaks.
    // The text has been updated with full stops as requested.
    const aboutText = "Marking a groundbreaking milestone in tech education, Nexentia stands as Sri Lanka's first-ever ICT Day to feature the highest number of competition categories - each uniquely crafted to explore the infinite realms of future technology. Organized by the Josephian ICT Society (JICTS) of St.\u00A0Joseph's\u00A0Girls'\u00A0School,\u00A0Nugegoda, this pioneering event sets a new benchmark in fostering innovation and digital brilliance. Nexentia is more than an event - it is a prestigious celebration of innovation, creativity, and the limitless potential of digital excellence";

    return (
        <section id="about" ref={sectionRef} className="w-full bg-black py-24 text-white">
            <div className="container mx-auto px-6 md:px-10 max-w-4xl text-center">
                <h2 
                  className="about-title text-4xl md:text-5xl font-bold uppercase tracking-wider text-purple-400 mb-12"
                  onMouseEnter={scrambleTitle}
                  data-value="ABOUT NΕΧΕΝΤΙΑ"
                >
                  {title}
                </h2>
                <div className="text-lg md:text-xl leading-relaxed text-gray-300 font-sans">
                    {aboutText.split('. ').map((sentence, index) => (
                        <p key={index} className="about-line overflow-hidden py-1">
                            {sentence && sentence.split(' ').map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block">{word}&nbsp;</span>
                            ))}
                            {/* Add the full stop back if the sentence is not empty */}
                            {sentence && '.'}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;