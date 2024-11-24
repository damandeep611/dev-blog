"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import WorkCard from "./WorkCard";

const projects = [
  {
    title: "PushEverySecond",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800",
    description:
      "Advanced crypto analytics platform with real-time market data visualization",
  },
  {
    title: "OrangeChain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    description:
      "Layer-2 Bitcoin network scaling solution with proof-of-work consensus",
  },
  {
    title: "Breeew Design",
    image:
      "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80&w=800",
    description: "Modern web design system with advanced component library",
  },
];
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
    [AutoScroll({ speed: 2, stopOnMouseEnter: true, playOnInit: true })]
  );
  return (
    <div className="min-h-screen w-full bg-gray-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work</h2>
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="flex-[0_0_400px] mx-4"
              >
                <WorkCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
