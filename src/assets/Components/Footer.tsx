import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiPhone, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { name: t("navbar.hero", { defaultValue: "Home" }), id: "hero" },
    { name: t("navbar.about", { defaultValue: "About" }), id: "about" },
    { name: t("navbar.projects", { defaultValue: "Projects" }), id: "projects" },
    { name: t("navbar.contact", { defaultValue: "Contact" }), id: "contact" },
  ];

  const social = [
    { icon: FiPhone, link: "tel:+201061642568", label: "+201061642568" },
    { icon: FiMail, link: "mailto:abdullah.m.9779@gmail.com", label: "Email Me" },
    {
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/abdullaah-mohamed-30053826a",
      label: "LinkedIn",
    },
  ];

  return (
    <footer id="footer" className="bg-[#2b2b2b] text-[#c0c0c0] border-t-4 border-[#3b3b3b]">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#88c070] text-xl font-bold"
        >
          Abdullah Mohamed
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-[#88c070] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Social / Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4"
        >
          {social.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={idx}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#88c070] hover:text-[#e8e878] transition-colors duration-200 text-2xl"
                title={s.label}
              >
                <Icon />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-[#707070] pb-6">
        &copy; {new Date().getFullYear()} Abdullah Mohamed. {t("footer.rights", { defaultValue: "All rights reserved." })}
      </div>
    </footer>
  );
}
