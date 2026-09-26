"use client";

        import Image from "next/image";
        import { useLayoutEffect, useRef } from "react";
        import gsap from "gsap";
        import { ScrollTrigger } from "gsap/ScrollTrigger";

        import Countdown from "@/components/Countdown";
        import HeroBackground from "@/components/HeroBackground";
        import About from "@/components/About";
        import Categories from "@/components/Categories";
        import Contact from "@/components/Contact";
        import Footer from "@/components/Footer";

        gsap.registerPlugin(ScrollTrigger);

        // Magnetic Button Component
        const MagneticButton = ({
        children,
        className = "",
        }: {
        children: React.ReactNode;
        className?: string;
        }) => {
        const ref = useRef<HTMLButtonElement>(null);
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            gsap.to(el, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
            });
            };

            const handleMouseLeave = () => {
            gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.5)" });
            };

            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);

            return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
            };
        }, []);

        return (
            <button
            ref={ref}
            className={`px-5 py-2.5 sm:px-6 text-sm sm:text-base font-semibold rounded-lg transition-colors duration-300 ease-in-out ${className}`}
            data-cursor-hover
            >
            {children}
            </button>
        );
        };

        export default function Home() {
        const comp = useRef<HTMLDivElement>(null);
        const heroBgRef = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            const ctx = gsap.context(() => {
            // Entry animation
            const tl = gsap.timeline({ delay: 0.2 });
            tl.from("#hero-logo", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
                .from("#hero-h1", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
                .from("#hero-p", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
                .from(".hero-btn", { y: 50, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 }, "-=0.6");

            // Hero Background Parallax Effect
            gsap.to(heroBgRef.current, {
                scrollTrigger: {
                trigger: comp.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                },
                yPercent: 30,
                ease: "none",
            });
            }, comp);
            return () => ctx.revert();
        }, []);

        return (
            <div className="bg-black font-orbitron" ref={comp}>
            <>
                <main
                id="welcome"
                className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden z-10"
                >
                <div
                    ref={heroBgRef}
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{ position: "absolute" }}
                >
                    <Image
                    src="/hero-background.png"
                    alt="Futuristic cyberpunk background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-50"
                    />
                </div>
                <HeroBackground />
                {/* ** THE FIX: Pushed content further down on desktop ** */}
                <div className="relative z-10 flex flex-col items-center text-center text-white p-5 pt-56 sm:pt-48 md:pt-56 lg:pt-64 xl:pt-72">
                    {/* ** THE FIX: Made logo larger on desktop and increased bottom margin ** */}
                    <div
                    id="hero-logo"
                    className="w-full max-w-2xl md:max-w-5xl mb-6 sm:mb-8"
                    >
                    <Image
                        src="/nexentia-logo.png"
                        alt="Nexentia '26 Logo"
                        width={1500}
                        height={300}
                        priority
                        style={{ objectFit: "contain" }}
                    />
                    </div>
                    <h1
                    id="hero-h1"
                    className="text-base sm:text-xl md:text-2xl font-bold tracking-wider uppercase mb-2 sm:mb-3 text-gray-200 px-2"
                    >
                    BY ST.&nbsp;JOSEPH&apos;S&nbsp;GIRLS&apos;&nbsp;SCHOOL NUGEGODA
                    </h1>
                    <p
                    id="hero-p"
                    className="text-sm sm:text-lg md:text-xl font-light mb-8 sm:mb-12 text-gray-300 font-sans"
                    >
                    {/* ** FIRST EVER MINISTRY OF EDUCATION RECOGNIZED ICT DAY IN SRI LANKA ** */}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="hero-btn">
                        <a
                        href="https://forms.gle/14pBtiWezMZeCW8q9"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <MagneticButton className="bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            SCHOOL REGISTRATION
                        </MagneticButton>
                        </a>
                    </div>
                    <div className="hero-btn">
                        <a href="#categories">
                        <MagneticButton className="bg-purple-500 text-white hover:bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                            EXPLORE COMPETITIONS!
                        </MagneticButton>
                        </a>
                    </div>
                    </div>
                </div>
                </main>

                <About />
                <Categories />
                <Countdown />
                <Contact />
                <Footer />
            </>
            </div>
        );
        }
