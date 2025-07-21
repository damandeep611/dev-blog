"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pfp from "../../../public/images/pfp.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactCard from "../ContactForm/ContactCard";
import { ThemeSwitcher } from "../layout/ThemeSwitcher";

export default function Header() {
  const [showContactCard, setShowContactCard] = useState(false);

  const closeContactCard = () => {
    setShowContactCard(false);
  };

  const navLinkHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const socialLinks = [
    { name: "Github", url: "https://github.com/damandeep611" },
  ];
  const navMenu = [
    { title: "Selected Works", url: "/work" },
    { title: "Blog", url: "/blog" },
    { title: "About", url: "/about" },
  ];
  return (
    <>
      <header className="flex justify-between items-center mb-8 ">
        <div className="flex  items-center justify-center gap-2 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-14 h-14 rounded-full overflow-hidden   shadow-lg"
          >
            <Image src={pfp} alt="Profile picture" className="" priority />
          </motion.div>
          <div className="text-center md:text-left text-zinc-700 dark:text-zinc-400">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-xl font-bold flex  "
            >
              Daman{" "}
              <div className="hidden md:flex">
                <ThemeSwitcher />
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=" text-sm"
            >
              @devdaman
            </motion.p>
          </div>
        </div>
        {/* navigation menu */}
        <div className="hidden md:flex items-center justify-between gap-4   ">
          {navMenu.map((link) => (
            <motion.div variants={navLinkHover} className="" key={link.url}>
              <Link
                href={link.url}
                className="uppercase text-sm dark:text-zinc-400 text-zinc-600"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Right section - Social links */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              className=" hidden md:flex overflow-hidden"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  gap-2 text-sm dark:text-zinc-400  hover:text-gray-300 transition-colors"
              >
                {link.name}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
          <div>
            <button
              onClick={() => setShowContactCard(true)}
              className="  flex items-center justify-between gap-2  bg-zinc-800 text-white uppercase text-sm p-2 px-4 rounded-full"
            >
              work with me
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {showContactCard && <ContactCard onClose={closeContactCard} />}
      </AnimatePresence>
    </>
  );
}
