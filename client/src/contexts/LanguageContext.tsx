import React, { createContext, useContext, useState } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ja: {
    'nav.philosophy': 'PHILOSOPHY',
    'nav.menu': 'MENU',
    'nav.reviews': 'REVIEWS',
    'nav.access': 'ACCESS',
    'hero.title1': 'OSAKA\'S',
    'hero.title2': 'BEST',
    'hero.title3': 'BURGER',
    'hero.subtitle': '100%オージービーフを高温でスマッシュ。\n外はカリッ、中はジュワッ。本物の味を、誤魔化さない。',
    'hero.button': 'VIEW MENU',
    'philosophy.title': 'PHILOSOPHY',
    'philosophy.subtitle': 'シンプルだからこそ、美味い',
    'philosophy.beef': '100% AUSSIE BEEF',
    'philosophy.beef_desc': '厳選されたオーストラリア産牛肉を100%使用。冷凍パティは一切使わず、毎日新鮮な状態でご提供。',
    'philosophy.smash': 'SMASH TECHNIQUE',
    'philosophy.smash_desc': '高温の鉄板で一気にプレス。外はカリカリ、中はジューシー。アメリカで大人気の調理法を忠実に再現。',
    'philosophy.house': 'HOUSE-MADE',
    'philosophy.house_desc': 'ソース、トッピング、スパイスまですべて店内で手作り。化学調味料は一切使用していません。',
    'menu.title': 'MENU',
    'menu.subtitle': '※セット only (Fries + Drink included)',
    'menu.tag_classic': '定番',
    'menu.tag_popular': '人気NO.1',
    'menu.tag_authentic': '本格派',
    'menu.cheese_burger': 'CHEESE BURGER',
    'menu.cheese_burger_ja': 'チーズバーガー',
    'menu.cheese_burger_desc': '100%オージービーフを高温鉄板でスマッシュ。カリッと香ばしい焦げ目と、肉汁溢れるジューシーさ。とろけるチェダーチーズと自家製ソースが絶妙に絡む。キャラメライズオニオンとの相性抜群。シンプルだからこそ、素材の良さが際立つ定番の一品。',
    'menu.double_cheese': 'DOUBLE CHEESE burger',
    'menu.double_cheese_ja': 'ダブルチーズバーガー',
    'menu.double_cheese_desc': '【人気No.1】圧倒的な肉々しさを求めるなら、これ一択。パティ2枚×チーズ2枚の贅沢な構成。一口ごとに溢れ出す肉汁と、とろけるチーズの濃厚なハーモニー。ガッツリ食べたい時の最高の選択。満足度MAX保証。',
    'menu.hot_chicken': 'Nashville HOT CHICKEN',
    'menu.hot_chicken_ja': 'ナッシュビルホットチキン',
    'menu.hot_chicken_desc': '【本格派】アメリカ南部・ナッシュビル発祥の名物を忠実に再現。自家製スパイスブレンドで仕上げた、ジューシーなフライドチキン。カイエンペッパーの効いた辛さが、クセになる美味しさ。Plain（ソース無し）or Hot（激辛）でお好みの辛さを選択可能。',
    'menu.hamburger': 'HAMBURGER',
    'menu.hamburger_ja': 'ハンバーガー',
    'menu.hamburger_desc': '究極のシンプル。余計なものは何もいらない。新鮮なレタス、トマト、チーズ。スマッシュパティの旨味だけで勝負する潔さ。「これが本物のハンバーガーだ」と気づく瞬間。',
    'menu.bacon_lettuce': 'BACON LETTUCE burger',
    'menu.bacon_lettuce_ja': 'ベーコンレタスバーガー',
    'menu.bacon_lettuce_desc': 'こんがり焼き上げたベーコン。シャキシャキのグリーンリーフレタスが爽やかさを添える。ジューシーなパティとの絶妙なバランスを生む。',
    'menu.double_burger': 'DOUBLE hamBURGER',
    'menu.double_burger_ja': 'ダブルハンバーガー',
    'menu.double_burger_desc': 'チーズよりも、肉の旨味を堪能したいあなたへ。100%オージービーフのパティを2枚重ね。余計な味付けは一切なし。肉本来の深い味わいだけを追求。真の肉好きが選ぶ、ストレートな美味しさ。',
    'menu.thick_bacon': 'THICK BACON lettuce burger',
    'menu.thick_bacon_ja': '厚切りベーコンレタスバーガー',
    'menu.thick_bacon_desc': '「ベーコン好きのためのバーガー」を追求した一品。通常の倍以上の厚切りベーコンをたっぷり贅沢に。カリッと焼き上げた香ばしさと、肉厚な食べ応え。グリーンリーフの爽やかさが、濃厚な味わいを引き立てる。',
    'menu.junk_cheese': 'JUNK CHEESE',
    'menu.junk_cheese_ja': 'ジャンクチーズバーガー',
    'menu.junk_cheese_desc': '店内飲食のみ / Dine-in only',
    'reviews.title': 'REVIEWS',
    'reviews.subtitle': 'Google 4.7★ / 5.0 (83 Reviews)',
    'access.title': 'ACCESS',
    'access.subtitle': '南森町駅から徒歩5分',
    'access.closed_notice': '只今移転準備中の為営業停止中',
    'access.address': 'ADDRESS',
    'access.address_value': '大阪市北区西天満5-11-4',
    'access.station': 'STATION',
    'access.station_value': '南森町駅 徒歩5分',
    'access.phone': 'PHONE',
    'access.phone_value': '080-1520-0694',
    'access.hours': 'HOURS',
    'access.hours_weekday': '平日: 13:00-15:00',
    'access.hours_weekend': '週末: 11:00-20:00',
    'access.map': 'Google Mapsで見る',
    'access.ubereats': 'Uber Eatsで注文',
    'footer.title': 'KING\'S CODE BURGER',
    'footer.subtitle': '大阪で一番ジューシーなスマッシュバーガー',
    'footer.copyright': '© 2025 King\'s Code Burger. All rights reserved.',
    'instagram.subtitle': 'our instagram',
  },
  en: {
    'nav.philosophy': 'PHILOSOPHY',
    'nav.menu': 'MENU',
    'nav.reviews': 'REVIEWS',
    'nav.access': 'ACCESS',
    'hero.title1': 'OSAKA\'S',
    'hero.title2': 'BEST',
    'hero.title3': 'BURGER',
    'hero.subtitle': '100% Aussie beef smashed on a blistering-hot griddle.\nCrispy outside, juicy inside. No shortcuts. No fake flavor.',
    'hero.button': 'VIEW MENU',
    'philosophy.title': 'PHILOSOPHY',
    'philosophy.subtitle': 'Simple — that\'s why it tastes so good',
    'philosophy.beef': '100% AUSSIE BEEF',
    'philosophy.beef_desc': 'We use carefully selected 100% Australian beef. No frozen patties — ever. Served fresh every day.',
    'philosophy.smash': 'SMASH TECHNIQUE',
    'philosophy.smash_desc': 'Pressed hard on a high-heat griddle. Crispy crust, juicy center. The smash technique that took America by storm, done right.',
    'philosophy.house': 'HOUSE-MADE',
    'philosophy.house_desc': 'Sauces, toppings, and spices — all made in-house. No artificial seasonings.',
    'menu.title': 'MENU',
    'menu.subtitle': '*Set only (Fries + Drink included)',
    'menu.tag_classic': 'CLASSIC',
    'menu.tag_popular': 'NO.1',
    'menu.tag_authentic': 'AUTHENTIC',
    'menu.cheese_burger': 'CHEESE BURGER',
    'menu.cheese_burger_ja': 'Cheese Burger',
    'menu.cheese_burger_desc': '100% Aussie beef smashed on a blazing-hot griddle. A crisp, savory crust with a juicy, flavor-packed center. Melted cheddar and house-made sauce wrap around every bite. Pairs perfectly with caramelized onions. Simple — so the ingredients shine. Our signature classic.',
    'menu.double_cheese': 'DOUBLE CHEESE burger',
    'menu.double_cheese_ja': 'Double Cheese Burger',
    'menu.double_cheese_desc': '[#1 Favorite] If you want serious beef, this is the one. Two patties × two slices of cheese. Juices pour out with every bite, locked in with rich melted cheese. The ultimate pick when you\'re hungry. Satisfaction guaranteed.',
    'menu.hot_chicken': 'Nashville HOT CHICKEN',
    'menu.hot_chicken_ja': 'Nashville Hot Chicken',
    'menu.hot_chicken_desc': '[Authentic] Faithfully recreating the Southern U.S. classic born in Nashville. Juicy fried chicken finished with our house spice blend. Cayenne heat that\'s addictive. Choose Plain (no sauce) or Hot (extra spicy).',
    'menu.hamburger': 'HAMBURGER',
    'menu.hamburger_ja': 'Hamburger',
    'menu.hamburger_desc': 'Ultimate simplicity. Nothing extra. Fresh lettuce, tomato, and cheese. Just the smash patty\'s pure flavor — no distractions. The moment you realize: this is a real hamburger.',
    'menu.bacon_lettuce': 'BACON LETTUCE burger',
    'menu.bacon_lettuce_ja': 'Bacon Lettuce Burger',
    'menu.bacon_lettuce_desc': 'Crispy, well-browned bacon. Crunchy green leaf lettuce for freshness. A perfectly balanced bite with the juicy smash patty.',
    'menu.double_burger': 'DOUBLE hamBURGER',
    'menu.double_burger_ja': 'Double Hamburger',
    'menu.double_burger_desc': 'For those who want the beef itself, more than the cheese. Two 100% Aussie beef patties, stacked. No extra seasoning. Just the deep, true flavor of the meat. Straight-up delicious — for real meat lovers.',
    'menu.thick_bacon': 'THICK BACON lettuce burger',
    'menu.thick_bacon_ja': 'Thick-Cut Bacon Lettuce Burger',
    'menu.thick_bacon_desc': 'Built for bacon lovers. Generously loaded with thick-cut bacon — more than twice the usual cut. Crispy, fragrant, and seriously meaty. Green leaf lettuce keeps the rich flavors bright.',
    'menu.junk_cheese': 'JUNK CHEESE',
    'menu.junk_cheese_ja': 'Junk Cheese Burger',
    'menu.junk_cheese_desc': 'Dine-in only',
    'reviews.title': 'REVIEWS',
    'reviews.subtitle': 'Google 4.7★ / 5.0 (83 Reviews)',
    'access.title': 'ACCESS',
    'access.subtitle': '5-minute walk from Minamimorimachi Station',
    'access.closed_notice': 'Temporarily closed while we prepare to relocate',
    'access.address': 'ADDRESS',
    'access.address_value': '5-11-4 Nishitenma, Kita-ku, Osaka',
    'access.station': 'STATION',
    'access.station_value': 'Minamimorimachi Station — 5 min on foot',
    'access.phone': 'PHONE',
    'access.phone_value': '080-1520-0694',
    'access.hours': 'HOURS',
    'access.hours_weekday': 'Weekdays: 13:00–15:00',
    'access.hours_weekend': 'Weekends: 11:00–20:00',
    'access.map': 'View on Google Maps',
    'access.ubereats': 'Order on Uber Eats',
    'footer.title': 'KING\'S CODE BURGER',
    'footer.subtitle': 'Osaka\'s juiciest smash burger',
    'footer.copyright': '© 2025 King\'s Code Burger. All rights reserved.',
    'instagram.subtitle': 'Our Instagram',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ja']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
