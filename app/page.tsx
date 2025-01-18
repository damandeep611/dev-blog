"use client";

import SelectedWork from "./components/SelectedWork";
import HeroSection from "./components/ui/HeroSection";
import WorkSection from "./components/WorkSection";
import Work from "./components/WorkSection";

export default async function Page() {
  return (
    <div className="w-full  ">
      <HeroSection />
      <SelectedWork />
    </div>
  );
}
