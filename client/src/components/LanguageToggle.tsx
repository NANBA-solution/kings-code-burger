import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  className?: string;
};

export function LanguageToggle({ className = "" }: Props) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`lang-switch ${className}`.trim()}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLanguage("ja")}
        className={`lang-switch__btn ${language === "ja" ? "is-active" : ""}`}
        aria-pressed={language === "ja"}
      >
        JA
      </button>
      <span className="lang-switch__divider" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`lang-switch__btn ${language === "en" ? "is-active" : ""}`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
