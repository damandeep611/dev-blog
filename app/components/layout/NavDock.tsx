"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function NavDock() {
  const [clicked, setClicked] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="fixed top-8 z-50 left-1/2 md:left-1/4 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-black rounded-full p-1 flex items-center gap-1 shadow-lg">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link key={index} href={item.href} className="relative">
            <motion.div
              className={`px-4 py-2 rounded-full relative cursor-pointer transition-colors duration-300
                ${isActive ? "text-white" : "text-black hover:text-white"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setClicked(item.name)}
            >
              {/* Background color pill */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.8,
                }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Text */}
              <span className="relative z-10 text-base font-light leading-[1.15] font-sans">
                {item.name}
              </span>

              {/* Click effect */}
              <AnimatePresence>
                {clicked === item.name && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    onAnimationComplete={() => setClicked(null)}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}