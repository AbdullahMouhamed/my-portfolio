import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
    {
        name: "EGYVPN",
        link: "https://egyvpn.com",
        image: "/images/egyvpn.png",
        description: "A VPN service website built with modern web technologies.",
    },
    {
        name: "Neli's Arts",
        link: "https://masquerades-room.vercel.app/",
        image: "/images/neliz.png",
        description: "A Portfolio website deployed on Vercel.",
    },
];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section
            id="projects"
            className="min-h-screen px-6 md:px-20 py-20  bg-linear-to-b from-[#1a1a1a] to-[#2b2b2b] text-[#e0e0e0]
                border-[#1a1a1a]"
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center text-[#88c070]">
                {t("projects.title", { defaultValue: "My Projects" })}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="bg-[#3b3b3b] rounded-lg overflow-hidden shadow-lg border-4 border-[#1a1a1a] hover:scale-105 hover:shadow-xl transition-transform duration-300"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg sm:text-xl md:text-2xl text-[#e8e878] mb-2">
                                {project.name}
                            </h3>
                            <p className="text-sm sm:text-base text-[#c0c0c0] mb-3">
                                {project.description}
                            </p>
                            <span className="inline-block px-4 py-2 bg-[#88c070] text-[#1a1a1a] rounded-lg text-xs sm:text-sm uppercase">
                                View Project
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
