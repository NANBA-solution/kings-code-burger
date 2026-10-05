import { Link, useLocation, useRoute } from "wouter";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { publicAsset } from "@/lib/assets";
import { getBurgerBySlug, burgerDetailUrl, formatIngredientLabel } from "@/data/burgers";
import { QrCode } from "@/components/QrCode";
import { LanguageToggle } from "@/components/LanguageToggle";
import { BurgerQrPage } from "@/pages/BurgerQrPage";
import { goToHomeSection } from "@/lib/scroll";
import "@/styles/site.css";

function NotFound() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  return (
    <div className="burger-page">
      <header className="burger-page__header">
        <Link href="/">
          <img src={publicAsset("images/geezer-logo.png")} alt="geezer" className="burger-page__logo" />
        </Link>
        <LanguageToggle className="burger-page__lang" />
      </header>
      <main className="burger-page__main">
        <p className="burger-page__not-found">{t("ingredients.not_found")}</p>
        <a
          href="/#menu"
          className="burger-page__back"
          onClick={(e) => {
            e.preventDefault();
            goToHomeSection("menu", setLocation, false);
          }}
        >
          {t("ingredients.back_menu")}
        </a>
      </main>
    </div>
  );
}

export default function BurgerDetailPage() {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/menu/:slug");
  const [, qrParams] = useRoute("/menu/:slug/qr");
  const slug = params?.slug ?? qrParams?.slug;
  const isQrOnly = Boolean(qrParams?.slug);

  const burger = slug ? getBurgerBySlug(slug) : undefined;

  useEffect(() => {
    if (!burger || isQrOnly) return;
    document.title = `${t(burger.nameKey)} | geezer`;
  }, [burger, isQrOnly, language, t]);

  if (!burger) return <NotFound />;
  if (isQrOnly) return <BurgerQrPage burger={burger} />;

  const detailUrl = burgerDetailUrl(burger.slug);

  return (
    <div className="burger-page">
      <header className="burger-page__header">
        <Link href="/">
          <img src={publicAsset("images/geezer-logo.png")} alt="geezer" className="burger-page__logo" />
        </Link>
        <div className="burger-page__header-actions">
          <LanguageToggle className="burger-page__lang" />
          <Link href={`/menu/${burger.slug}/qr`} className="burger-page__qr-link">
            {t("ingredients.print_qr")}
          </Link>
          <a
            href="/#menu"
            className="burger-page__back"
            onClick={(e) => {
              e.preventDefault();
              goToHomeSection("menu", setLocation, false);
            }}
          >
            {t("ingredients.back_menu")}
          </a>
        </div>
      </header>

      <main className="burger-page__main">
        <article className="burger-detail">
          <div className="burger-detail__hero">
            <img src={burger.image} alt={t(burger.nameKey)} className="burger-detail__image" />
            <div className="burger-detail__intro">
              {burger.tagKey && (
                <span className="burger-detail__tag">{t(burger.tagKey)}</span>
              )}
              <h1 className="burger-detail__title">{t(burger.nameKey)}</h1>
              <p className="burger-detail__title-ja">{t(burger.nameJaKey)}</p>
              <p className="burger-detail__price">{burger.price}</p>
              <p className="burger-detail__desc">{t(burger.descKey)}</p>
            </div>
          </div>

          <section className="burger-detail__section" aria-labelledby="ingredients-heading">
            <h2 id="ingredients-heading" className="burger-detail__section-title">
              {t("ingredients.title")}
            </h2>
            <p className="burger-detail__section-note">{t("ingredients.note")}</p>
            <ul className="ingredients-list">
              {burger.ingredients.map((item) => (
                <li key={item.nameJa} className="ingredients-list__item">
                  {formatIngredientLabel(item, language)}
                </li>
              ))}
            </ul>
          </section>

          <section className="burger-detail__section" aria-labelledby="allergens-heading">
            <h2 id="allergens-heading" className="burger-detail__section-title">
              {t("ingredients.allergens")}
            </h2>
            <p className="burger-detail__allergens">
              {language === "ja" ? burger.allergensJa : burger.allergensEn}
            </p>
            <p className="burger-detail__disclaimer">{t("ingredients.disclaimer")}</p>
          </section>

          <section className="burger-detail__qr" aria-labelledby="qr-heading">
            <h2 id="qr-heading" className="burger-detail__section-title">
              {t("ingredients.qr_title")}
            </h2>
            <p className="burger-detail__qr-desc">{t("ingredients.qr_desc")}</p>
            <div className="burger-detail__qr-box">
              <QrCode url={detailUrl} size={200} alt={t("ingredients.qr_alt")} />
              <p className="burger-detail__qr-url">{detailUrl}</p>
            </div>
          </section>
        </article>
      </main>

      <footer className="burger-page__footer">
        <p>© geezer — Good food. Fair price. No compromise</p>
      </footer>
    </div>
  );
}
