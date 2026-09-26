// src/components/Categories.tsx

"use client";
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CompetitionCard from './CompetitionCard';
import { competitionsData } from '@/data/competitions';
import { useHackerText } from '@/hooks/useHackerText'; // Import the new hook

gsap.registerPlugin(ScrollTrigger);

const filterCategories = [
  "ALL", 
  "CODINEX", 
  "NEXTRON", 
  "PIXELYNX", 
  "CIPHERX", 
  "VOICESNX", 
  "VISUALNX", 
  "FRAMENX", 
  "MOST POPULAR SOCIETY"
];

const Categories = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [filteredComps, setFilteredComps] = useState(competitionsData);
  const [title, scrambleTitle] = useHackerText("Categories"); // Use the hook

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.to(Array.from(grid.children) as HTMLElement[], {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        if (activeFilter === "ALL") {
          setFilteredComps(competitionsData);
        } else {
          setFilteredComps(competitionsData.filter(c => c.category === activeFilter));
        }
      }
    });
  }, [activeFilter]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || filteredComps.length === 0) return;
    const children = Array.from(grid.children) as HTMLElement[];
    gsap.fromTo(
      children,
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.1 }
    );
  }, [filteredComps]);

  return (
    <section id="categories" ref={sectionRef} className="w-full bg-black py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h2 
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center text-purple-400 mb-8"
          onMouseEnter={scrambleTitle}
          data-value="CATEGORIES"
        >
          {title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full border-2 transition-all duration-300 ${activeFilter === cat ? 'bg-purple-600 border-purple-600 text-white' : 'bg-transparent border-gray-600 text-gray-400 hover:border-purple-500 hover:text-white'}`}
              data-cursor-hover
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredComps.map((comp) => (
            <div key={comp.slug}>
              <CompetitionCard
                title={comp.title}
                subtitle={comp.subtitle}
                logoSrc={comp.logoSrc}
                slug={comp.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;