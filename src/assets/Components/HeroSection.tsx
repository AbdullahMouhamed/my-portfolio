import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HeroSection() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const skills = [
        "React Developer",
        "Next.js Developer",
        "TypeScript",
        "Tailwind",
        "Bootstrap",
        "Redux",
    ];

    // Tailwind classes
    const headingClass = "text-2xl sm:text-3xl md:text-4xl mb-6 text-[#88c070]";
    const subHeadingClass = "text-lg sm:text-xl md:text-2xl mb-6 text-[#e8e878]";
    const paragraphClass = isArabic
        ? "text-sm sm:text-base md:text-2xl leading-relaxed max-w-lg text-[#c0c0c0]"
        : "text-xs sm:text-sm md:text-base leading-relaxed max-w-lg text-[#c0c0c0]";


    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center text-center
                bg-linear-to-b from-[#2b2b2b] to-[#1a1a1a] text-[#e0e0e0]
                 border-[#1a1a1a]"
        >
            {/* Heading Animation */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={headingClass}
            >
                {t("hero.title", { defaultValue: "Hi, I'm Abdullah" })}
            </motion.h1>

            {/* TypeAnimation with fade-in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                dir="ltr"
                className={subHeadingClass}
            >
                <TypeAnimation
                    sequence={skills.flatMap(skill => [skill + " ", 1500])}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </motion.div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className={paragraphClass}
            >
                {t("hero.subtitle", {
                    defaultValue:
                        "I build fast, modern, and scalable web applications with a passion for clean design and powerful code",
                })}
            </motion.p>

           saving
        </section>
    );
}
