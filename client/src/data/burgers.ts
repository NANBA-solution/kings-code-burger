import { publicAsset } from "@/lib/assets";

export type BurgerIngredient = {
  nameJa: string;
  nameEn: string;
  /** ○の数（省略時は1）。主にチーズ枚数用 */
  circles?: number;
  noteJa?: string;
  noteEn?: string;
};

export type BurgerItem = {
  slug: string;
  nameKey: string;
  nameJaKey: string;
  descKey: string;
  price: string;
  image: string;
  tagKey?: string;
  hot?: boolean;
  ingredients: BurgerIngredient[];
  allergensJa: string;
  allergensEn: string;
};

export const SITE_ORIGIN = "https://geezer-smash-burger.vercel.app";

export function burgerDetailUrl(slug: string): string {
  return `${SITE_ORIGIN}/menu/${slug}`;
}

export function formatIngredientLabel(
  item: BurgerIngredient,
  language: "ja" | "en",
): string {
  const name = language === "ja" ? item.nameJa : item.nameEn;
  const note = language === "ja" ? item.noteJa : item.noteEn;
  const prefix = "○".repeat(item.circles ?? 1);
  return note ? `${prefix} ${name}（${note}）` : `${prefix} ${name}`;
}

const BEEF_BURGER_SAUCES: BurgerIngredient[] = [
  { nameJa: "マヨネーズ", nameEn: "Mayonnaise" },
  { nameJa: "マスタード", nameEn: "Mustard" },
  { nameJa: "ケチャップ", nameEn: "Ketchup" },
  { nameJa: "スイートレリッシュ", nameEn: "Sweet relish" },
];

