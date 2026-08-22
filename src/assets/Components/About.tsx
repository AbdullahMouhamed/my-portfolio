import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const skills = ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Bootstrap", "Framer Motion"];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-[#1a1a1a] text-[#e0e0e0]"
        >
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-center"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-[#88c070]">
                    {t("about.title", { defaultValue: "About Me" })}
                </h2>

                <p className={`${isArabic ? "text-sm sm:text-base md:text-lg" : "text-xs sm:text-sm md:text-base"} mb-6 leading-relaxed text-[#c0c0c0]`}>
                    {t("about.subtitle", {
                        defaultValue:
                            "I'm a passionate web developer specializing in building modern, responsive, and scalable web applications using the latest technologies.",
                    })}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 bg-[#3b3b3b] rounded-lg text-[#e8e878] text-sm sm:text-base"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* CV Button */}
                <motion.a
                    href="/Abdullah%20Mohamed.pdf" // use %20 for space in URLs
                    download="Abdullah_Mohamed_Resume.pdf" // this will be the filename when downloaded
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-6 py-3 bg-[#3b3b3b] text-[#e0e0e0] border-4 border-[#1a1a1a] shadow-[4px_4px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 uppercase text-xs sm:text-sm"
                >
                    {t("about.downloadCV", { defaultValue: "Download CV" })}
                </motion.a>

            </motion.div>
        </section>
    );
}
