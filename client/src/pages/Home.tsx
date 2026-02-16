/*
Design Philosophy: Clean Modern Burger Shop
- White background with lime green accents
- Fresh, clean aesthetic
- Professional and welcoming
- Multilingual support (Japanese / English)
*/

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MenuCarousel from "@/components/MenuCarousel";
import InstagramCarousel from "@/components/InstagramCarousel";
import HeroSlideshow from "@/components/HeroSlideshow";
import InstagramGallery from "@/components/InstagramGallery";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const instagramGridRef = useRef<HTMLDivElement>(null);

  // Update document title and meta tags for SEO based on language
  useEffect(() => {
    if (language === 'ja') {
      document.title = "King's Code Burger | 大阪のスマッシュバーガー専門店";
      document.querySelector('meta[name="description"]')?.setAttribute('content', '大阪のスマッシュバーガー専門店。100%オージービーフを高温で焼き上げた、外はカリッ、中はジュワッなハンバーガー。Uber Eats対応。');
    } else {
      document.title = "King's Code Burger | Osaka's Best Smash Burger";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Osaka\'s best smash burger restaurant. 100% Australian beef smashed at high heat. Crispy outside, juicy inside. Order on Uber Eats.');
    }
  }, [language]);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for Instagram videos - only play when visible
  useEffect(() => {
    const videos = instagramGridRef.current?.querySelectorAll('video');
    if (!videos || videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    {
      nameKey: 'menu.king.name',
      nameJaKey: 'KING BURGER',
      descKey: 'menu.king.desc',
      price: '¥1,200',
      tag: 'BEST SELLER',
      tagColor: 'bg-primary',
      image: '🍔'
    },
    {
      nameKey: 'menu.double.name',
      nameJaKey: 'DOUBLE CHEESE',
      descKey: 'menu.double.desc',
      price: '¥1,500',
      tag: 'POPULAR',
      tagColor: 'bg-blue-500',
      image: '🍔'
    },
    {
      nameKey: 'menu.inferno.name',
      nameJaKey: 'INFERNO BURGER',
      descKey: 'menu.inferno.desc',
      price: '¥1,600',
      tag: 'SPICY',
      tagColor: 'bg-red-500',
      image: '🍔'
    },
    {
      nameKey: 'menu.bbq.name',
      nameJaKey: 'BBQ BACON',
      descKey: 'menu.bbq.desc',
      price: '¥1,700',
      tag: 'PREMIUM',
      tagColor: 'bg-orange-500',
      image: '🍔'
    },
    {
      nameKey: 'menu.truffle.name',
      nameJaKey: 'TRUFFLE FRIES',
      descKey: 'menu.truffle.desc',
      price: '¥700',
      tag: 'SIDES',
      tagColor: 'bg-yellow-600',
      image: '🍟'
    },
    {
      nameKey: 'menu.craft.name',
      nameJaKey: 'CRAFT SODAS',
      descKey: 'menu.craft.desc',
      price: '¥400',
      tag: 'DRINKS',
      tagColor: 'bg-cyan-500',
      image: '🥤'
    }
  ];

  const instagramPosts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
      likes: 1234,
      caption: 'Crispy on the outside, juicy on the inside'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1550547990-294146efcc85?w=500&h=500&fit=crop',
      likes: 2156,
      caption: 'Fresh ingredients daily'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561341?w=500&h=500&fit=crop',
      likes: 1890,
      caption: 'Double cheese perfection'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop',
      likes: 2345,
      caption: 'Smash burger magic'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-4">
            <a href="/" className="text-2xl md:text-3xl font-bold">
              <span className="text-primary">KING'S</span>
              <span className="text-black"> CODE</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#philosophy" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
              {t('nav.philosophy')}
            </a>
            <a href="#menu" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
              {t('nav.menu')}
            </a>
            <a href="#reviews" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
              {t('nav.reviews')}
            </a>
            <a href="#instagram" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
              {t('nav.instagram')}
            </a>
            <a href="#access" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
              {t('nav.access')}
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            
            {/* Language Toggle */}
            <div className="flex gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('ja')}
                className={`px-2 md:px-3 py-1 text-xs font-bold rounded transition-all duration-300 ${language === 'ja' ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground hover:text-primary'}`}
              >
                日本語
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 md:px-3 py-1 text-xs font-bold rounded transition-all duration-300 ${language === 'en' ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground hover:text-primary'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slideshow Section */}
      <HeroSlideshow
        slides={[
          {
            title: language === 'ja' ? 'OSAKA\'S' : 'OSAKA\'S',
            highlight: language === 'ja' ? 'BEST' : 'BEST',
            subtitle: language === 'ja' ? '100%オージービーフを高温でスマッシュ' : '100% Australian Beef Smashed Hot',
            buttonText: language === 'ja' ? 'メニューを見る' : 'View Menu',
            onButtonClick: scrollToMenu,
            bgGradient: 'linear-gradient(135deg, rgba(0, 255, 102, 0.15), rgba(0, 0, 0, 0.9)), radial-gradient(circle at 30% 50%, rgba(0, 255, 102, 0.1), transparent)'
          },
          {
            title: language === 'ja' ? 'FRESH' : 'FRESH',
            highlight: language === 'ja' ? 'INGREDIENTS' : 'INGREDIENTS',
            subtitle: language === 'ja' ? '毎日新鮮な食材を厳選して使用' : 'Fresh Ingredients Daily',
            buttonText: language === 'ja' ? 'もっと詳しく' : 'Learn More',
            onButtonClick: () => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' }),
            bgGradient: 'linear-gradient(135deg, rgba(255, 100, 0, 0.15), rgba(0, 0, 0, 0.9)), radial-gradient(circle at 70% 50%, rgba(255, 100, 0, 0.1), transparent)'
          },
          {
            title: language === 'ja' ? 'OSAKA\'S' : 'OSAKA\'S',
            highlight: language === 'ja' ? '3 STORES' : '3 STORES',
            subtitle: language === 'ja' ? '大阪に3店舗展開中' : 'Now Open in Osaka',
            buttonText: language === 'ja' ? '店舗を探す' : 'Find Store',
            onButtonClick: () => document.getElementById('access')?.scrollIntoView({ behavior: 'smooth' }),
            bgGradient: 'linear-gradient(135deg, rgba(0, 150, 255, 0.15), rgba(0, 0, 0, 0.9)), radial-gradient(circle at 50% 30%, rgba(0, 150, 255, 0.1), transparent)'
          }
        ]}
      />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('philosophy.title')}</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">{t('philosophy.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow">
              <div className="text-center">
                <div className="text-6xl mb-4">🐄</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{t('philosophy.beef.title')}</h3>
                <p className="text-gray-600">{t('philosophy.beef.desc')}</p>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow">
              <div className="text-center">
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{t('philosophy.smash.title')}</h3>
                <p className="text-gray-600">{t('philosophy.smash.desc')}</p>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{t('philosophy.quality.title')}</h3>
                <p className="text-gray-600">{t('philosophy.quality.desc')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('menu.title')}</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">{t('menu.subtitle')}</p>
          
          <MenuCarousel items={menuItems} t={t} />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('reviews.title')}</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">{t('reviews.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-8 bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{t(`reviews.review${i}.text`)}"</p>
                <p className="font-bold text-gray-900">{t(`reviews.review${i}.author`)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="instagram" className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('instagram.title')}</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">{t('instagram.subtitle')}</p>
          
          <div className="flex justify-center">
            <InstagramGallery 
              posts={instagramPosts}
              instagramUrl="https://instagram.com/kings_code_burger"
            />
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('access.title')}</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">{t('access.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-8 bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t(`access.store${i}.name`)}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{t(`access.store${i}.address`)}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{t(`access.store${i}.phone`)}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{t(`access.store${i}.hours`)}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">KING'S</span> CODE
              </h3>
              <p className="text-gray-400">{t('footer.description')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('footer.menu')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-primary transition-colors">{t('nav.menu')}</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">{t('nav.reviews')}</a></li>
                <li><a href="#instagram" className="hover:text-primary transition-colors">{t('nav.instagram')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('footer.follow')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('footer.order')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Uber Eats</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Food Delivery</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Call Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 King's Code Burger. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
