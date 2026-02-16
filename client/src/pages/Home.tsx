/*
Design Philosophy: Clean Modern Burger Shop
- White background with lime green accents
- Fresh, clean aesthetic
- Professional and welcoming
- Multilingual support (Japanese / English)
*/

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      nameKey: 'menu.cheese_burger',
      nameJaKey: 'menu.cheese_burger_ja',
      descKey: 'menu.cheese_burger_desc',
      price: "¥1,200",
      tag: "定番",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/zlcHmSYDrBfrZYpe.png"
    },
    {
      nameKey: 'menu.double_cheese',
      nameJaKey: 'menu.double_cheese_ja',
      descKey: 'menu.double_cheese_desc',
      price: "¥2,000",
      tag: "人気NO.1",
      tagColor: "lime",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/dpKaxlCQBeVpYUTZ.png"
    },
    {
      nameKey: 'menu.hot_chicken',
      nameJaKey: 'menu.hot_chicken_ja',
      descKey: 'menu.hot_chicken_desc',
      price: "¥1,200",
      tag: "本格派",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/hRrjhAGqvgbrygvr.png"
    },
    {
      nameKey: 'menu.hamburger',
      nameJaKey: 'menu.hamburger_ja',
      descKey: 'menu.hamburger_desc',
      price: "¥1,300",
      tag: "",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/EEDUcZlgKjPSrUdm.png"
    },
    {
      nameKey: 'menu.bacon_lettuce',
      nameJaKey: 'menu.bacon_lettuce_ja',
      descKey: 'menu.bacon_lettuce_desc',
      price: "¥1,400",
      tag: "",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/epKmYfJppyEWlUwe.png"
    },
    {
      nameKey: 'menu.double_burger',
      nameJaKey: 'menu.double_burger_ja',
      descKey: 'menu.double_burger_desc',
      price: "¥2,000",
      tag: "",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/ZzUSZGRmMVxPyenB.png"
    },
    {
      nameKey: 'menu.thick_bacon',
      nameJaKey: 'menu.thick_bacon_ja',
      descKey: 'menu.thick_bacon_desc',
      price: "¥1,800",
      tag: "",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/dPHfmSzlNWjndvOn.png"
    },
  ];

  // Social Media Links
  const socialLinks = {
    instagram: "https://www.instagram.com/kings_code_burger",
    googleReviews: "https://www.google.com/maps/place/King's+Code+Burger/@34.6834,135.5085,15z",
    googleNavigation: "https://www.google.com/gasearch?q=king's%20code%20burger%20%E3%82%AA%E3%83%BC%E3%83%8A%E3%83%BC%E6%8F%90%E4%BE%9B&source=sh/x/gs/m2/5#lpstate=pid:1120676595491597304"
  };

  const reviews = [
    {
      text: "Best burger I've had in Japan. No joke. Perfectly cooked. Juicy and so full of flavour.",
      author: "American Tourist",
      flag: "🇺🇸"
    },
    {
      text: "Proper hidden gem. The beef is 100% Aussie, and you can tell—it's rich, flavorful, and cooked just right.",
      author: "Australian Tourist",
      flag: "🇦🇺"
    },
    {
      text: "シンプルだからこそ、肉の旨味が際立つ。外はカリカリ、中はジューシー。今まで食べた中で最高のバーガーです。",
      author: "日本人リピーター",
      flag: "🇯🇵"
    }
  ];

  // Instagram auto-refresh effect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary card-shadow">
        <div className="container flex items-center justify-between py-3">
          <h1 className="text-2xl font-bold text-primary tracking-wider">KING'S CODE</h1>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#philosophy" className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.philosophy')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#menu" className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.menu')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#reviews" className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.reviews')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#instagram" className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group">
              INSTAGRAM
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#access" className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group">
              {t('nav.access')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          
          <div className="flex gap-4 items-center">
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.googleReviews} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            
            {/* Language Toggle */}
            <div className="flex gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('ja')}
                className={`px-3 py-1 text-xs font-bold rounded transition-all duration-300 ${language === 'ja' ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground hover:text-primary'}`}
              >
                日本語
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded transition-all duration-300 ${language === 'en' ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground hover:text-primary'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/kg2ECc2675ZMoJSDZdXVXy/sandbox/HlBaHJCulPei3ja9LAykEN-img-1_1771133839000_na1fn_aGVyby1idXJnZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2cyRUNjMjY3NVpNb0pTRFpkWFZYeS9zYW5kYm94L0hsQmFISkN1bFBlaTNqYTlMQXlrRU4taW1nLTFfMTc3MTEzMzgzOTAwMF9uYTFmbl9hR1Z5YnkxaWRYSm5aWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=elwZ1FANyhc0-iQwTz~YK~pHzFXJfy-7BCvIobL6BvkZmes90DqwG-zWmEeOVhLb8Pv9rqZBud5sV6LhLlF6euSaqaelfbhTbW1qoClIHmxvqtk4n5aM5M~PJy25wYw-to~v~yeCdN1ryWKZPlX6JxalN0wXUKWh5g7cPcLsmMZtWjUgcATh0NqFzrzONjXMgsFytNNA7xv4OaNfxlWdLtZMU2tI6MNBvZyzbL-DCwa6cNOVJYzV8Nhq46RQjhckzeU4zg9lkNCu~XVumALT-nm~7KROX63qzKNtvmAm1oNEhnbsnChj3Xkudy3yntn5JWrsnjts~OPMgEx1Iji9EA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-7xl md:text-9xl font-bold mb-4 text-white">
              {t('hero.title1')}<br />
              <span className="text-primary accent-line inline-block">{t('hero.title2')}</span><br />
              {t('hero.title3')}
            </h2>
            <p className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto whitespace-pre-line">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-bold text-white">4.7 / 5.0</span>
            </div>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-bold"
              onClick={scrollToMenu}
            >
              {t('hero.button')}
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('philosophy.title')}</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">{t('philosophy.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">{t('philosophy.beef')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('philosophy.beef_desc')}
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">{t('philosophy.smash')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('philosophy.smash_desc')}
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">{t('philosophy.house')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('philosophy.house_desc')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('menu.title')}</h2>
          <p className="text-center text-lg text-muted-foreground mb-16">{t('menu.subtitle')}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-white border-2 border-border hover:border-primary transition-all duration-300 hover:transform hover:rotate-1 hover:scale-105 group card-shadow"
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
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('reviews.title')}</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">{t('reviews.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 bg-white border-l-4 border-primary relative card-shadow">
                <div className="absolute top-6 left-6 text-6xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-foreground mb-6 leading-relaxed italic">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{review.flag}</span>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.author}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">INSTAGRAM</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">{t('instagram.subtitle') || 'Follow us for the latest burger moments'}</p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Instagram Feed Items - Update with your Instagram photos */}
              <a href="https://www.instagram.com/kings_code_burger/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg aspect-square bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div className="w-full h-full bg-gradient-to-br from-primary via-primary/50 to-white flex items-center justify-center text-white text-center p-6">
                  <div>
                    <Instagram className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg">Follow us</p>
                    <p className="text-sm">@kings_code_burger</p>
                  </div>
                </div>
              </a>
              
              {/* Instagram Feed Items - Images and Videos */}
              {/* Photo 1 */}
              <a
                href="https://www.instagram.com/kings_code_burger/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-shadow"
              >
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/KkkfCfITosPVCBCR.jpeg" alt="Instagram Photo 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </a>
              
              {/* Photo 2 */}
              <a
                href="https://www.instagram.com/kings_code_burger/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-shadow"
              >
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/hufNShsLtsrzCKvw.jpeg" alt="Instagram Photo 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </a>
              
              {/* Photo 3 */}
              <a
                href="https://www.instagram.com/kings_code_burger/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-shadow"
              >
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/owUfLkcHOrGcviBx.jpeg" alt="Instagram Photo 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </a>
              
              {/* Video 1 */}
              <a
                href="https://www.instagram.com/kings_code_burger/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-shadow"
              >
                <video src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/mibySkkqWaLSHakX.mp4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </a>
              
              {/* Video 2 */}
              <a
                href="https://www.instagram.com/kings_code_burger/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-shadow"
              >
                <video src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/QdkNFJAnKspntUZk.mp4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </a>
              
              {/* Video 3 */}
              <a
                href="https://www.instagram.com/kings_code_burger/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-shadow"
              >
                <video src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/XPuDcvHvTTCwzrhw.mp4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </a>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://www.instagram.com/kings_code_burger/" target="_blank" rel="noopener noreferrer">
                  View on Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">{t('access.title')}</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">{t('access.subtitle')}</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-8 bg-white border-2 border-border card-shadow">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{t('access.address')}</h3>
                  <p className="text-foreground text-lg">{t('access.address_value')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{t('access.station')}</h3>
                  <p className="text-foreground text-lg">{t('access.station_value')}</p>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <a 
                  href="https://maps.app.goo.gl/tP5wwysiDmxfsXtYA?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    {t('access.map')}
                  </Button>
                </a>
                <a 
                  href={socialLinks.googleNavigation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Google Navigation
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 border-border card-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{t('access.phone')}</h3>
                  <p className="text-foreground text-lg">{t('access.phone_value')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{t('access.hours')}</h3>
                  <p className="text-foreground text-lg">{t('access.hours_weekday')}</p>
                  <p className="text-foreground text-lg">{t('access.hours_weekend')}</p>
                </div>
              </div>

              <a 
                href="https://www.ubereats.com/jp/store/%E3%82%AD%E3%83%B3%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%88-%E3%83%8F%E3%83%B3%E3%83%8F%E3%83%BC%E3%82%AB%E3%83%BC-kings-code-hamburger/tLo6VIseXdufF6wzpPTOFQ?srsltid=AfmBOoo0NBfp8xo0HDSx_PQfkc39X_5Ibcv4AbyGT8R5c9vV2qXxFSI-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  {t('access.ubereats')}
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">{t('footer.title')}</h3>
              <p className="text-muted-foreground">{t('footer.subtitle')}</p>
            </div>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://maps.app.goo.gl/tP5wwysiDmxfsXtYA?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-6 h-6" />
              </a>
              <a href="https://www.ubereats.com/jp/store/%E3%82%AD%E3%83%B3%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%88-%E3%83%8F%E3%83%B3%E3%83%8F%E3%83%BC%E3%82%AB%E3%83%BC-kings-code-hamburger/tLo6VIseXdufF6wzpPTOFQ?srsltid=AfmBOoo0NBfp8xo0HDSx_PQfkc39X_5Ibcv4AbyGT8R5c9vV2qXxFSI-" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}
