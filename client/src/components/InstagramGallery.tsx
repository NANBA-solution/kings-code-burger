import React, { useState, useEffect } from 'react';
import { Heart, Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  caption: string;
}

interface InstagramGalleryProps {
  posts: InstagramPost[];
  instagramUrl: string;
}

export default function InstagramGallery({ posts, instagramUrl }: InstagramGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, posts.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const post = posts[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Gallery */}
      <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-900 group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Heart Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-16 h-16 text-white fill-white" />
        </div>

        {/* Header with Instagram Handle and Follow Button */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-start">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full">
            <Instagram className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">@kings_code_burger</span>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105"
          >
            Follow
          </a>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
            setAutoPlay(false);
            setTimeout(() => setAutoPlay(true), 5000);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110"
        >
          ←
        </button>

        <button
          onClick={() => {
            setCurrentIndex((prev) => (prev + 1) % posts.length);
            setAutoPlay(false);
            setTimeout(() => setAutoPlay(true), 5000);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110"
        >
          →
        </button>

        {/* Post Counter */}
        <div className="absolute bottom-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
          {currentIndex + 1}/{posts.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-primary w-3 h-3'
                : 'bg-primary/30 hover:bg-primary/50 w-2 h-2'
            }`}
          />
        ))}
      </div>

      {/* View on Instagram Button */}
      <div className="text-center mt-6">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-black px-6 py-2 font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300 transform hover:scale-105"
        >
          View on Instagram
        </a>
      </div>
    </div>
  );
}
