"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Header from "./Header";

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

  return (
    <>
      <section className=" flex flex-col items-center justify-center py-2 px-4 ">
        <div className="w-full  mx-auto">
          {/* Profile Header */}
          <Header />
          <div className=" w-full text-md py-8  ">
            <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* column first */}
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl text-zinc-400">
                  Hi there. I'm{" "}
                  <span className="font-semibold text-zinc-950 dark:text-white">
                    daman
                  </span>
                </h2>
                <div className=" hidden md:flex flex-col  gap-2">
                  <p className="text-zinc-400 font-semibold">Socials</p>
                  <div className="flex flex-col text-sm">
                    <span>LinkedIn</span>
                    <span>Instagram</span>
                    <span>Twitter</span>
                  </div>
                </div>
              </div>
              {/* column 2nd */}
              <div className="flex flex-col gap-4">
                <div>
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textReveal}
                    className="text-2xl  relative "
                  >
                    Designer / Developer
                    <motion.div
                      className="absolute -top-4 right-32 rotate-12   bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold  overflow-hidden"
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
                  <span className="text-zinc-400">Based in India</span>
                </div>
                <div className="  hidden md:flex flex-col  gap-2">
                  <p className="text-zinc-400 font-semibold">Skills</p>
                  <div className="flex flex-col text-sm">
                    <span>Web Design</span>
                    <span>Mobile Apps</span>
                    <span>Twitter</span>
                  </div>
                </div>
              </div>
              {/* 3rd column */}
              <div className="text-2xl text-zinc-400">
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  Tweaking products with{" "}
                  <span className="text-zinc-950 dark:text-white">AI</span>,
                  light and focused.
                </motion.p>
                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                >
                  I Try to Build products that don’t overcomplicate things
                  Building{" "}
                  <span className="text-zinc-950 dark:text-white">
                    --usable, practical
                  </span>{" "}
                  and Fast Apps.
                </motion.p>
              </div>
              {/* mobile only column for socials and services links */}
              <div className="  flex md:hidden items-center justify-between py-4 px-4">
                <div className=" flex flex-col  gap-2">
                  <p className="text-zinc-400 font-semibold">Socials</p>
                  <div className="flex flex-col text-sm">
                    <span>LinkedIn</span>
                    <span>Instagram</span>
                    <span>Twitter</span>
                  </div>
                </div>
                <div className="flex flex-col  gap-2">
                  <p className="text-zinc-400 font-semibold">Skills</p>
                  <div className="flex flex-col text-sm">
                    <span>Web Design</span>
                    <span>Mobile Apps</span>
                    <span>Twitter</span>
                  </div>
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