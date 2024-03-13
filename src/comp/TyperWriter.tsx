import React, { useState, useEffect } from "react";

const Typewriter = ({ textArray, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordEnd, setWordEnd] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < textArray[wordIndex].length) {
        if (!wordEnd && textArray[wordIndex][index] === " ") {
          setWordEnd(true);
        }

        if (wordEnd && textArray[wordIndex][index] === " ") {
          setIndex(index + 1);
          return;
        }

        setDisplayText((prevText) => prevText + textArray[wordIndex][index]);
        setIndex(index + 1);
      } else {
        setIndex(0);
        setWordEnd(false);
        setWordIndex((prevWordIndex) => (prevWordIndex + 1) % textArray.length);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [index, wordIndex, textArray, delay, wordEnd]);

  return <span>{displayText}</span>;
};

export default Typewriter;