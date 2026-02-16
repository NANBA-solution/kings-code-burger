import React, { useState, useEffect } from 'react';

interface Slide {
  title: string;
  highlight: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  bgGradient: string;
}

interface HeroSlideshowProps {
  slides: Slide[];
}

export default function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden pt-16">
      {/* Slides */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              background: s.bgGradient,
            }}
          />
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up">
                {s.title}
                <span className="block text-primary">{s.highlight}</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 font-light tracking-wider animate-fade-in-up animation-delay-200">
                {s.subtitle}
              </p>
              <button
                onClick={() => {
                  s.onButtonClick();
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 5000);
                }}
                className="bg-primary text-black px-8 md:px-12 py-3 md:py-4 font-bold text-lg md:text-xl uppercase tracking-wider rounded-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fade-in-up animation-delay-400"
              >
                {s.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-100 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-1 transition-all duration-300 cursor-pointer ${
              idx === currentSlide
                ? 'bg-primary w-12'
                : 'bg-white/30 hover:bg-white/50 w-8'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
