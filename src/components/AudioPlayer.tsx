'use client';
import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Volume එක සකස් කිරීම
    if (bgmRef.current) {
      bgmRef.current.volume = 0.3;
      
      // Auto-play කිරීමට උත්සාහ කිරීම
      bgmRef.current.play().then(() => {
        hasStartedRef.current = true;
      }).catch(() => {
        console.log("Browser blocked auto-play. Waiting for the first click.");
      });
    }

    const handleInteraction = () => {
      // Click sound එක play කිරීම
      if (clickSoundRef.current) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(() => {});
      }

      // Auto-play block වී තිබුණහොත්, පළමු click එකෙන් music ආරම්භ කිරීම
      if (!hasStartedRef.current && bgmRef.current) {
        bgmRef.current.play().then(() => {
          hasStartedRef.current = true;
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  // Mute සහ Unmute කිරීමේ function එක
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mute button එක click කරද්දී click sound එක ඇසීම වැළැක්වීම
    if (bgmRef.current) {
      const newMutedState = !isMuted;
      bgmRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <>
      {/* Audio Elements */}
      <audio ref={bgmRef} src="/audio/bgm.mp3" loop />
      <audio ref={clickSoundRef} src="/audio/click.mp3" />

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[9999] p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
        aria-label="Toggle Music"
      >
        {isMuted ? (
          // Mute Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          // Unmute Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        )}
      </button>
    </>
  );
}