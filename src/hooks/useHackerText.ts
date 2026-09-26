// src/hooks/useHackerText.ts

import { useState, useCallback, useRef } from 'react';

type UseHackerTextReturn = [string, (e: React.MouseEvent<HTMLElement>) => void];

// Character sets for the scramble effect
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CYBER_LETTERS = "ΣΦΓΔΨΞΩΠ#%&@$*<>";

/**
 * A custom React hook for creating a "hacker-style" text scramble effect on hover.
 * @param initialText The text to display initially.
 * @param cyber Whether to use the futuristic cyber character set.
 * @returns A tuple containing the current text state and the event handler to trigger the effect.
 */
export const useHackerText = (
  initialText: string,
  cyber: boolean = false
): UseHackerTextReturn => {
  const [text, setText] = useState(initialText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // The main scramble function
  const scramble = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const targetText = e.currentTarget.dataset.value || initialText;
    let iteration = 0;

    // Clear any existing animation interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setText(
        targetText
          .split("")
          .map((letter, index) => {
            // If the character has already been "decoded", return the original character
            if (index < iteration) {
              return targetText[index];
            }
            // Return spaces as they are
            if (letter === " ") return " ";
            
            // Otherwise, return a random character from the selected set
            const characterSet = cyber ? CYBER_LETTERS : LETTERS;
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
          .join("")
      );

      // Stop the interval when all letters are decoded
      if (iteration >= targetText.length) {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
      }

      // Increment the iteration, controlling the speed of the reveal
      iteration += 1 / 3;
    }, 30); // Runs every 30ms
  }, [initialText, cyber]);

  return [text, scramble];
};
