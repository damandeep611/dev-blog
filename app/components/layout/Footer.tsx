"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "X", url: "https://twitter.com" },
    { name: "Behance", url: "https://behance.net" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Medium", url: "https://medium.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <footer className="dark:bg-black dark:text-white py-16 px-6 md:px-4 lg:px-6 border-t border-gray-200 ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left section */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Contact <br />
          </h2>
          <motion.a
            href="mailto:damandeep611@gmail.com"
            className="text-2xl md:text-3xl block hover:text-gray-300 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            hey@devdaman.com
          </motion.a>
        </div>

        {/* Middle section - Logo */}
        <div className="flex items-center justify-center">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <LogoIcon />
          </motion.div>
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
                className="flex items-center gap-2 text-2xl md:text-3xl hover:text-gray-300 transition-colors"
              >
                {link.name}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16">
        <p className="text-sm">© 2025 devdaman</p>
      </div>
    </footer>
  );
}

// Custom logo component
function LogoIcon() {
  return (
    <div className="relative w-16 h-16 bg-gray-600 rounded-sm">
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-white"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3 left-3 w-3 h-3 bg-white"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}
