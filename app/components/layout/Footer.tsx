"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, icons, PackageIcon } from "lucide-react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  const socialLinks = [
    { icon: BsTwitter, url: "https://twitter.com" },
    { icon: BsInstagram, url: "https://instagram.com" },
    { icon: BsYoutube, url: "https://youtube.com" },
  ];

  return (
    <footer className="dark:bg-black dark:text-white py-16 px-6 md:px-4 lg:px-6 ">
      {/* Left section */}
      <div className="text-center py-20">
        <motion.a
          href="mailto:damandeep611@gmail.com"
          className="text-2xl md:text-3xl block hover:text-gray-300 transition-colors"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Get In Touch
        </motion.a>
      </div>
      <div className="flex items-center justify-between py-20 sm:py-4">
        {/*  - Logo */}
        <div className="flex flex-col items-center justify-center">
          <PackageIcon />
          <span className="text-sm md:text-lg font-bold text-zinc-400">
            devDaman © 2021
          </span>
        </div>

        {/* Right section - Social links */}
        <div className="flex  items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.div
              key={link.url}
              className="overflow-hidden"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-xl hover:text-gray-300 transition-colors"
              >
                <link.icon />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}

