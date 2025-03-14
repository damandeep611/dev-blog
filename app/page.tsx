"use client";

import Footer from "./components/layout/Footer";
import SelectedWork from "./components/SelectedWork";
import HeroSection from "./components/ui/HeroSection";
import SkillsMarquee from "./components/ui/skills";
import WorkSection from "./components/WorkSection";
import Work from "./components/WorkSection";

export default async function Page() {
  return (
    <div className="w-full  ">
      <HeroSection />
      <SkillsMarquee />
      <SelectedWork />
      <Footer />
    </div>
  );
}
