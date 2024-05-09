import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const word = words[currentWordIndex];
    const wordLength = word.length;

    const type = () => {
      setCurrentWord(word.substring(0, currentWord.length + 1));
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentWord === word) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      }

      if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, currentWordIndex, isDeleting, typingSpeed, words]);

  return <span>{currentWord}</span>;
};

export default TypeWriter;