'use client';

import { useState } from 'react';

const VideoCarousel = ({ videos }: any) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const prevSlide = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos?.length) % videos?.length,
    );
  };

  const nextSlide = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos?.length);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl w-full relative">
        <div className="overflow-hidden rounded-lg">
          <div className="flex">
            {videos?.map(({ id, images }: any, index: number) => (
              <div
                key={id}
                className={`w-full flex-none ${
                  index === currentVideoIndex ? 'block' : 'hidden'
                }`}
              >
                <video controls>
                  <source
                    className="w-full"
                    src={images?.original?.mp4}
                    type="video/mp4"
                  />
                  {/* Your browser does not support the video tag. */}
                </video>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-2 right-2 flex items-center justify-between text-4xl text-white hover:text-blue-200">
          <button onClick={prevSlide}>&lt;</button>
          {videos?.map(({ id, title }: any, index: number) => (
            <p
              key={id}
              className={`text-xs truncate ${
                index === currentVideoIndex ? 'block' : 'hidden'
              }`}
            >
              {title}
            </p>
          ))}

          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
