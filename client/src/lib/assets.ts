/** public/ 配下のファイル（GitHub Pages の base パス対応） */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}
