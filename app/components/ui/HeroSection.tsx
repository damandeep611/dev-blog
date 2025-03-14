"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pfp from "../../../public/images/pfpmain.jpeg";
import { BsGithub, BsMailbox, BsTwitterX, BsYoutube } from "react-icons/bs";
import React from "react";
import SocialButton from "./SocialButton";
import { IntroHeadingAni } from "./IntroHeadingAni";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
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

  // Animation for the large KHAGWAL text
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Hover animation for navigation links
  const navLinkHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const socialLinks = [
    { name: "X", url: "https://twitter.com" },
    { name: "Github", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Youtube", url: "https://youtube.com" },
  ];
  return (
    <section className=" flex flex-col items-center justify-center py-2 px-6 ">
      <div className="w-full  mx-auto">
        {/* Profile Header */}
        <header className="flex justify-between items-start ">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-14 h-14 rounded-full overflow-hidden  border-gray-700 shadow-lg"
            >
              <Image
                src={pfp}
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-xl font-bold "
              >
                Daman
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className=" text-sm"
              >
                @devDaman
              </motion.p>
            </div>
          </div>
          {/* info in hero header and navigation */}
          <div className="flex text-sm  items-start justify-between gap-8 ">
            {/* Introduction text */}
            <div className="max-w-md ">
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textReveal}
              >
                Hey! I'm Daman deep.
              </motion.p>
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                className="mb-5"
              >
                I specialize in web applications.
              </motion.p>
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textReveal}
              >
                Crafting products grounded in insights.
              </motion.p>
              <motion.p
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textReveal}
              >
                My goal is to design usable & delightful products.
              </motion.p>
            </div>

            {/* Right section - Social links */}
            <div className="flex flex-col items-start md:items-end justify-center gap-4">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className="overflow-hidden"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm  hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </header>

        {/* Animated Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 flex justify-center md:justify-start"
        >
          <div className="relative overflow-hidden">
            <IntroHeadingAni
              text="I Build"
              rotatingWords={["Web apps", "Websites", "AI Agents"]}
            />
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <p className=" text-xl mb-8 leading-relaxed">
            I'm Daman, a self-taught developer from India who creates web apps
            and occasionally indie games.
          </p>
        </motion.div>
      </div>
    </section>
  );
}