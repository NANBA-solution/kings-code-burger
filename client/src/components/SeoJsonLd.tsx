import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqJsonLd, restaurantJsonLd, type SiteFaqLang } from "@/lib/site";

const RESTAURANT_ID = "geezer-restaurant-jsonld";
const FAQ_ID = "geezer-faq-jsonld";

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Inject / refresh Restaurant + FAQPage JSON-LD for SEO, MEO, and AIO */
export function SeoJsonLd() {
  const { language } = useLanguage();

  useEffect(() => {
    upsertJsonLd(RESTAURANT_ID, restaurantJsonLd());
    upsertJsonLd(FAQ_ID, faqJsonLd(language as SiteFaqLang));
  }, [language]);

  return null;
}
