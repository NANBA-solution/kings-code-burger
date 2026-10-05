import { useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Mascot } from "@/components/Mascot";

const LINE_ADD_URL = "https://line.me/R/ti/p/@792ngpfp";
const LINE_ADD_IMG = "https://scdn.line-apps.com/n/line_add_friends/btn/ja.png";

export default function RecruitPage() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === "ja"
        ? "スタッフ募集 | geezer"
        : "Join the team | geezer";
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kcb-site min-h-screen bg-white">
      <nav className="kcb-nav scrolled">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="kcb-nav__brand kcb-nav__logo" aria-label="geezer">
            <Mascot size="md" className="kcb-nav__logo-img" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="kcb-nav__link">
              {t("recruit.back")}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </nav>

      <section className="kcb-section kcb-section--cream">
        <div className="container">
          <header className="kcb-section__header">
            <div className="kcb-section__header-mascot">
              <Mascot size="sm" animated />
            </div>
            <span className="kcb-section__label">{t("recruit.label")}</span>
            <h1 className="kcb-section__title">{t("recruit.title")}</h1>
            <p className="kcb-section__subtitle">{t("recruit.lead")}</p>
            <div className="kcb-section__divider" />
          </header>

          <dl className="kcb-recruit">
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

          <div className="kcb-recruit__cta">
            <a
              href={LINE_ADD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kcb-recruit__line"
            >
              <img
                src={LINE_ADD_IMG}
                alt={t("recruit.line_alt")}
                height={36}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
