"use client";

import { useEffect, useState, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeCard = ({ value, unit }: { value: number; unit: string }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Adjusted styles for a tighter look */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 bg-gray-900/50 p-3 sm:p-4 rounded-lg shadow-lg border border-purple-800/50 min-w-[60px] sm:min-w-[80px] text-center">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-widest mt-2 text-gray-400">
        {unit}
      </div>
    </div>
  );
}

const Countdown = () => {
  const targetDate = useMemo(() => new Date('2026-10-02T14:00:00'), []);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }, [targetDate]);

  useEffect(() => {
    setIsClient(true); 
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 85%", end: "bottom center", toggleActions: "play none none none" }});
      tl.from(".anim-title", { y: 100, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from(".anim-subtitle", { y: 100, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
        .from(".anim-card", { y: 100, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="countdown" ref={sectionRef} className="relative w-full bg-black py-24 sm:py-32 text-white text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/OIM.png"
        alt="Countdown Background"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-80 z-0"
      />
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* ** THE FIX: Added gradient overlay for smooth transition ** */} 
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Content Container with adjusted margins */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Logo Image - Replacing "OPERATION IN MOTION" with the logo */}
        <div className="anim-title">
          <Image
            src="/OIMlogo.png"  // Add your custom logo image path
            alt="Operation In Motion"
            width={1000}  // Adjust the size as needed
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Adjusted margins for subtitle */}
        <p className="anim-subtitle text-base sm:text-lg md:text-xl mt-3 mb-10 text-gray-300">
         
        </p>

        {/* Time Countdown */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-8">
          {isClient ? (
            <>
              <div className="anim-card"><TimeCard value={timeLeft.days} unit="Days" /></div>
              <div className="anim-card"><TimeCard value={timeLeft.hours} unit="Hours" /></div>
              <div className="anim-card"><TimeCard value={timeLeft.minutes} unit="Minutes" /></div>
              <div className="anim-card"><TimeCard value={timeLeft.seconds} unit="Seconds" /></div>
            </>
          ) : (
            <>
              <div className="anim-card"><TimeCard value={0} unit="Days" /></div>
              <div className="anim-card"><TimeCard value={0} unit="Hours" /></div>
              <div className="anim-card"><TimeCard value={0} unit="Minutes" /></div>
              <div className="anim-card"><TimeCard value={0} unit="Seconds" /></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
