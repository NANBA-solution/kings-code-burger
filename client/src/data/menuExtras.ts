import { publicAsset } from "@/lib/assets";

export type SideItem = {
  id: string;
  nameEn: string;
  nameJa: string;
  price: string;
  image: string;
};

export type DrinkItem = {
  id: string;
  nameEn: string;
  nameJa: string;
  alcohol?: boolean;
  image?: string;
};

export type SauceItem = {
  id: string;
  nameEn: string;
  nameJa: string;
  price: string;
  image: string;
};

export const SIDE_ITEMS: SideItem[] = [
  {
    id: "hot-chicken-1",
    nameEn: "NASHVILLE HOT CHICKEN 1PIECE",
    nameJa: "ナッシュビルホットチキン 1ピース",
    price: "¥300",
    image: publicAsset("images/menu/sides/hot-chicken-1.jpg"),
  },
  {
    id: "hot-chicken-3",
    nameEn: "NASHVILLE HOT CHICKEN 3PIECES WITH FRIES",
    nameJa: "ナッシュビルホットチキン 3ピース＋フライ",
    price: "¥1,200",
    image: publicAsset("images/menu/sides/hot-chicken-3.jpg"),
  },
  {
    id: "hot-chicken-5",
    nameEn: "NASHVILLE HOT CHICKEN 5PIECES WITH FRIES",
    nameJa: "ナッシュビルホットチキン 5ピース＋フライ",
    price: "¥1,800",
    image: publicAsset("images/menu/sides/hot-chicken-5.jpg"),
  },
];

export const SOFT_DRINK_ITEMS: DrinkItem[] = [
  {
    id: "coca-cola",
    nameEn: "COCA-COLA",
    nameJa: "コカ・コーラ",
    image: publicAsset("images/menu/drinks/coca-cola.jpg"),
  },
  {
    id: "coca-cola-zero",
    nameEn: "COCA-COLA ZERO",
    nameJa: "コカ・コーラ ゼロ",
    image: publicAsset("images/menu/drinks/coca-cola-zero.jpg"),
  },
  {
    id: "ginger-ale",
    nameEn: "GINGER ALE",
    nameJa: "ジンジャーエール",
    image: publicAsset("images/menu/drinks/ginger-ale.jpg"),
  },
  {
    id: "dr-pepper",
    nameEn: "DR. PEPPER",
    nameJa: "ドクターペッパー",
    image: publicAsset("images/menu/drinks/dr-pepper.jpg"),
  },
  {
    id: "orange-juice",
    nameEn: "ORANGE JUICE",
    nameJa: "オレンジジュース",
    image: publicAsset("images/menu/drinks/orange-juice.png"),
  },
  {
    id: "fanta-grape",
    nameEn: "FANTA GRAPE",
    nameJa: "ファンタグレープ",
    image: publicAsset("images/menu/drinks/fanta-grape.jpg"),
  },
  {
    id: "fanta-melon",
    nameEn: "FANTA MELON SODA",
    nameJa: "ファンタメロンソーダ",
    image: publicAsset("images/menu/drinks/fanta-melon.webp"),
  },
  {
    id: "sprite",
    nameEn: "SPRITE",
    nameJa: "スプライト",
    image: publicAsset("images/menu/drinks/sprite.jpg"),
  },
  {
    id: "oolong",
    nameEn: "OOLONG TEA",
    nameJa: "烏龍茶",
    image: publicAsset("images/menu/drinks/oolong.jpg"),
  },
  {
    id: "coffee",
    nameEn: "COFFEE",
    nameJa: "コーヒー",
    image: publicAsset("images/menu/drinks/coffee.png"),
  },
];

export const ALCOHOL_ITEMS: DrinkItem[] = [
  {
    id: "kirin",
    nameEn: "KIRIN BEER",
    nameJa: "キリンビール",
    alcohol: true,
    image: publicAsset("images/menu/drinks/kirin.jpg"),
  },
  {
    id: "asahi",
    nameEn: "ASAHI BEER",
    nameJa: "アサヒビール",
    alcohol: true,
    image: publicAsset("images/menu/drinks/asahi.webp"),
  },
  {
    id: "heineken",
    nameEn: "HEINEKEN",
    nameJa: "ハイネケン",
    alcohol: true,
    image: publicAsset("images/menu/drinks/heineken.png"),
  },
  {
    id: "budweiser",
    nameEn: "BUDWEISER",
    nameJa: "バドワイザー",
    alcohol: true,
    image: publicAsset("images/menu/drinks/budweiser.png"),
  },
];

/** @deprecated use SOFT_DRINK_ITEMS + ALCOHOL_ITEMS */
export const DRINK_ITEMS: DrinkItem[] = [...SOFT_DRINK_ITEMS, ...ALCOHOL_ITEMS];

export const SAUCE_ITEMS: SauceItem[] = [
  {
    id: "original",
    nameEn: "ORIGINAL SAUCE",
    nameJa: "オリジナルソース",
    price: "¥300",
    image: publicAsset("images/menu/sauces/original.jpg"),
  },
  {
    id: "honey",
    nameEn: "HONEY SAUCE",
    nameJa: "ハニーソース",
    price: "¥300",
    image: publicAsset("images/menu/sauces/honey.jpg"),
  },
];
