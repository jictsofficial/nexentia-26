// src/components/CustomCursor.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    // GSAP ticker එකෙන් cursor එක smoothව චලනය කිරීම
    gsap.ticker.add(() => {
      gsap.to(cursor, {
        duration: 0.3,
        x: mouseX,
        y: mouseY,
        ease: "power3.out"
      });
    });

    // Hover effect එක
    const handleMouseEnter = () => gsap.to(cursor, { scale: 2.5, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

    document.querySelectorAll('[data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll('[data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

export default CustomCursor;