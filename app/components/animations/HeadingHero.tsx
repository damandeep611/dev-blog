"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";

const headingText = "Building Digital Products, Tools and Experience";
const techBadges = ["React", "Next.js", "TypeScript", "Node.js", "GraphQl"];

export default function HeadingHero() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight overflow-hidden">
        {headingText.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="inline-block mr-2"
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1 + charIndex * 0.03,
                  ease: "easeOut",
                }}
                className="inline-block"
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
