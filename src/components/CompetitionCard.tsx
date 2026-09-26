// src/components/CompetitionCard.tsx
"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

type CompetitionCardProps = {
  title: string;
  subtitle: string;
  logoSrc: string;
  slug: string;
};

const CompetitionCard = ({ title, subtitle, logoSrc, slug }: CompetitionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const x = clientX - left;
    const y = clientY - top;
    
    // Create a subtle 3D rotation based on mouse position
    const rotateX = gsap.utils.mapRange(0, height, -10, 10)(y);
    const rotateY = gsap.utils.mapRange(0, width, 10, -10)(x);

    gsap.to(ref.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.02,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      // Card Container Styling - Increased height to handle 2-line subtitles
      className="group relative w-full h-[24rem] sm:h-[26rem] rounded-2xl border border-white/5 bg-[#08080c] flex flex-col justify-between items-center p-5 sm:p-6 cursor-pointer overflow-hidden shadow-lg transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    >
      {/* Subtle Background Glow behind the logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-600/20 rounded-full blur-[60px] group-hover:bg-cyan-500/30 transition-colors duration-500 z-0"></div>

      {/* Logo Section */}
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="w-full flex-1 flex justify-center items-center relative mt-2 z-10 min-h-0"
      >
        {/* mix-blend-screen drops the black background of the image! */}
        {/* Slightly reduced max-size so it leaves more room for text below */}
        <div className="w-48 h-48 sm:w-52 sm:h-52 relative mix-blend-screen transition-transform duration-500 group-hover:scale-110">
          <Image 
            src={logoSrc} 
            alt={`${title} logo`} 
            fill 
            style={{ objectFit: "contain" }} 
            sizes="(max-width: 768px) 100vw, 300px"
            priority
          />
        </div>
      </div>

      {/* Content & Button Section */}
      <div 
        style={{ transform: "translateZ(60px)" }} 
        className="w-full flex flex-col items-center mt-4 z-10 shrink-0"
      >
        {/* Screen Reader Only Title (Since logo has the title text visually) */}
        <h3 className="sr-only">{title}</h3>
        
        {/* Added line-clamp-2 and reduced bottom margin to ensure fit */}
        <p className="font-sans text-gray-400 text-center uppercase tracking-widest text-xs sm:text-sm font-semibold mb-4 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
          {subtitle}
        </p>

        <Link 
          href={`/competitions/${slug}`} 
          className="relative overflow-hidden font-orbitron bg-transparent border-2 border-purple-600 text-purple-400 px-8 py-2.5 rounded-lg text-sm uppercase tracking-widest transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          data-cursor-hover
        >
          <span className="relative z-10 font-bold">Explore Event</span>
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;