export const BURGERS: BurgerItem[] = [
  {
    slug: "cheese-burger",
    nameKey: "menu.cheese_burger",
    nameJaKey: "menu.cheese_burger_ja",
    descKey: "menu.cheese_burger_desc",
    price: "¥1,400",
    image: publicAsset("images/menu/cheese-burger.png"),
    tagKey: "menu.tag_classic",
    ingredients: [
      { nameJa: "牛ミンチ（100%オージービーフ）", nameEn: "Ground beef (100% Aussie)" },
      { nameJa: "バンズ", nameEn: "Burger bun" },
      { nameJa: "チェダーチーズ", nameEn: "Cheddar cheese" },
      ...BEEF_BURGER_SAUCES,
      { nameJa: "キャラメライズドオニオン", nameEn: "Caramelized onions" },
    ],
    allergensJa: "小麦（バンズ）、乳（チーズ・マヨネーズ）、卵（マヨネーズ）",
    allergensEn: "Wheat (bun), milk (cheese, mayo), egg (mayo)",
  },
  {
    slug: "double-cheese",
    nameKey: "menu.double_cheese",
    nameJaKey: "menu.double_cheese_ja",
    descKey: "menu.double_cheese_desc",
    price: "¥2,200",
    image: publicAsset("images/menu/double-cheese.png"),
    tagKey: "menu.tag_popular",
    ingredients: [
      { nameJa: "牛ミンチ（100%オージービーフ）", nameEn: "Ground beef (100% Aussie)" },
      { nameJa: "バンズ", nameEn: "Burger bun" },
      { nameJa: "チェダーチーズ", nameEn: "Cheddar cheese", circles: 2 },
      ...BEEF_BURGER_SAUCES,
      { nameJa: "キャラメライズドオニオン", nameEn: "Caramelized onions" },
    ],
    allergensJa: "小麦（バンズ）、乳（チーズ・マヨネーズ）、卵（マヨネーズ）",
    allergensEn: "Wheat (bun), milk (cheese, mayo), egg (mayo)",
  },
  {
    slug: "hamburger",
    nameKey: "menu.hamburger",
    nameJaKey: "menu.hamburger_ja",
    descKey: "menu.hamburger_desc",
    price: "¥1,500",
    image: publicAsset("images/menu/hamburger.png"),
    ingredients: [
      { nameJa: "牛ミンチ（100%オージービーフ）", nameEn: "Ground beef (100% Aussie)" },
      { nameJa: "バンズ", nameEn: "Burger bun" },
      { nameJa: "チェダーチーズ", nameEn: "Cheddar cheese" },
      { nameJa: "トマト", nameEn: "Tomato" },
      { nameJa: "レタス", nameEn: "Lettuce" },
      ...BEEF_BURGER_SAUCES,
    ],
    allergensJa: "小麦（バンズ）、乳（チーズ・マヨネーズ）、卵（マヨネーズ）",
    allergensEn: "Wheat (bun), milk (cheese, mayo), egg (mayo)",
  },
  {
    slug: "double-burger",
    nameKey: "menu.double_burger",
    nameJaKey: "menu.double_burger_ja",
    descKey: "menu.double_burger_desc",
    price: "¥2,300",
    image: publicAsset("images/menu/double-burger.png"),
    ingredients: [
      { nameJa: "牛ミンチ（100%オージービーフ）", nameEn: "Ground beef (100% Aussie)" },
      { nameJa: "バンズ", nameEn: "Burger bun" },
      { nameJa: "チェダーチーズ", nameEn: "Cheddar cheese" },
      { nameJa: "トマト", nameEn: "Tomato" },
      { nameJa: "レタス", nameEn: "Lettuce" },
      ...BEEF_BURGER_SAUCES,
    ],
    allergensJa: "小麦（バンズ）、乳（チーズ・マヨネーズ）、卵（マヨネーズ）",
    allergensEn: "Wheat (bun), milk (cheese, mayo), egg (mayo)",
  },
  {
    slug: "bacon-lettuce",
    nameKey: "menu.bacon_lettuce",
    nameJaKey: "menu.bacon_lettuce_ja",
    descKey: "menu.bacon_lettuce_desc",
    price: "¥1,600",
    image: publicAsset("images/menu/bacon-lettuce.png"),
    ingredients: [
      { nameJa: "牛ミンチ（100%オージービーフ）", nameEn: "Ground beef (100% Aussie)" },
      { nameJa: "バンズ", nameEn: "Burger bun" },
      { nameJa: "ベーコン", nameEn: "Bacon" },
      { nameJa: "チェダーチーズ", nameEn: "Cheddar cheese" },
      { nameJa: "グリーンリーフレタス", nameEn: "Green leaf lettuce" },
      ...BEEF_BURGER_SAUCES,
    ],
    allergensJa: "小麦（バンズ）、乳（チーズ・マヨネーズ）、卵（マヨネーズ）、豚肉（ベーコン）",
    allergensEn: "Wheat (bun), milk (cheese, mayo), egg (mayo), pork (bacon)",
  },
  {
    slug: "hot-chicken",
    nameKey: "menu.hot_chicken",
    nameJaKey: "menu.hot_chicken_ja",
    descKey: "menu.hot_chicken_desc",
    price: "¥1,400",
    image: publicAsset("images/menu/hot-chicken.png"),
    tagKey: "menu.tag_authentic",
    hot: true,
    ingredients: [
      {
        nameJa: "国産ささみ",
        nameEn: "Domestic chicken breast tender",
        circles: 2,
        noteJa: "フライドチキン",
        noteEn: "Fried chicken",
      },
      { nameJa: "バンズ", nameEn: "Burger bun" },
      { nameJa: "レタス", nameEn: "Lettuce" },
      { nameJa: "マヨネーズ", nameEn: "Mayonnaise" },
      { nameJa: "マスタード", nameEn: "Mustard" },
      { nameJa: "ケチャップ", nameEn: "Ketchup" },
      { nameJa: "スイートレリッシュ", nameEn: "Sweet relish" },
      {
        nameJa: "ナッシュビルホットスパイスブレンド",
        nameEn: "Nashville hot spice blend",
        noteJa: "カイエン・パプリカ等",
        noteEn: "Cayenne, paprika, etc.",
      },
      { nameJa: "バターミルク", nameEn: "Buttermilk", noteJa: "下味・衣用", noteEn: "Marinade & batter" },
      { nameJa: "小麦粉", nameEn: "Flour", noteJa: "衣用", noteEn: "For coating" },
      { nameJa: "揚げ油", nameEn: "Frying oil" },
    ],
    allergensJa: "小麦（バンズ・衣）、乳（バターミルク・マヨネーズ）、卵（衣・マヨネーズ）",
    allergensEn: "Wheat (bun, coating), milk (buttermilk, mayo), egg (coating, mayo)",
  },
];

export function getBurgerBySlug(slug: string): BurgerItem | undefined {
  return BURGERS.find((b) => b.slug === slug);
}
