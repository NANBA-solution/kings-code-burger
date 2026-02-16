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
    'menu.cheese_burger': 'CHEESE BURGER',
    'menu.cheese_burger_ja': 'チーズバーガー',
    'menu.cheese_burger_desc': '100%オージービーフを高温鉄板でスマッシュ。カリッと香ばしい焦げ目と、肉汁溢れるジューシーさ。とろけるチェダーチーズと自家製ソースが絶妙に絡む。キャラメライズオニオンとの相性抜群。シンプルだからこそ、素材の良さが際立つ定番の一品。',
    'menu.double_cheese': 'DOUBLE CHEESE',
    'menu.double_cheese_ja': 'ダブルチーズバーガー',
    'menu.double_cheese_desc': '【人気No.1】圧倒的な肉々しさを求めるなら、これ一択。パティ2枚×チーズ2枚の贅沢な構成。一口ごとに溢れ出す肉汁と、とろけるチーズの濃厚なハーモニー。ガッツリ食べたい時の最高の選択。満足度MAX保証。',
    'menu.hot_chicken': 'HOT CHICKEN',
    'menu.hot_chicken_ja': 'ナッシュビルホットチキン',
    'menu.hot_chicken_desc': '【本格派】アメリカ南部・ナッシュビル発祥の名物を忠実に再現。自家製スパイスブレンドで仕上げた、ジューシーなフライドチキン。カイエンペッパーの効いた辛さが、クセになる美味しさ。Plain（ソース無し）or Hot（激辛）でお好みの辛さを選択可能。',
    'menu.hamburger': 'HAMBURGER',
    'menu.hamburger_ja': 'ハンバーガー',
    'menu.hamburger_desc': '究極のシンプル。余計なものは何もいらない。新鮮なレタス、トマト、チーズ。スマッシュパティの旨味だけで勝負する潔さ。「これが本物のハンバーガーだ」と気づく瞬間。',
    'menu.bacon_lettuce': 'BACON LETTUCE',
    'menu.bacon_lettuce_ja': 'ベーコンレタスバーガー',
    'menu.bacon_lettuce_desc': 'こんがり焼き上げたベーコン。シャキシャキのグリーンリーフレタスが爽やかさを添える。ジューシーなパティとの絶妙なバランスを生む。',
    'menu.double_burger': 'DOUBLE BURGER',
    'menu.double_burger_ja': 'ダブルハンバーガー',
    'menu.double_burger_desc': 'チーズよりも、肉の旨味を堪能したいあなたへ。100%オージービーフのパティを2枚重ね。余計な味付けは一切なし。肉本来の深い味わいだけを追求。真の肉好きが選ぶ、ストレートな美味しさ。',
    'menu.thick_bacon': 'THICK BACON',
    'menu.thick_bacon_ja': '厚切りベーコンレタスバーガー',
    'menu.thick_bacon_desc': '「ベーコン好きのためのバーガー」を追求した一品。通常の倍以上の厚切りベーコンをたっぷり贅沢に。カリッと焼き上げた香ばしさと、肉厚な食べ応え。グリーンリーフの爽やかさが、濃厚な味わいを引き立てる。',
    'menu.junk_cheese': 'JUNK CHEESE',
    'menu.junk_cheese_ja': 'ジャンクチーズバーガー',
    'menu.junk_cheese_desc': '店内飲食のみ / Dine-in only',
    'reviews.title': 'REVIEWS',
    'reviews.subtitle': 'Google 4.7★ / 5.0 (83 Reviews)',
    'access.title': 'ACCESS',
    'access.subtitle': '南森町駅から徒歩5分',
    'access.address': 'ADDRESS',
    'access.address_value': '大阪市北区西天満5-11-4',
    'access.station': 'STATION',
    'access.station_value': '南森町駅 徒歩5分',
    'access.phone': 'PHONE',
    'access.phone_value': '080-1520-0694',
    'access.hours': 'HOURS',
    'access.hours_weekday': '平日: 13:00-20:00',
    'access.hours_weekend': '週末: 11:00-20:00',
    'access.map': 'Google Mapsで見る',
    'access.ubereats': 'Uber Eatsで注文',
    'footer.title': 'KING\'S CODE BURGER',
    'footer.subtitle': '大阪で一番ジューシーなスマッシュバーガー',
    'footer.copyright': '© 2025 King\'s Code Burger. All rights reserved.',
  },
  en: {
    'nav.philosophy': 'PHILOSOPHY',
    'nav.menu': 'MENU',
    'nav.reviews': 'REVIEWS',
    'nav.access': 'ACCESS',
    'hero.title1': 'OSAKA\'S',
    'hero.title2': 'BEST',
    'hero.title3': 'BURGER',
    'hero.subtitle': '100% Australian beef smashed at high heat.\nCrispy outside, juicy inside. No compromises on taste.',
    'hero.button': 'VIEW MENU',
    'philosophy.title': 'PHILOSOPHY',
    'philosophy.subtitle': 'Simple is delicious',
    'philosophy.beef': '100% AUSSIE BEEF',
    'philosophy.beef_desc': 'Premium Australian beef, 100% fresh. Never frozen. Delivered fresh daily.',
    'philosophy.smash': 'SMASH TECHNIQUE',
    'philosophy.smash_desc': 'High-heat griddle smash. Crispy crust, juicy center. Authentic American smash burger technique.',
    'philosophy.house': 'HOUSE-MADE',
    'philosophy.house_desc': 'All sauces, toppings, and spices made in-house. No artificial additives.',
    'menu.title': 'MENU',
    'menu.subtitle': '※Set only (Fries + Drink included)',
    'menu.cheese_burger': 'CHEESE BURGER',
    'menu.cheese_burger_ja': 'Cheese Burger',
    'menu.cheese_burger_desc': 'Smashed 100% Australian beef patty. Cheddar cheese, house-made sauce, fresh vegetables.',
    'menu.double_cheese': 'DOUBLE CHEESE',
    'menu.double_cheese_ja': 'Double Cheese Burger',
    'menu.double_cheese_desc': '2 patties, 2 slices of cheese. Maximum meat. Perfect for hearty appetites.',
    'menu.hot_chicken': 'HOT CHICKEN',
    'menu.hot_chicken_ja': 'Nashville Hot Chicken',
    'menu.hot_chicken_desc': 'Southern US classic. House-made spice blend. Perfectly spicy chicken.',
    'menu.hamburger': 'HAMBURGER',
    'menu.hamburger_ja': 'Hamburger',
    'menu.hamburger_desc': 'Simple perfection. Let the beef shine.',
    'menu.bacon_lettuce': 'BACON LETTUCE',
    'menu.bacon_lettuce_ja': 'Bacon Lettuce Burger',
    'menu.bacon_lettuce_desc': 'Thick-cut bacon, crispy lettuce, fresh tomato.',
    'menu.double_burger': 'DOUBLE BURGER',
    'menu.double_burger_ja': 'Double Hamburger',
    'menu.double_burger_desc': '2 patties for maximum beef flavor. Seriously filling.',
    'menu.thick_bacon': 'THICK BACON',
    'menu.thick_bacon_ja': 'Thick-Cut Bacon Lettuce Burger',
    'menu.thick_bacon_desc': 'Loaded with thick-cut bacon. Serious satisfaction.',
    'menu.junk_cheese': 'JUNK CHEESE',
    'menu.junk_cheese_ja': 'Junk Cheese Burger',
    'menu.junk_cheese_desc': 'Dine-in only',
    'reviews.title': 'REVIEWS',
    'reviews.subtitle': 'Google 4.7★ / 5.0 (83 Reviews)',
    'access.title': 'ACCESS',
    'access.subtitle': '5 min walk from Minamimorimachi Station',
    'access.address': 'ADDRESS',
    'access.address_value': '5-11-4 Nishi-Tenma, Kita-ku, Osaka',
    'access.station': 'STATION',
    'access.station_value': 'Minamimorimachi Station - 5 min walk',
    'access.phone': 'PHONE',
    'access.phone_value': '080-1520-0694',
    'access.hours': 'HOURS',
    'access.hours_weekday': 'Weekday: 13:00-20:00',
    'access.hours_weekend': 'Weekend: 11:00-20:00',
    'access.map': 'View on Google Maps',
    'access.ubereats': 'Order on Uber Eats',
    'footer.title': 'KING\'S CODE BURGER',
    'footer.subtitle': 'Osaka\'s juiciest smash burger',
    'footer.copyright': '© 2025 King\'s Code Burger. All rights reserved.',
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
