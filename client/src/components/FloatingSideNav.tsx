import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "wouter";
import { Instagram, MapPin, UserPlus, UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { goToHomeSection } from "@/lib/scroll";

const INSTAGRAM = "https://www.instagram.com/geezer.smash.burger?utm_source=qr";
const LINE_ADD = "https://line.me/R/ti/p/@792ngpfp";

export function FloatingSideNav() {
  const { t } = useLanguage();
  const [location, setLocation] = useLocation();
  const [visible, setVisible] = useState(false);

  const isQrPage = location.includes("/qr");
  const isHome = location === "/" || location === "" || location.startsWith("/#");
  const isRecruit = location === "/recruit" || location.startsWith("/recruit");

  useEffect(() => {
    if (isQrPage) {
      setVisible(false);
      return;
    }
    if (!isHome) {
      setVisible(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, isQrPage]);

  if (isQrPage || !visible) return null;

  const goSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToHomeSection(id, setLocation, isHome);
  };

  return (
    <nav className="kcb-float-nav" aria-label={t("float.label")}>
      <a
        href="/#menu"
        className="kcb-float-nav__item"
        onClick={goSection("menu")}
      >
        <UtensilsCrossed size={16} aria-hidden />
        <span>{t("nav.menu")}</span>
      </a>
      <a
        href="/#access"
        className="kcb-float-nav__item"
        onClick={goSection("access")}
      >
        <MapPin size={16} aria-hidden />
        <span>{t("nav.access")}</span>
      </a>
      <Link
        href="/recruit"
        className={`kcb-float-nav__item${isRecruit ? " kcb-float-nav__item--accent" : ""}`}
        aria-current={isRecruit ? "page" : undefined}
      >
        <UserPlus size={16} aria-hidden />
        <span>{t("nav.recruit")}</span>
      </Link>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="kcb-float-nav__item"
      >
        <Instagram size={16} aria-hidden />
        <span>{t("float.instagram")}</span>
      </a>
      <a
        href={LINE_ADD}
        target="_blank"
        rel="noopener noreferrer"
        className="kcb-float-nav__item kcb-float-nav__item--line"
        aria-label={t("float.line")}
      >
        <span className="kcb-float-nav__line-mark" aria-hidden>
          LINE
        </span>
      </a>
    </nav>
  );
}
