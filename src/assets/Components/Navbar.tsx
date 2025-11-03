import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const links = [
        { name: t("navbar.hero"), id: "hero" },
        { name: t("navbar.about"), id: "about" },
        { name: t("navbar.projects"), id: "projects" },
        { name: t("navbar.contact"), id: "contact" },
        { name: t("navbar.footer"), id: "footer" },
    ];

    // Custom scroll function for slower smooth scroll
const handleScroll = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (!element) return;

    const start = window.scrollY;
    const end = element.offsetTop - offset; // subtract offset for spacing
    const distance = end - start;
    const duration = 1000; // scroll duration in ms
    let startTime: number | null = null;

    // easing function: easeInOutQuad
    const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1); // 0 -> 1
        const eased = easeInOutQuad(percent); // apply easing
        window.scrollTo(0, start + distance * eased);
        if (percent < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};



    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 bg-[#2b2b2b] border-b-4 border-[#1a1a1a] shadow-[0_4px_0_#000000]
        text-[10px] text-[#e0e0e0] ${isArabic ? "font-[Cairo]" : "font-['Press_Start_2P']"}`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="text-[#88c070] text-xs tracking-wider font-['Press_Start_2P']">
                    {t("navbar.brand")}
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-4 items-center">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleScroll(link.id)}
                            className="px-3 py-2 bg-[#3b3b3b] border-4 border-[#1a1a1a] shadow-[3px_3px_0_#000000]
                        hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000000]
                        active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
                        transition-all duration-100 uppercase"
                        >
                            {link.name}
                        </button>
                    ))}
                    <LanguageSwitcher />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden bg-[#3b3b3b] border-4 border-[#1a1a1a] px-2 py-1 shadow-[3px_3px_0_#000000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-2 items-center py-3 bg-[#3b3b3b] border-t-4 border-[#1a1a1a]">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => {
                                handleScroll(link.id);
                                setIsOpen(false);
                            }}
                            className="w-11/12 text-center px-3 py-2 bg-[#4a4a4a] border-4 border-[#1a1a1a] shadow-[3px_3px_0_#000000]
                        hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000000]
                        active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 uppercase"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="pt-2">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
}
