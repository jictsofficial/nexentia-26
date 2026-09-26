// src/components/modals/LeaderboardModal.tsx

"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// නියැදි දත්ත (මේවා පසුව ඔබට සැබෑ දත්ත වලින් යාවත්කාලීන කළ හැක)
/*
const leaderboardData = [
  { rank: 1, schoolName: 'St. Joseph\'s Girls\' School', votes: 1250 },
  { rank: 2, schoolName: 'Royal College', votes: 1100 },
  { rank: 3, schoolName: 'Visakha Vidyalaya', votes: 980 },
  { rank: 4, schoolName: 'Ananda College', votes: 950 },
  { rank: 5, schoolName: 'Musaeus College', votes: 870 },
  { rank: 6, schoolName: 'Nalanda College', votes: 820 },
  { rank: 7, schoolName: 'Sirimavo Bandaranaike Vidyalaya', votes: 750 },
  { rank: 8, schoolName: 'D.S. Senanayake College', votes: 710 },
  { rank: 9, schoolName: 'Bishop\'s College', votes: 680 },
  { rank: 10, schoolName: 'Isipathana College', votes: 650 },
]; */

// Define a specific type for a leaderboard entry
interface LeaderboardEntry {
  rank: number;
  schoolName: string;
  votes: number;
}

// Use the new type for the leaderboardData array
const leaderboardData: LeaderboardEntry[] = [];

const LeaderboardModal = ({ isOpen, onClose }: LeaderboardModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const handleClose = () => {
    if (isAnimating.current || !isOpen) return;
    isAnimating.current = true;
    
    window.dispatchEvent(new CustomEvent('start-lenis'));

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
      window.dispatchEvent(new CustomEvent('stop-lenis'));
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
          <h2 className="text-lg sm:text-2xl font-bold text-purple-300 font-orbitron">Live Leaderboard</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full"
            data-cursor-hover
            aria-label="Close"
          >
            <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </header>

        <div className="flex-grow p-4 sm:p-8 overflow-y-auto">
          <table className="w-full text-left font-sans">
            <thead className="sticky top-0 bg-gray-900/80 backdrop-blur-sm">
              <tr>
                <th className="p-4 text-sm sm:text-base font-bold text-cyan-300 uppercase w-1/6 sm:w-1/12">Rank</th>
                <th className="p-4 text-sm sm:text-base font-bold text-cyan-300 uppercase w-3/6 sm:w-7/12">School Name</th>
                <th className="p-4 text-sm sm:text-base font-bold text-cyan-300 uppercase w-2/6 sm:w-4/12 text-right">No. of Votes</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((school, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="p-4 text-base sm:text-lg font-bold text-white">{school.rank}</td>
                  <td className="p-4 text-sm sm:text-base text-gray-300">{school.schoolName}</td>
                  <td className="p-4 text-base sm:text-lg font-bold text-purple-400 text-right">{school.votes.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardModal;