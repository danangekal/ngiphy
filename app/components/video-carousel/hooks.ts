import { useState } from 'react';

const useHooks = (videos: any) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const prevSlide = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos?.length) % videos?.length,
    );
  };

  const nextSlide = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos?.length);
  };

  return { currentVideoIndex, prevSlide, nextSlide };
};

export default useHooks;
