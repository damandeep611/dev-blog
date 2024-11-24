"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import WorkCard from "./WorkCard";
import { projects } from "@/lib/project-data";

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
} as const;

export default function WorkSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      skipSnaps: true,
    },
    [AutoScroll({ speed: 2, playOnInit: true })]
  );
  return (
    <div className="min-h-screen w-full bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work</h2>
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="flex-[0_0_500px] mx-4"
              >
                <WorkCard
                  {...project}
                  overlayHeading={project.heading}
                  overlayInfo={project.info}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
