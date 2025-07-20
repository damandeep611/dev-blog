"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import ContactCard from "../ContactForm/ContactCard";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function NavPill() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "Blog", href: "/blog" },

    { title: "About", href: "/about" },
  ];

  return (
    <>
      <div className="  fixed bottom-6 left-0 right-0 z-50 sm:flex justify-center md:hidden">
        <motion.div
          className="relative flex w-[90%] max-w-lg flex-col items-center justify-between overflow-hidden rounded-full bg-white/90 backdrop-blur-sm border border-gray-300"
          animate={{
            width: isOpen ? "95%" : "90%",
            borderRadius: "2rem",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Menu Content - Inside the pill */}
          <motion.div
            className="w-full overflow-hidden"
            animate={{
              height: isOpen ? "auto" : "0px",
              opacity: isOpen ? 1 : 0,
              marginBottom: isOpen ? "0.5rem" : "0rem",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="p-6 pt-8">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      y: isOpen ? 0 : 10,
                    }}
                    transition={{
                      delay: isOpen ? index * 0.1 : 0,
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block text-xl font-medium text-gray-900 transition-colors hover:text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Navigation Bar */}
          <div className="flex w-full items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <AiOutlineHome />
            </Link>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-900" />
            </button>

            <ThemeSwitcher />
          </div>
        </motion.div>
      </div>
    </>
  );
}
