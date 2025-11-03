import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiPhone, FiMail, FiLinkedin, FiCopy } from "react-icons/fi";

const contacts = [
    {
        type: "Phone",
        value: "+201061642568",
        icon: FiPhone,
        link: "tel:+201061642568",
        copyable: true,
    },
    {
        type: "Email",
        value: "abdullah.m.9779@gmail.com",
        icon: FiMail,
        link: "mailto:abdullah.m.9779@gmail.com",
        copyable: true,
    },
    {
        type: "LinkedIn",
        value: "LinkedIn Profile",
        icon: FiLinkedin,
        link: "https://www.linkedin.com/in/abdullaah-mohamed-30053826a",
        copyable: false,
    },
];

export default function Contact() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000); // hide after 2s
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 
             bg-linear-to-b from-[#2b2b2b] to-[#1a1a1a] text-[#e0e0e0]
               "
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-16 text-center text-[#88c070] font-bold">
                {t("contact.title", { defaultValue: "Get In Touch" })}
            </h2>

            <div className="flex flex-col gap-6 w-full max-w-4xl">
                {contacts.map((contact, idx) => {
                    const Icon = contact.icon;
                    const href =
                        contact.type === "Email"
                            ? "https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.m.9779@gmail.com"
                            : contact.link;

                    return (
                        <motion.div
                            key={contact.type}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="flex items-center justify-between bg-[#1a1a1a] p-4 md:p-6 rounded-xl border-2 border-[#3b3b3b] shadow-md flex-wrap"
                        >
                            {/* Left: Icon + Text */}
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 flex-1 min-w-0"
                            >
                                <div className="p-4 bg-[#88c070]/20 text-[#88c070] rounded-full text-3xl shrink-0">
                                    <Icon />
                                </div>
                                <div className="flex flex-col gap-2 overflow-hidden">
                                    <span className="text-lg md:text-xl font-semibold text-[#e8e878] truncate">
                                        {contact.type}
                                    </span>
                                    {contact.type ==="LinkedIn" ? null :<span className="text-xs md:text-base text-[#c0c0c0] truncate">
                                        {contact.value}
                                    </span>}
                                </div>
                            </a>

                            {/* Right: Copy Button */}
                            {contact.copyable && (
                                <button
                                    onClick={() => handleCopy(contact.value)}
                                    className="mt-2 md:mt-0 ml-0 md:ml-4 p-2 bg-[#3b3b3b] rounded-lg text-[#88c070] hover:bg-[#88c070]/20 transition-colors duration-200 flex items-center gap-1 shrink-0"
                                >
                                    <FiCopy />
                                    {copied === contact.value && (
                                        <span className="text-xs text-[#e0e0e0]">Copied!</span>
                                    )}
                                </button>
                            )}
                        </motion.div>
                    );
                })}


            </div>
        </section>
    );
}
