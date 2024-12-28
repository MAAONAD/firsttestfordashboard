import React, { useRef, useState, useEffect } from 'react';

const CHARS = "!@#$%^&*():{};|,.<>/?█▓░▒";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

interface EncryptTextProps {
  text: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}

export default function EncryptText({ text, className = "", delay = 0, inView = true }: EncryptTextProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (inView && !isScrambling) {
      setTimeout(() => {
        scramble();
      }, delay);
    }
  }, [inView]);

  const scramble = () => {
    setIsScrambling(true);
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          if (char === ' ') return ' ';
          
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayText(text);
    setIsScrambling(false);
  };

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}