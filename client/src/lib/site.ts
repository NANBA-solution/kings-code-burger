/** Canonical NAP & SEO constants — keep in sync with Access / GBP */
export const SITE_URL = "https://geezer-smash-burger.vercel.app";
export const SITE_NAME = "Geezer Smash Burger";
export const SITE_NAME_ALT = "geezer";
export const SITE_PHONE = "080-1520-0694";
export const SITE_PHONE_E164 = "+818015200694";
export const SITE_EMAIL = "";
export const SITE_INSTAGRAM = "https://www.instagram.com/geezer.smash.burger";
export const SITE_ADDRESS = {
  postalCode: "542-0086",
  region: "大阪府",
  locality: "大阪市中央区",
  street: "西心斎橋2-9-5 三ッ寺会館1F",
  fullJa: "〒542-0086 大阪府大阪市中央区西心斎橋2-9-5 三ッ寺会館1F",
  fullEn: "Mitsutera Kaikan 1F, 2-9-5 Nishishinsaibashi, Chuo-ku, Osaka 542-0086",
  mapQuery:
    "大阪府大阪市中央区西心斎橋2-9-5 三ッ寺会館1F",
  /** Prefer store name so Maps opens the GBP listing, not just the building */
  mapsQuery: "Geezer Smash Burger 大阪府大阪市中央区西心斎橋2-9-5",
};
export const SITE_GEO = {
  /** Approximate pin for Mitsutera Kaikan / Nishi-Shinsaibashi 2-9-5 */
  latitude: 34.6698,
  longitude: 135.5002,
};

export const SITE_MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS.mapsQuery)}`;
export const SITE_MAPS_DIR_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_ADDRESS.mapsQuery)}`;

export const SITE_TITLE =
  "Geezer Smash Burger | 大阪・心斎橋のスマッシュバーガー専門店（深夜3時まで営業） / Shinsaibashi Osaka";

export const SITE_DESCRIPTION =
  "大阪・心斎橋（三ッ寺会館1F）のスマッシュバーガー専門店。すべてに、納得感を。100%オージービーフのバーガー＆ホットチキンをセット価格でご提供。深夜3時まで営業・テイクアウト可。Smash burger & late night food in Shinsaibashi, Osaka.";

export const QR_META_DESCRIPTION =
  "大阪・心斎橋（三ッ寺会館1F）のスマッシュバーガー専門店「geezer」。100%オージービーフ使用。深夜3時まで営業・テイクアウト・デリバリー対応。";

/** Visible FAQ + FAQPage JSON-LD — short, answer-first facts for AIO / local search */
export const SITE_FAQS = {
  ja: [
    {
      question: "Geezer Smash Burgerはどこにありますか？",
      answer:
        "大阪府大阪市中央区西心斎橋2-9-5 三ッ寺会館1F（心斎橋・アメリカ村）です。心斎橋駅から徒歩圏内です。",
    },
    {
      question: "営業時間は何時までですか？",
      answer:
        "月〜金は17:00〜翌3:00。土日祝は12:00〜15:00と17:00〜翌3:00です。深夜3時まで営業しています。",
    },
    {
      question: "メニューはセットですか？何が付きますか？",
      answer:
        "セットのみのご提供です。フライ（ポテト）とドリンク付きのセット価格で、100%オージービーフのスマッシュバーガーやナッシュビルホットチキンをお出しします。",
    },
    {
      question: "オーダーのやり方は？",
      answer:
        "カウンターで先にご注文・お会計いただき、番号札をお渡しします。その後、席へご案内します。満席の場合は番号順にご案内します。テイクアウトも同様の流れです。",
    },
    {
      question: "テイクアウトやデリバリーはできますか？",
      answer:
        "店頭の小窓からテイクアウトできます。電話注文も可能です（080-1520-0694）。デリバリーは Uber Eats と Rocket Now に対応しています。アルコール類はテイクアウト・デリバリー対象外です。",
    },
    {
      question: "どんなお店ですか？",
      answer:
        "大阪・心斎橋のスマッシュバーガー専門店です。100%オージービーフを熱々の鉄板で押しつぶして焼くカリッとジューシーなバーガーと、本場スタイルのナッシュビルホットチキンを提供しています。",
    },
  ],
  en: [
    {
      question: "Where is Geezer Smash Burger?",
      answer:
        "Mitsutera Kaikan 1F, 2-9-5 Nishishinsaibashi, Chuo-ku, Osaka (Shinsaibashi / America-mura). Within walking distance of Shinsaibashi Station.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "Mon–Fri: 5:00 PM – 3:00 AM. Sat, Sun & holidays: 12:00 PM – 3:00 PM and 5:00 PM – 3:00 AM. Open late until 3:00 AM.",
    },
    {
      question: "Is the menu sold as a set? What’s included?",
      answer:
        "Yes — set only. Each set includes fries and a drink, with 100% Aussie beef smash burgers or Nashville hot chicken.",
    },
    {
      question: "How do I order?",
      answer:
        "Order and pay at the counter first, then receive a number ticket. We’ll seat you next. If we’re full, seating is in ticket-number order. Takeout follows the same flow.",
    },
    {
      question: "Do you offer takeout and delivery?",
      answer:
        "Yes. Walk-up takeout from our street window, or order by phone (080-1520-0694). Delivery via Uber Eats and Rocket Now. Alcohol is not available for takeout or delivery.",
    },
    {
      question: "What kind of restaurant is Geezer?",
      answer:
        "A smash burger specialist in Shinsaibashi, Osaka. We smash 100% Aussie beef on a hot griddle for a crisp, juicy burger, and also serve authentic-style Nashville hot chicken.",
    },
  ],
} as const;

export type SiteFaqLang = keyof typeof SITE_FAQS;

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_ALT, "ギーザー", "Geezer"],
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: SITE_PHONE_E164,
    image: [
      `${SITE_URL}/images/hero-original.webp`,
      `${SITE_URL}/images/shop/exterior.jpg`,
      `${SITE_URL}/images/shop/interior.jpg`,
      `${SITE_URL}/images/geezer-logo.png`,
    ],
    logo: `${SITE_URL}/images/geezer-logo.png`,
    servesCuisine: ["Burger", "Smash Burger", "American", "Chicken"],
    priceRange: "¥¥",
    currenciesAccepted: "JPY",
    paymentAccepted: "Cash, Credit Card, Electronic Money",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.locality,
      addressRegion: SITE_ADDRESS.region,
      postalCode: SITE_ADDRESS.postalCode,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    hasMap: SITE_MAPS_SEARCH_URL,
    sameAs: [SITE_INSTAGRAM],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "03:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "17:00",
        closes: "03:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Osaka",
    },
    menu: `${SITE_URL}/#menu`,
  };
}

/** FAQPage for AI Overviews / rich results — JA by default (primary market) */
export function faqJsonLd(lang: SiteFaqLang = "ja") {
  const faqs = SITE_FAQS[lang] ?? SITE_FAQS.ja;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
