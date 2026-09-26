// src/components/modals/RulesModal.tsx

"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RuleSection } from '@/data/rrData';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: RuleSection[];
  pdfUrl: string;
}

const RulesModal = ({ isOpen, onClose, title, content, pdfUrl }: RulesModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const handleClose = () => {
    if (isAnimating.current || !isOpen) return;
    isAnimating.current = true;
    
    gsap.to(modalRef.current, {
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        document.body.style.overflow = 'auto';
        onClose();
        isAnimating.current = false;
      }
    });
    gsap.to(backdropRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });
  };
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      isAnimating.current = true;
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out', onComplete: () => {
          isAnimating.current = false;
        }}
      );
    }
  }, [isOpen]);

  return (
    <div
      ref={backdropRef}
      className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex justify-center items-end ${isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-4xl h-[90vh] bg-gray-900/80 border-t-2 border-purple-500 rounded-t-3xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-shrink-0 p-4 sm:p-6 flex items-center justify-between border-b border-gray-700">
          <h2 className="text-lg sm:text-2xl font-bold text-purple-300 font-orbitron">{title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full"
            data-cursor-hover
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </header>

        <div className="flex-grow p-4 sm:p-8 overflow-y-auto font-sans text-gray-300">
          {Array.isArray(content) && content.length > 0 ? (
            content.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-md sm:text-xl font-bold text-cyan-300 mb-4 font-orbitron">{section.title}</h3>
                <ul className="space-y-3 list-disc list-inside">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex} className="leading-relaxed text-sm sm:text-base">{point}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Rules & Regulations are currently unavailable.</p>
          )}
        </div>

        <footer className="flex-shrink-0 p-4 sm:p-6 border-t border-gray-700 bg-gray-900/50">
          <a
            href={pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
            data-cursor-hover
          >
            Download PDF
          </a>
        </footer>
      </div>
    </div>
  );
};

export default RulesModal;