/*
Design: Premium Smash Burger — heavy custom CSS (site.css)
*/

import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Star, MapPin, Phone, Clock, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mascot } from "@/components/Mascot";
import { publicAsset } from "@/lib/assets";
import { BURGERS } from "@/data/burgers";
import { SIDE_ITEMS, SOFT_DRINK_ITEMS, ALCOHOL_ITEMS, SAUCE_ITEMS } from "@/data/menuExtras";
import { LanguageToggle } from "@/components/LanguageToggle";

/** 初期ヘッダー画像（CDNから取得した原本をローカル保存） */
const HERO_BG = publicAsset("images/hero-original.webp");

const MARQUEE_ITEMS = [
  "SMASH BURGER",
  "100% AUSSIE BEEF",
  "OSAKA",
  "geezer",
  "SHINSAIBASHI",
  "NO COMPROMISE",
  "JUICY",
  "CRISPY",
];

export default function Home() {
  const { language, t } = useLanguage();
  const instagramGridRef = useRef<HTMLDivElement>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (language === "ja") {
      document.title = "geezer | 大阪のスマッシュバーガー専門店";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "geezerは心斎橋・三ッ寺会館1Fへ移転準備中。南森町から移転のため一時休業。オープン情報はInstagramへ。"
        );
    } else {
      document.title = "geezer | Osaka's Best Smash Burger";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "geezer is relocating to Mitsutera Kaikan 1F, Shinsaibashi. Temporarily closed. Follow Instagram for the opening date."
        );
    }
  }, [language]);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 40);
      document.documentElement.style.setProperty(
        "--hero-shift",
        `${Math.min(window.scrollY, 700) * 0.28}px`
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
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

  const scrollToAccess = () => {
    document.getElementById("access")?.scrollIntoView({ behavior: "smooth" });
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

  const menuItems = BURGERS;

  const socialLinks = {
    instagram: "https://www.instagram.com/geezer.smash.burger?utm_source=qr",
    googleReviews:
      "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E8%A5%BF%E5%BF%83%E6%96%8E%E6%A9%8B2-9-5%20%E4%B8%89%E3%83%83%E5%AF%BA%E4%BC%9A%E9%A4%A81F",
    googleNavigation:
      "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E8%A5%BF%E5%BF%83%E6%96%8E%E6%A9%8B2-9-5%20%E4%B8%89%E3%83%83%E5%AF%BA%E4%BC%9A%E9%A4%A81F",
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
      icon: null as null,
      titleKey: "philosophy.smash",
      descKey: "philosophy.smash_desc",
      svg: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
    },
    {
      icon: null as null,
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
      <div
        className="kcb-cursor"
        aria-hidden="true"
        style={{ left: cursor.x, top: cursor.y }}
      />
      {/* Navigation */}
      <nav className={`kcb-nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="container flex items-center justify-between py-3 md:py-4">
          <a href="#" className="kcb-nav__brand kcb-nav__logo" aria-label="geezer">
            <Mascot size="md" className="kcb-nav__logo-img" />
          </a>

          <div className="hidden md:flex gap-6 lg:gap-10 items-center">
            {[
              { href: "#philosophy", label: t("nav.philosophy") },
              { href: "#menu", label: t("nav.menu") },
              { href: "#reviews", label: t("nav.reviews") },
              { href: "#instagram", label: t("nav.instagram") },
              { href: "#access", label: t("nav.access") },
              { href: "#recruit", label: t("nav.recruit") },
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

            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Hero — 初期と同じ backgroundImage + brightness(0.5) */}
      <section className="kcb-hero">
        <div
          className="kcb-hero__bg absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="geezer"
        />

        <div className="container kcb-hero__content">
          <p className="kcb-hero__kicker">{t("hero.kicker")}</p>
          <h1 className="kcb-hero__title">
            <span className="kcb-hero__line kcb-hero__line--1">{t("hero.title1")}</span>
            <span className="kcb-hero__line kcb-hero__line--2 text-primary accent-line inline-block">
              {t("hero.title2")}
            </span>
            <span className="kcb-hero__line kcb-hero__line--3">{t("hero.title3")}</span>
          </h1>

          <p className="kcb-hero__subtitle">{t("hero.subtitle")}</p>
          <p className="kcb-hero__tagline">{t("hero.tagline")}</p>

          <button type="button" className="kcb-hero__cta" onClick={scrollToAccess}>
            {t("hero.button")}
          </button>

          <div className="kcb-hero__scroll-hint" aria-hidden="true">
            <span>{t("hero.scroll")}</span>
            <div className="kcb-hero__scroll-line" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="kcb-marquee" aria-hidden="true">
        {[false, true].map((reverse) => (
          <div
            key={reverse ? "rev" : "fwd"}
            className={`kcb-marquee__track${reverse ? " kcb-marquee__track--reverse" : ""}`}
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <React.Fragment key={`${reverse ? "r" : "f"}-${i}`}>
                <span className="kcb-marquee__item">
                  <span className="kcb-marquee__text">{item}</span>
                  <span className="kcb-marquee__dot" />
                </span>
                {i % 2 === 0 && (
                  <img
                    src={publicAsset("images/geezer-logo.png")}
                    alt=""
                    aria-hidden
                    className="kcb-mascot kcb-mascot--xs kcb-marquee__mascot"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <section id="philosophy" className="kcb-section kcb-section--white">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="md" animated />
            </div>
            <span className="kcb-section__label">{t("section.philosophy_label")}</span>
            <h2 className="kcb-section__title">{t("philosophy.title")}</h2>
            <p className="kcb-manifesto__headline">{t("philosophy.headline")}</p>
            <p className="kcb-manifesto__pillars">{t("philosophy.pillars")}</p>
            <p className="kcb-manifesto__body">{t("philosophy.body")}</p>
            <p className="kcb-manifesto__closer">{t("philosophy.closer")}</p>
            <p className="kcb-manifesto__tagline">{t("hero.tagline")}</p>
            <div className="kcb-section__divider" />
          </header>

          <div className="kcb-philosophy-grid">
            {philosophyItems.map((item, index) => (
              <article
                key={item.titleKey}
                className={`kcb-philosophy-card kcb-reveal kcb-reveal-delay-${index + 1}`}
              >
                <div className="kcb-philosophy-card__icon">
                  {item.icon ? <item.icon /> : item.svg}
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
            <span className="kcb-section__label">{t("section.menu_label")}</span>
            <h2 className="kcb-section__title">{t("menu.title")}</h2>
            <p className="kcb-section__subtitle">{t("menu.subtitle")}</p>
            <div className="kcb-section__divider" />
          </header>

          <div className="kcb-menu-grid">
            {menuItems.map((item, index) => (
              <article
                key={item.slug}
                className={`kcb-menu-card kcb-reveal kcb-reveal-delay-${(index % 3) + 1}`}
              >
                <div className="kcb-menu-card__image-wrap">
                  <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="kcb-menu-card__image"
                    loading="lazy"
                  />
                  {item.tagKey && (
                    <span
                      className={`kcb-menu-card__tag ${
                        item.hot
                          ? "kcb-menu-card__tag--hot"
                          : item.tagKey === "menu.tag_popular"
                            ? "kcb-menu-card__tag--hot"
                            : ""
                      }`}
                    >
                      {t(item.tagKey)}
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
                  <Link href={`/menu/${item.slug}`} className="kcb-menu-card__ingredients-link">
                    {t("ingredients.view")}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Side Menu */}
          <div id="sides" className="kcb-menu-extra kcb-reveal">
            <header className="kcb-menu-extra__header">
              <h3 className="kcb-menu-extra__title">{t("sides.title")}</h3>
            </header>
            <div className="kcb-side-list">
              {SIDE_ITEMS.map((item) => (
                <article key={item.id} className="kcb-side-item">
                  <img
                    src={item.image}
                    alt={language === "ja" ? item.nameJa : item.nameEn}
                    className="kcb-side-item__image"
                    loading="lazy"
                  />
                  <div className="kcb-side-item__text">
                    <h4 className="kcb-side-item__name">
                      {language === "ja" ? item.nameJa : item.nameEn}
                    </h4>
                    {language === "ja" && (
                      <p className="kcb-side-item__name-ja">{item.nameEn}</p>
                    )}
                  </div>
                  <span className="kcb-side-item__price">{item.price}</span>
                </article>
              ))}
            </div>
          </div>

          {/* Dipping Sauce */}
          <div id="sauces" className="kcb-menu-extra kcb-reveal">
            <header className="kcb-menu-extra__header">
              <h3 className="kcb-menu-extra__title">{t("sauces.title")}</h3>
            </header>
            <div className="kcb-sauce-list">
              {SAUCE_ITEMS.map((item) => (
                <article key={item.id} className="kcb-sauce-item">
                  <img
                    src={item.image}
                    alt={language === "ja" ? item.nameJa : item.nameEn}
                    className="kcb-sauce-item__image"
                    loading="lazy"
                  />
                  <div className="kcb-sauce-item__text">
                    <h4 className="kcb-sauce-item__name">
                      {language === "ja" ? item.nameJa : item.nameEn}
                    </h4>
                    {language === "ja" && (
                      <p className="kcb-sauce-item__name-ja">{item.nameEn}</p>
                    )}
                  </div>
                  <span className="kcb-sauce-item__price">{item.price}</span>
                </article>
              ))}
            </div>
          </div>

          {/* Soft Drink */}
          <div id="drinks" className="kcb-menu-extra kcb-reveal">
            <header className="kcb-menu-extra__header">
              <h3 className="kcb-menu-extra__title">{t("drinks.soft_title")}</h3>
            </header>
            <div className="kcb-drink-grid">
              {SOFT_DRINK_ITEMS.map((item) => (
                <div key={item.id} className="kcb-drink-item">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={language === "ja" ? item.nameJa : item.nameEn}
                      className="kcb-drink-item__logo"
                      loading="lazy"
                    />
                  )}
                  <span className="kcb-drink-item__name">
                    {language === "ja" ? item.nameJa : item.nameEn}
                  </span>
                  {language === "ja" && (
                    <span className="kcb-drink-item__name-ja">{item.nameEn}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="kcb-drink-note">{t("drinks.note")}</p>
            <p className="kcb-drink-brand-note">{t("drinks.brand_note")}</p>
          </div>

          {/* Alcohol */}
          <div id="alcohol" className="kcb-menu-extra kcb-reveal">
            <header className="kcb-menu-extra__header">
              <h3 className="kcb-menu-extra__title">{t("drinks.alcohol_title")}</h3>
            </header>
            <div className="kcb-drink-grid kcb-drink-grid--alcohol">
              {ALCOHOL_ITEMS.map((item) => (
                <div key={item.id} className="kcb-drink-item kcb-drink-item--alcohol">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={language === "ja" ? item.nameJa : item.nameEn}
                      className="kcb-drink-item__logo"
                      loading="lazy"
                    />
                  )}
                  <span className="kcb-drink-item__name">
                    {language === "ja" ? item.nameJa : item.nameEn}
                  </span>
                  {language === "ja" && (
                    <span className="kcb-drink-item__name-ja">{item.nameEn}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="kcb-drink-brand-note">{t("drinks.alcohol_takeout_note")}</p>
          </div>
        </div>
      </section>
      <section id="reviews" className="kcb-section kcb-section--cream relative">
        <Mascot size="xl" className="kcb-reviews-mascot" />
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="sm" animated />
            </div>
            <span className="kcb-section__label">{t("section.reviews_label")}</span>
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
            <span className="kcb-section__label">@geezer.smash.burger</span>
            <h2 className="kcb-section__title">
              {t("nav.instagram")}
            </h2>
            <p className="kcb-section__subtitle">
              {t("instagram.subtitle")}
            </p>
            <div className="kcb-section__divider" />
          </header>

          <div className="max-w-7xl mx-auto">
            <div ref={instagramGridRef} className="kcb-instagram-grid">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="kcb-instagram-item kcb-instagram-follow hidden md:flex kcb-reveal"
              >
                <div>
                  <Instagram className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-bold text-lg">{t("instagram.follow")}</p>
                  <p className="text-sm opacity-80">@geezer.smash.burger</p>
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
                  className={`kcb-instagram-item kcb-reveal kcb-reveal-delay-${(i % 3) + 1} ${i === 2 ? "hidden md:block" : ""}`}
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
                  className={`kcb-instagram-item kcb-reveal kcb-reveal-delay-${(i % 3) + 1} ${i === 2 ? "hidden md:block" : ""}`}
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
                {t("instagram.view")}
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
            <span className="kcb-section__label">{t("section.access_label")}</span>
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
                  href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E8%A5%BF%E5%BF%83%E6%96%8E%E6%A9%8B2-9-5%20%E4%B8%89%E3%83%83%E5%AF%BA%E4%BC%9A%E9%A4%A81F"
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
                  {t("access.navigation")}
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
                href={socialLinks.instagram}
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

      {/* Recruit */}
      <section id="recruit" className="kcb-section kcb-section--cream">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <div className="kcb-section__header-mascot">
              <Mascot size="sm" animated />
            </div>
            <span className="kcb-section__label">{t("recruit.label")}</span>
            <h2 className="kcb-section__title">{t("recruit.title")}</h2>
            <p className="kcb-section__subtitle">{t("recruit.lead")}</p>
            <div className="kcb-section__divider" />
          </header>

          <dl className="kcb-recruit kcb-reveal">
            <div className="kcb-recruit__row">
              <dt>{t("recruit.role_label")}</dt>
              <dd>{t("recruit.role")}</dd>
            </div>
            <div className="kcb-recruit__row">
              <dt>{t("recruit.pay_label")}</dt>
              <dd>{t("recruit.pay")}</dd>
            </div>
            <div className="kcb-recruit__row">
              <dt>{t("recruit.hours_label")}</dt>
              <dd>{t("recruit.hours")}</dd>
            </div>
            <div className="kcb-recruit__row">
              <dt>{t("recruit.req_label")}</dt>
              <dd>
                <ul className="kcb-recruit__list">
                  <li>{t("recruit.req1")}</li>
                  <li>{t("recruit.req2")}</li>
                  <li>{t("recruit.req3")}</li>
                </ul>
              </dd>
            </div>
            <div className="kcb-recruit__row">
              <dt>{t("recruit.benefits_label")}</dt>
              <dd>{t("recruit.benefits")}</dd>
            </div>
            <div className="kcb-recruit__row">
              <dt>{t("recruit.location_label")}</dt>
              <dd>{t("recruit.location")}</dd>
            </div>
            <div className="kcb-recruit__row">
              <dt>{t("recruit.apply_label")}</dt>
              <dd>{t("recruit.apply")}</dd>
            </div>
          </dl>

          <div className="kcb-recruit__cta kcb-reveal">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="kcb-instagram-cta"
            >
              <Instagram className="w-5 h-5" />
              {t("recruit.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="kcb-section">
        <div className="container">
          <header className="kcb-section__header kcb-reveal">
            <span className="kcb-section__label">{t("payment.title")}</span>
            <h2 className="kcb-section__title">{t("payment.subtitle")}</h2>
            <div className="kcb-section__divider" />
          </header>
          <div className="kcb-payment kcb-reveal">
            <p className="kcb-payment-cash">{t("payment.cash")}</p>
            <div className="kcb-payment-brands">
              <img
                src={publicAsset("images/payment-methods.jpg")}
                alt={t("payment.brands_alt")}
                className="kcb-payment-brands__image"
                loading="lazy"
              />
            </div>
            <p className="kcb-payment-note">{t("payment.note")}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kcb-footer kcb-reveal">
        <div className="kcb-footer__glow" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="kcb-footer__brand">
              <Mascot size="xl" animated className="kcb-footer__logo" />
              <p className="opacity-60">{t("footer.subtitle")}</p>
            </div>
            <div className="kcb-footer__social flex gap-6">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E8%A5%BF%E5%BF%83%E6%96%8E%E6%A9%8B2-9-5%20%E4%B8%89%E3%83%83%E5%AF%BA%E4%BC%9A%E9%A4%A81F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-6 h-6" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
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
