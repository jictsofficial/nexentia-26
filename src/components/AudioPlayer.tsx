'use client';
import { useEffect } from 'react';

export default function AudioPlayer() {
  useEffect(() => {
    const bgm = new Audio('/audio/bgm.mp3');
    bgm.loop = true;
    bgm.volume = 0.2;

    const clickSound = new Audio('/audio/click.mp3');
    let isMusicPlaying = false;

    const handleInteraction = () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});

      if (!isMusicPlaying) {
        bgm.play().then(() => {
          isMusicPlaying = true;
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      bgm.pause();
    };
  }, []);

  return null;
}