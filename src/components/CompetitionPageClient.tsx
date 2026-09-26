// src/components/CompetitionPageClient.tsx

"use client";
import Link from "next/link";
import { useLayoutEffect, useRef, useState, useMemo, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Competition } from "@/data/competitions";
import LeaderboardModal from "./modals/LeaderboardModal";
import { rrData } from "@/data/rrData";
import { registrationLinks } from "@/data/registrationLinks";
import { submissionLinks } from "@/data/submissionLinks";

gsap.registerPlugin(ScrollTrigger);

interface CompetitionPageClientProps {
  competition: Competition;
}

export default function CompetitionPageClient({ competition }: CompetitionPageClientProps) {
  const compRef = useRef(null);
  const rulesContainerRef = useRef(null);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);
  const [alertState, setAlertState] = useState({ isOpen: false, message: '' });
  const alertRef = useRef<HTMLDivElement>(null);

  const competitionRules = useMemo(() => {
    return rrData.find(r => r.slug === competition.slug);
  }, [competition.slug]);

  const registrationLinkForCategory = registrationLinks[competition.slug] || "#";

  useEffect(() => {
    if (alertState.isOpen) {
      gsap.fromTo(
        alertRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      const timer = setTimeout(() => {
        gsap.to(alertRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => setAlertState({ isOpen: false, message: '' }),
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertState]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header elements
      gsap.from(".comp-header", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 });
      
      // Animate rules cards on scroll
      if (rulesContainerRef.current) {
        gsap.from(".rule-card", {
          scrollTrigger: {
            trigger: rulesContainerRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out"
        });
      }
    }, compRef);
    return () => ctx.revert();
  }, [competition.slug]);

  const generateSubmissionKey = (subCompName: string): string => {
    return `${competition.slug}-${subCompName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`;
  };

  const isMostPopularAward = competition.slug === 'most-popular';
  
  // Since there is only 1 sub-competition for each (or 0 for most-popular)
  const subComp = competition.subCompetitions[0];
  const subKey = subComp ? generateSubmissionKey(subComp.name) : '';
  const currentSubmissionUrl = subComp ? submissionLinks[subKey] : undefined;
  
  const rulesToDisplay = isMostPopularAward 
    ? competitionRules?.rules.find(r => r.subCompetitionName === 'Most Popular School ICT Society')
    : subComp 
      ? competitionRules?.rules.find(r => r.subCompetitionName === subComp.name)
      : null;

  return (
    <>
      <div ref={compRef} className="w-full bg-black font-orbitron pt-32 pb-16 min-h-screen overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          
          {/* Cyberpunk Style Header */}
          <div className="comp-header text-center mb-10 relative flex justify-center items-center h-40 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent blur-3xl -z-10"></div>
            <div className="relative inline-block border-l-2 border-b-2 border-cyan-500 pb-2 pl-4 pr-4">
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 tracking-widest uppercase">
                 {competition.title}<span className="text-cyan-600">{"//."}</span>
               </h1>
            </div>
          </div>

          <div className="comp-header text-center mb-12">
             <h2 className="text-xl md:text-3xl text-purple-400 font-bold mb-4">{competition.subtitle}</h2>
             {subComp && (
               <p className="text-gray-300 font-sans text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                 {subComp.description}
               </p>
             )}
             {isMostPopularAward && (
               <p className="text-gray-300 font-sans text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                 This special award recognizes the ICT Society that garners the most support from the community.
               </p>
             )}
          </div>

          {/* Action Buttons */}
          <div className="comp-header flex flex-wrap justify-center gap-4 mb-20">
             <a
                href={registrationLinkForCategory}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
                data-cursor-hover
              >
                Register Now
              </a>
              
              {!isMostPopularAward && (
                currentSubmissionUrl ? (
                  <a
                    href={currentSubmissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"
                    data-cursor-hover
                  >
                    Submit Project
                  </a>
                ) : (
                  <button
                    className="px-6 py-3 bg-[#2a2a35] text-gray-500 font-bold rounded-lg cursor-not-allowed border border-gray-700"
                    disabled
                  >
                    Submissions Closed
                  </button>
                )
              )}

              {isMostPopularAward && (
                <button 
                  onClick={() => setIsLeaderboardModalOpen(true)} 
                  className="px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300" 
                  data-cursor-hover
                >
                  Live Leaderboard
                </button>
              )}

              {/* Download PDF Button Added Here */}
              {rulesToDisplay?.pdfUrl && (
                <a
                  href={rulesToDisplay.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                  data-cursor-hover
                >
                  Download PDF
                </a>
              )}
          </div>

          {/* Inline Rules & Regulations */}
          <div ref={rulesContainerRef} className="mt-16 relative">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-px bg-gradient-to-r from-transparent to-purple-500 flex-1"></div>
               <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider">
                 Rules <span className="text-purple-500">&</span> Regulations
               </h3>
               <div className="h-px bg-gradient-to-l from-transparent to-purple-500 flex-1"></div>
            </div>

            {rulesToDisplay && rulesToDisplay.content.length > 0 ? (
              <div className="flex flex-col gap-6">
                {rulesToDisplay.content.map((section, index) => (
                  <div key={index} className="rule-card relative p-6 md:p-8 bg-[#0a0a0f] border border-purple-500/20 rounded-2xl shadow-lg hover:border-purple-500/50 transition-colors duration-300">
                    {/* Decorative Dot */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></div>
                    
                    <h4 className="text-xl font-bold text-cyan-300 mb-4 pl-4">{section.title}</h4>
                    <ul className="space-y-3 font-sans text-gray-400">
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1 opacity-80">▹</span>
                          <span className="leading-relaxed text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 font-sans py-12 bg-[#0a0a0f] border border-gray-800 rounded-2xl">
                <p className="text-xl mb-2">Rules & Regulations will be updated soon.</p>
                <p className="text-sm">Please check back later.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-24">
            <Link href="/#categories" className="inline-block text-gray-400 border border-gray-600 px-8 py-3 rounded-lg hover:border-purple-400 hover:text-purple-400 transition-colors duration-300" data-cursor-hover>
              &larr; Back to Categories
            </Link>
          </div>

        </div>
      </div>

      <LeaderboardModal
        isOpen={isLeaderboardModalOpen}
        onClose={() => setIsLeaderboardModalOpen(false)}
      />

      {alertState.isOpen && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[1000]">
          <div
            ref={alertRef}
            className="bg-gray-900/80 backdrop-blur-md border border-purple-500 text-white font-sans text-center py-3 px-6 rounded-lg shadow-lg"
          >
            {alertState.message}
          </div>
        </div>
      )}
    </>
  );
}