"use client";

import Hero from "./components/ui/Hero";
import Work from "./components/WorkSection";

export default async function Page() {
  return (
    <div className="w-full  ">
      <Hero />
      <Work />
    </div>
  );
}
