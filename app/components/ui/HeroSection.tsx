"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BsGithub, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = ["Web Design", "AI AGENTS", "Full stack apps"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  // Animation variants for text reveal
  const textReveal = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  const socialLinks = [
    { icon: BsGithub, url: "https://github.com/damandeep611" },
    { icon: BsInstagram, url: "https://github.com/damandeep611" },
    { icon: BsTwitterX, url: "https://github.com/damandeep611" },
    { icon: BsYoutube, url: "https://github.com/damandeep611" },
  ];

  return (
    <>
      <section className=" max-w-4xl mx-auto py-2 px-4  ">
        <div className="w-full  mx-auto">
          {/* Profile Header */}
          <Header />
          <div className=" w-full text-md py-8  ">
            <div className=" flex flex-col items-start justify-between gap-5">
              <div className="flex flex-col gap-4">
                <div>
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textReveal}
                    className=" relative text-3xl md:text-5xl lg:text-6xl font-semibold "
                  >
                    Designer/ Developer
                    <motion.div
                      className="absolute -top-4 -right-10 rotate-45  bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold  overflow-hidden"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.div
                        key={currentTextIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {rotatingTexts[currentTextIndex]}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-xs text-zinc-400"
                  >
                    Based in India
                  </motion.span>
                </div>
              </div>

              <div className=" text-base md:text-xl lg:text-2xl  text-zinc-400">
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  Tweaking products with AI light and focused , I Try to Build
                  products that don’t overcomplicate things Building -usable,
                  practical and Fast Apps.
                </motion.p>
              </div>
              <div className="flex flex-col  gap-2">
                <p className="text-zinc-400 font-semibold">Connect</p>
                <div className="flex items-center justify-between gap-5">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.url}
                      className=" flex overflow-hidden"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center  gap-2 text-sm dark:text-zinc-400  hover:text-gray-300 transition-colors"
                      >
                        <link.icon size={16} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Grid Section - Bottom 50% */}
          <div className="h-[20vh] relative">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(${"#CCCCCC"} 1px, transparent 1px),
                  linear-gradient(90deg, ${"#CCCCCC"} 1px, transparent 1px)
                `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r dark:from-black to-transparent z-10"></div>
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l dark:from-black to-transparent z-10"></div>
          </div>
        </div>
      </section>
    </>
  );
}