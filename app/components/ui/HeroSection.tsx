"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pfp from "../../../public/images/pfpmain.jpeg";
import { BsGithub, BsMailbox, BsTwitterX, BsYoutube } from "react-icons/bs";
import React from "react";
import SocialButton from "./SocialButton";
import { IntroHeadingAni } from "./IntroHeadingAni";

export default function HeroSection() {
  return (
    <section className=" flex flex-col items-center justify-center py-2 px-6 ">
      <div className="w-full max-w-4xl mx-auto">
        {/* Profile Header */}
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
              @AqDaman
            </motion.p>
          </div>
        </div>

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
          <p className="text-gray-900 text-xl mb-8 leading-relaxed">
            I'm Daman, a self-taught developer from India who creates web apps
            and occasionally indie games.
          </p>

          <div className="bg-gray-200/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-950">
              Currently Working On
            </h2>
            <p className="text-gray-900 mb-4">
              A Local AI Agent to work as a Research Assistant with locally
              installed LLM with:
            </p>
            <div className="flex flex-wrap gap-3 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-800 text-white">
                <span className="mr-2 text-purple-500">◆</span> Next.js
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-800 text-white">
                <span className="mr-2 text-blue-400">◆</span> Prisma
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-800 text-white">
                <span className="mr-2 text-yellow-400">◆</span> Langchain
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center md:items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/80 backdrop-blur-sm mb-6 border border-green-700"
          >
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="font-medium text-white">Contact</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex gap-4"
          >
            <SocialButton
              icon={<BsTwitterX size={20} />}
              href="https://twitter.com/AqDaman"
              ariaLabel="x"
            />
            <SocialButton
              icon={<BsGithub size={20} />}
              href="https://github.com/damandeep611"
              ariaLabel="Github"
            />
            <SocialButton
              icon={<BsYoutube size={20} />}
              href="https://youtube.com/@damandeep611"
              ariaLabel="Youtube"
            />
            <SocialButton
              icon={<BsMailbox size={20} />}
              href="mailto:contact@daman.dev"
              ariaLabel="Email"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}