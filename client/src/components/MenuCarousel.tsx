import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';

interface MenuItem {
  nameKey: string;
  nameJaKey: string;
  descKey: string;
  price: string;
  tag: string;
  tagColor?: string;
  image: string;
}

interface MenuCarouselProps {
  items: MenuItem[];
  t: (key: string) => string;
}

export default function MenuCarousel({ items, t }: MenuCarouselProps) {
  const [emblaApi, emblaApi_setEmblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    try {
      const api = emblaApi as any;
      setSelectedIndex(api.selectedScrollSnap?.() ?? 0);
      setCanScrollPrev(api.canScrollPrev?.() ?? false);
      setCanScrollNext(api.canScrollNext?.() ?? false);
    } catch (e) {
      // Silently handle errors
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    try {
      const api = emblaApi as any;
      api.on?.('select', onSelect);
      return () => {
        api.off?.('select', onSelect);
      };
    } catch (e) {
      // Silently handle errors
    }
  }, [emblaApi, onSelect]);

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    autoPlayRef.current = setInterval(() => {
      try {
        const api = emblaApi as any;
        if (api.canScrollNext?.()) {
          api.scrollNext?.();
        } else {
          api.scrollToIndex?.(0);
        }
      } catch (e) {
        // Silently handle errors
      }
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, emblaApi]);

  const scrollPrev = useCallback(() => {
    try {
      const api = emblaApi as any;
      api.scrollPrev?.();
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 5000);
    } catch (e) {
      // Silently handle errors
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    try {
      const api = emblaApi as any;
      api.scrollNext?.();
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 5000);
    } catch (e) {
      // Silently handle errors
    }
  }, [emblaApi]);

  const goToSlide = useCallback((index: number) => {
    try {
      const api = emblaApi as any;
      api.scrollToIndex?.(index);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 5000);
    } catch (e) {
      // Silently handle errors
    }
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaApi_setEmblaApi as any}>
        <div className="flex gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transition-all duration-300"
            >
              <Card 
                className="overflow-hidden bg-white border-2 border-border hover:border-primary transition-all duration-300 hover:transform hover:rotate-1 hover:scale-105 group card-shadow h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={t(item.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.tag && (
                    <div className={`absolute top-4 right-4 px-4 py-2 font-bold text-sm ${item.tagColor === 'lime' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{t(item.nameKey)}</h3>
                      <p className="text-sm text-muted-foreground">{t(item.nameJaKey)}</p>
                    </div>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
