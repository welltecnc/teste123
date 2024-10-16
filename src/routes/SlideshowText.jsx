
import React, { useState, useEffect } from 'react';
// import {SlideshowTextStyle}  from '../css/SlideshowTextStyle';

const SlideshowText = ({ texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="slideshow">
      <h1>{texts[currentIndex]}</h1>
    </div>
  );
};

export default SlideshowText;