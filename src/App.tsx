import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import Navbar from "./assets/Components/Navbar";
import HeroSection from "./assets/Components/HeroSection";
import About from "./assets/Components/About";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (<>
    <Navbar />
    <HeroSection />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
  );
}
