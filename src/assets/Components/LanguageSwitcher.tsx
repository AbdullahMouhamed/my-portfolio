import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };
return
  return (
    <button
      onClick={toggleLanguage}
      className="
        px-4 py-2
        font-['Press_Start_2P'] text-[10px]
        bg-[#3b3b3b] text-[#e0e0e0]
        border-4 border-[#1a1a1a]
        shadow-[3px_3px_0_#000000]
        hover:translate-x-0.5 hover:translate-y-0.5
        hover:shadow-[1px_1px_0_#000000]
        active:translate-x-[3px] active:translate-y-[3px]
        active:shadow-none
        uppercase tracking-wider
        transition-all duration-100
        rounded-none
      "
      aria-label="Toggle Language"
    >
      {i18n.language === "en" ? "🌍 العربية" : "🌎 English"}
    </button>
  );
}
