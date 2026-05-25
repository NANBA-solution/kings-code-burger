/*
Design: Premium Smash Burger — heavy custom CSS (site.css)
*/

import React, { useEffect, useRef, useState } from "react";
import { Star, MapPin, Phone, Clock, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mascot } from "@/components/Mascot";

/** 初期ヘッダー画像（CDNから取得した原本をローカル保存） */
const HERO_BG = "/images/hero-original.webp";

const MARQUEE_ITEMS = [
  "SMASH BURGER",
  "100% AUSSIE BEEF",
  "OSAKA",
  "KING'S CODE",
  "JUICY",
  "CRISPY",
];

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const instagramGridRef = useRef<HTMLDivElement>(null);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    if (language === "ja") {
      document.title = "King's Code Burger | 大阪のスマッシュバーガー専門店";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "大阪のスマッシュバーガー専門店。100%オージービーフを高温で焼き上げた、外はカリッ、中はジュワッなハンバーガー。Uber Eats対応。"
        );
    } else {
      document.title = "King's Code Burger | Osaka's Best Smash Burger";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Osaka's best smash burger restaurant. 100% Australian beef smashed at high heat. Crispy outside, juicy inside. Order on Uber Eats."
        );
    }
  }, [language]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".kcb-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("kcb-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const videos = instagramGridRef.current?.querySelectorAll("video");
    if (!videos?.length) return;

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
    return () => videos.forEach((video) => observer.unobserve(video));
  }, []);

  const menuItems = [
    {
      nameKey: "menu.cheese_burger",
      nameJaKey: "menu.cheese_burger_ja",
      descKey: "menu.cheese_burger_desc",
      price: "¥1,200",
      tag: "定番",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/zlcHmSYDrBfrZYpe.png",
    },
    {
      nameKey: "menu.double_cheese",
      nameJaKey: "menu.double_cheese_ja",
      descKey: "menu.double_cheese_desc",
      price: "¥2,000",
      tag: "人気NO.1",
      hot: true,
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/dpKaxlCQBeVpYUTZ.png",
    },
    {
      nameKey: "menu.hot_chicken",
      nameJaKey: "menu.hot_chicken_ja",
      descKey: "menu.hot_chicken_desc",
      price: "¥1,200",
      tag: "本格派",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/hRrjhAGqvgbrygvr.png",
    },
    {
      nameKey: "menu.hamburger",
      nameJaKey: "menu.hamburger_ja",
      descKey: "menu.hamburger_desc",
      price: "¥1,300",
      tag: "",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/EEDUcZlgKjPSrUdm.png",
    },
    {
      nameKey: "menu.bacon_lettuce",
      nameJaKey: "menu.bacon_lettuce_ja",
      descKey: "menu.bacon_lettuce_desc",
      price: "¥1,400",
      tag: "",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/epKmYfJppyEWlUwe.png",
    },
    {
      nameKey: "menu.double_burger",
      nameJaKey: "menu.double_burger_ja",
      descKey: "menu.double_burger_desc",
      price: "¥2,000",
      tag: "",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/ZzUSZGRmMVxPyenB.png",
    },
    {
      nameKey: "menu.thick_bacon",
      nameJaKey: "menu.thick_bacon_ja",
      descKey: "menu.thick_bacon_desc",
      price: "¥1,800",
      tag: "",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/dPHfmSzlNWjndvOn.png",
    },
  ];

  const socialLinks = {
    instagram: "https://www.instagram.com/kings_code_burger",
    googleReviews:
      "https://www.google.com/maps/place/King's+Code+Burger/@34.6834,135.5085,15z",
    googleNavigation:
      "https://www.google.com/gasearch?q=king's%20code%20burger%20%E3%82%AA%E3%83%BC%E3%83%8A%E3%83%BC%E6%8F%90%E4%BE%9B&source=sh/x/gs/m2/5#lpstate=pid:1120676595491597304",
  };

  const reviews = [
    {
      text: "Best burger I've had in Japan. No joke. Perfectly cooked. Juicy and so full of flavour.",
      author: "American Tourist",
      flag: "🇺🇸",
    },
    {
      text: "Proper hidden gem. The beef is 100% Aussie, and you can tell—it's rich, flavorful, and cooked just right.",
      author: "Australian Tourist",
      flag: "🇦🇺",
    },
    {
      text: "シンプルだからこそ、肉の旨味が際立つ。外はカリカリ、中はジューシー。今まで食べた中で最高のバーガーです。",
      author: "日本人リピーター",
      flag: "🇯🇵",
    },
  ];

  const philosophyItems = [
    { icon: MapPin, titleKey: "philosophy.beef", descKey: "philosophy.beef_desc" },
    {
      icon: null,
      titleKey: "philosophy.smash",
      descKey: "philosophy.smash_desc",
      svg: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
    },
    {
      icon: null,
      titleKey: "philosophy.house",
      descKey: "philosophy.house_desc",
      svg: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <div className="kcb-site min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`kcb-nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="container flex items-center justify-between py-3 md:py-4">
          <a href="#" className="kcb-nav__brand kcb-nav__logo">
            <Mascot size="sm" />
            KING&apos;S CODE
          </a>

          <div className="hidden md:flex gap-6 lg:gap-10 items-center">
            {[
              { href: "#philosophy", label: t("nav.philosophy") },
              { href: "#menu", label: t("nav.menu") },
              { href: "#reviews", label: t("nav.reviews") },
              { href: "#instagram", label: "INSTAGRAM" },
              { href: "#access", label: t("nav.access") },
            ].map((link) => (
              <a key={link.href} href={link.href} className="kcb-nav__link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3 md:gap-4 items-center">
            <div className="flex gap-2 md:gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="kcb-social-icon"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href={socialLinks.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="kcb-social-icon"
              >
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>

            <div className="kcb-lang-toggle">
              <button
                type="button"
                onClick={() => setLanguage("ja")}
                className={`kcb-lang-btn ${language === "ja" ? "active" : ""}`}
              >
                日本語
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`kcb-lang-btn ${language === "en" ? "active" : ""}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — 初期と同じ backgroundImage + brightness(0.5) */}
      <section className="kcb-hero">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
          role="img"
          aria-label="King's Code Burger"
        />

        <div className="container kcb-hero__content">
          <h1 className="kcb-hero__title">
            {t("hero.title1")}
            <br />
            <span className="text-primary accent-line inline-block">{t("hero.title2")}</span>
            <br />
            {t("hero.title3")}
          </h1>

          <p className="kcb-hero__subtitle">{t("hero.subtitle")}</p>

          <div className="kcb-hero__rating">
            <div className="kcb-hero__stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5" />
              ))}
            </div>
            <span className="kcb-hero__rating-text">4.7 / 5.0</span>
          </div>

          <button type="button" className="kcb-hero__cta kcb-cta-mascot-row" onClick={scrollToMenu}>
            <Mascot size="xs" className="!w-7 !h-7 sm:!w-8 sm:!h-8" />
            {t("hero.button")}
            <Mascot size="xs" className="!w-7 !h-7 sm:!w-8 sm:!h-8 scale-x-[-1]" />
          </button>
        </div>

        <div className="kcb-hero__scroll-hint">
          <span>SCROLL</span>
          <div className="kcb-hero__scroll-line" />
        </div>
      </section>

      {/* Marquee */}
      <div className="kcb-marquee" aria-hidden="true">
        <div className="kcb-marquee__track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <React.Fragment key={i}>
              <span className="kcb-marquee__item">{item} •</span>
              {i % 2 === 0 && (
                <img
                  src="/images/invader-mascot.png"
                  alt=""
                  aria-hidden
                  className="kcb-mascot kcb-mascot--xs kcb-marquee__mascot"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <section id="philosophy" className="kcb-section kcb-section--white">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="md" animated />
            </div>
            <span className="kcb-section__label">OUR STORY</span>
            <h2 className="kcb-section__title">{t("philosophy.title")}</h2>
            <p className="kcb-section__subtitle">{t("philosophy.subtitle")}</p>
            <div className="kcb-section__divider" />
          </header>

          <div className="kcb-philosophy-grid">
            {philosophyItems.map((item, index) => (
              <article
                key={item.titleKey}
                className={`kcb-philosophy-card kcb-reveal kcb-reveal-delay-${index + 1}`}
              >
                {index === 1 && <Mascot size="sm" className="kcb-philosophy-card__mascot" />}
                <div className="kcb-philosophy-card__icon">
                  {item.icon ? (
                    <item.icon />
                  ) : (
                    item.svg
                  )}
                </div>
                <h3 className="kcb-philosophy-card__title">{t(item.titleKey)}</h3>
                <p className="kcb-philosophy-card__text">{t(item.descKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="kcb-section kcb-section--muted">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="sm" />
            </div>
            <span className="kcb-section__label">ORDER NOW</span>
            <h2 className="kcb-section__title">
              {t("menu.title")}
            </h2>
            <p className="kcb-section__subtitle">{t("menu.subtitle")}</p>
            <div className="kcb-section__divider" />
          </header>

          <div className="kcb-menu-grid">
            {menuItems.map((item, index) => (
              <article
                key={index}
                className={`kcb-menu-card kcb-reveal kcb-reveal-delay-${(index % 3) + 1}`}
              >
                <div className="kcb-menu-card__image-wrap">
                  <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="kcb-menu-card__image"
                    loading="lazy"
                  />
                  {item.tag && (
                    <span
                      className={`kcb-menu-card__tag ${item.hot ? "kcb-menu-card__tag--hot" : ""}`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="kcb-menu-card__body">
                  <div className="kcb-menu-card__header">
                    <div>
                      <h3 className="kcb-menu-card__name">{t(item.nameKey)}</h3>
                      <p className="kcb-menu-card__name-ja">{t(item.nameJaKey)}</p>
                    </div>
                    <span className="kcb-menu-card__price">{item.price}</span>
                  </div>
                  <p className="kcb-menu-card__desc">{t(item.descKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="kcb-section kcb-section--cream relative">
        <Mascot size="xl" className="kcb-reviews-mascot" />
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="sm" animated />
            </div>
            <span className="kcb-section__label">VOICES</span>
            <h2 className="kcb-section__title">
              {t("reviews.title")}
            </h2>
            <p className="kcb-section__subtitle">{t("reviews.subtitle")}</p>
            <div className="kcb-section__divider" />
          </header>

          <div className="kcb-reviews-grid">
            {reviews.map((review, index) => (
              <article
                key={index}
                className={`kcb-review-card kcb-reveal kcb-reveal-delay-${index + 1}`}
              >
                <span className="kcb-review-card__quote">&ldquo;</span>
                <p className="kcb-review-card__text">{review.text}</p>
                <div className="kcb-review-card__author">
                  <span className="kcb-review-card__flag">{review.flag}</span>
                  <div>
                    <div className="kcb-review-card__stars flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-sm opacity-60">{review.author}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="kcb-section kcb-section--cream">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="md" />
            </div>
            <span className="kcb-section__label">@kings_code_burger</span>
            <h2 className="kcb-section__title">
              INSTAGRAM
            </h2>
            <p className="kcb-section__subtitle">
              {t("instagram.subtitle") || "Follow us for the latest burger moments"}
            </p>
            <div className="kcb-section__divider" />
          </header>

          <div className="max-w-7xl mx-auto">
            <div ref={instagramGridRef} className="kcb-instagram-grid">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="kcb-instagram-item kcb-instagram-follow hidden md:flex"
              >
                <div>
                  <Instagram className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-bold text-lg">Follow us</p>
                  <p className="text-sm opacity-80">@kings_code_burger</p>
                </div>
              </a>

              {[
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/KkkfCfITosPVCBCR.jpeg",
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/hufNShsLtsrzCKvw.jpeg",
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/owUfLkcHOrGcviBx.jpeg",
              ].map((src, i) => (
                <a
                  key={`photo-${i}`}
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`kcb-instagram-item ${i === 2 ? "hidden md:block" : ""}`}
                >
                  <img src={src} alt={`Instagram ${i + 1}`} loading="lazy" />
                  <div className="kcb-instagram-item__overlay">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </a>
              ))}

              {[
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/mibySkkqWaLSHakX.mp4",
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/eZTdqqdpGNBOafkV.mp4",
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663357978056/vLbasjUXULlmilLL.mp4",
              ].map((src, i) => (
                <a
                  key={`video-${i}`}
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`kcb-instagram-item ${i === 2 ? "hidden md:block" : ""}`}
                >
                  <video src={src} loop muted playsInline />
                  <div className="kcb-instagram-item__overlay">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-10 kcb-reveal">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="kcb-instagram-cta"
              >
                <Instagram className="w-5 h-5" />
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="kcb-section kcb-section--muted">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="sm" animated />
            </div>
            <span className="kcb-section__label">VISIT US</span>
            <h2 className="kcb-section__title">
              {t("access.title")}
            </h2>
            <p className="kcb-section__subtitle">{t("access.subtitle")}</p>
            <div className="kcb-section__divider" />
          </header>

          <p className="kcb-access-notice kcb-reveal" role="status">
            {t("access.closed_notice")}
          </p>

          <div className="kcb-access-grid">
            <div className="kcb-access-card kcb-reveal">
              <div className="kcb-access-card__row">
                <div className="kcb-access-card__icon">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="kcb-access-card__title">{t("access.address")}</h3>
                  <p className="kcb-access-card__value">{t("access.address_value")}</p>
                </div>
              </div>

              <div className="kcb-access-card__row">
                <div className="kcb-access-card__icon">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="kcb-access-card__title">{t("access.station")}</h3>
                  <p className="kcb-access-card__value">{t("access.station_value")}</p>
                </div>
              </div>

              <div className="space-y-3 mt-2">
                <a
                  href="https://maps.app.goo.gl/tP5wwysiDmxfsXtYA?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kcb-btn-primary"
                >
                  <MapPin className="w-4 h-4" />
                  {t("access.map")}
                </a>
                <a
                  href={socialLinks.googleNavigation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kcb-btn-outline"
                >
                  <Globe className="w-4 h-4" />
                  Google Navigation
                </a>
              </div>
            </div>

            <div className="kcb-access-card kcb-reveal kcb-reveal-delay-2">
              <div className="kcb-access-card__row">
                <div className="kcb-access-card__icon">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="kcb-access-card__title">{t("access.phone")}</h3>
                  <p className="kcb-access-card__value">{t("access.phone_value")}</p>
                </div>
              </div>

              <div className="kcb-access-card__row">
                <div className="kcb-access-card__icon">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="kcb-access-card__title">{t("access.hours")}</h3>
                  <p className="kcb-access-card__value">{t("access.hours_weekday")}</p>
                  <p className="kcb-access-card__value">{t("access.hours_weekend")}</p>
                </div>
              </div>

              <a
                href="https://www.ubereats.com/jp/store/%E3%82%AD%E3%83%B3%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%88-%E3%83%8F%E3%83%B3%E3%83%8F%E3%83%BC%E3%82%AB%E3%83%BC-kings-code-hamburger/tLo6VIseXdufF6wzpPTOFQ?srsltid=AfmBOoo0NBfp8xo0HDSx_PQfkc39X_5Ibcv4AbyGT8R5c9vV2qXxFSI-"
                target="_blank"
                rel="noopener noreferrer"
                className="kcb-btn-primary mt-4"
              >
                {t("access.ubereats")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kcb-footer">
        <div className="kcb-footer__glow" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="kcb-footer__brand">
              <Mascot size="lg" animated />
              <div>
                <h3 className="kcb-footer__title">{t("footer.title")}</h3>
                <p className="opacity-60">{t("footer.subtitle")}</p>
              </div>
            </div>
            <div className="kcb-footer__social flex gap-6">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://maps.app.goo.gl/tP5wwysiDmxfsXtYA?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-6 h-6" />
              </a>
              <a
                href="https://www.ubereats.com/jp/store/%E3%82%AD%E3%83%B3%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%88-%E3%83%8F%E3%83%B3%E3%83%8F%E3%83%BC%E3%82%AB%E3%83%BC-kings-code-hamburger/tLo6VIseXdufF6wzpPTOFQ?srsltid=AfmBOoo0NBfp8xo0HDSx_PQfkc39X_5Ibcv4AbyGT8R5c9vV2qXxFSI-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="kcb-footer__copy">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
