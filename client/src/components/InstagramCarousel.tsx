import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InstagramItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface InstagramCarouselProps {
  items: InstagramItem[];
  instagramUrl: string;
}

export default function InstagramCarousel({ items, instagramUrl }: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);


  const goToPrevious = () => {
    setCurrentIndex((prevIndex: number) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex: number) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) {
      // Resume auto-play after 5 seconds of inactivity
      const timeoutId = setTimeout(() => {
        setAutoPlay(true);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex: number) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [autoPlay, items.length]);

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-lg md:rounded-lg aspect-square bg-muted group h-64 md:h-80">
        {/* Follow Button Overlay */}
        <div className="absolute top-0 left-0 right-0 z-20 p-2 md:p-3 flex justify-between items-start">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <Instagram className="w-3 h-3 text-white" />
            <span className="text-white font-semibold text-xs">@kings_code_burger</span>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full font-semibold text-xs transition-all duration-300 transform hover:scale-105"
          >
            Follow
          </a>
        </div>

        {/* Carousel Items */}
        <div className="relative w-full h-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  loop
                  muted
                  autoPlay={index === currentIndex}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-10 h-10 md:w-12 md:h-12 text-white" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 z-10 p-1 md:p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 z-10 p-1 md:p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Item Counter */}
        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 z-10 bg-black/40 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">
          {currentIndex + 1}/{items.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-1 md:gap-1.5 mt-3 md:mt-4 flex-wrap">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-primary w-2 h-2 md:w-3 md:h-3'
                : 'bg-primary/30 hover:bg-primary/50 w-1.5 h-1.5 md:w-2 md:h-2'
            }`}
          />
        ))}
      </div>

      {/* View on Instagram Button */}
      <div className="text-center mt-2 md:mt-3">
        <Button
          asChild
          size="sm"
          className="bg-primary hover:bg-primary/90 text-xs h-8 px-3"
        >
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </Button>
      </div>
    </div>
  );
}
