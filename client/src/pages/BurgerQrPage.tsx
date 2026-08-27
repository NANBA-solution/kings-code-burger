import { Link } from "wouter";
import type { BurgerItem } from "@/data/burgers";
import { burgerDetailUrl } from "@/data/burgers";
import { QrCode } from "@/components/QrCode";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  burger: BurgerItem;
};

/** 店舗スタッフ向け：QRコードのみの印刷用ページ */
export function BurgerQrPage({ burger }: Props) {
  const { language, t } = useLanguage();
  const url = burgerDetailUrl(burger.slug);

  return (
    <div className="burger-qr-print">
      <div className="burger-qr-print__toolbar no-print">
        <Link href={`/menu/${burger.slug}`} className="burger-page__back">
          ← {language === "ja" ? t(burger.nameJaKey) : t(burger.nameKey)}
        </Link>
        <div className="burger-qr-print__toolbar-actions">
          <LanguageToggle />
          <button type="button" className="burger-qr-print__btn" onClick={() => window.print()}>
            {t("ingredients.print")}
          </button>
        </div>
      </div>

      <div className="burger-qr-print__sheet">
        <p className="burger-qr-print__brand">geezer</p>
        <h1 className="burger-qr-print__title">{t(burger.nameKey)}</h1>
        <p className="burger-qr-print__subtitle">
          {language === "ja" ? t(burger.nameJaKey) : t(burger.nameKey)}
        </p>
        <QrCode url={url} size={280} alt={t("ingredients.qr_alt")} className="burger-qr-print__code" />
        <p className="burger-qr-print__scan">{t("ingredients.scan")}</p>
        <p className="burger-qr-print__url">{url}</p>
      </div>
    </div>
  );
}
