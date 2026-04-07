import React, { useEffect } from "react";
import SmoothScrollWrapper from "./components/layout/SmoothScrollWrapper";
import TopNavBar from "./components/layout/TopNavBar";
import SideNavBar from "./components/layout/SideNavBar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ServicesSection from "./components/sections/ServicesSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ContactSection from "./components/sections/ContactSection";

function App({ targetSectionId = null }) {
  useEffect(() => {
    if (!window.lenis) return;

    if (!targetSectionId) {
      window.lenis.scrollTo(0, { duration: 1.2 });
      return;
    }

    const section = document.getElementById(targetSectionId);
    if (!section) return;

    window.lenis.scrollTo(section, { offset: -110, duration: 1.2 });
  }, [targetSectionId]);

  return (
    <SmoothScrollWrapper>
      <TopNavBar />
      <SideNavBar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}

export default App;
