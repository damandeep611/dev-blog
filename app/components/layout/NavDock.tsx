"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import blogImg from "../../../public/images/blogpage.png";
import homeImg from "../../../public/images/homepage.png";
import workImg from "../../../public/images/work.jpeg";
import aboutImg from "../../../public/images/programmer.jpeg";
import useEmblaCarousel from "embla-carousel-react";

interface MenuItem {
  name: string;
  href: string;
  imageSrc: string | typeof blogImg;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
    imageSrc: homeImg,
  },
  {
    name: "Blog",
    href: "/blog",
    imageSrc: blogImg,
  },

  {
    name: "Work",
    href: "/work",
    imageSrc: workImg,
  },
  {
    name: "About",
    href: "/about",
    imageSrc: aboutImg,
  },
];

export default function NavDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "keepSnaps",
    align: "center",
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.button
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-16 h-16 sm:w-24 sm:h-24 rounded-full text-white flex items-center justify-center cursor-pointer"
        onClick={toggleMenu}
        animate={{
          backgroundColor: isOpen ? "#3B82F6" : "#92400E",
        }}
      >
        <span className="sr-only">Toggle menu</span>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circle"
              d="M 60, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="17" fontWeight="bold">
            <textPath href="#circle">Menu</textPath>
          </text>
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-x-0 bottom-0 bg-black/90 backdrop-blur-sm text-white z-40 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "60vh" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <div className="h-full flex flex-col justify-center pb-24">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla_container flex">
                  {menuItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_25%] px-2"
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block text-center"
                      >
                        <motion.div
                          className="relative aspect-square w-full max-w-[250px] mx-auto mb-2 overflow-hidden rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <span className="text-lg font-semibold">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx global>
        {`
          .embla_container {
            display: flex;
            align-items: center;
            cursor: grab;
          }

          .embla_container:active {
            cursor: grabbing;
          }

          .embla_slide {
            min-width: 0;
            position: relative;
          }
        `}
      </style>
    </>
  );
}
