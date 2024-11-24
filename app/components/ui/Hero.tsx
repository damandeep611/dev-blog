"use client";
import { motion } from "framer-motion";
import pfp from "../../../public/images/pfpdark.jpeg";
import Image from "next/image";
import HeadingHero from "../animations/HeadingHero";

export default function Hero() {
  return (
    <div className="  relative overflow-hidden">
      {/* pattern background hero section */}
      <div className="absolute inset-0 h-full w-full opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="coding-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <text x="0" y="10" fill="white" fontSize="10">
                10110101
              </text>
              <text x="50" y="20" fill="white" fontSize="10">
                01001011
              </text>
              <text x="10" y="40" fill="white" fontSize="20">
                {"{"}'{"}"}
              </text>
              <text x="70" y="70" fill="white" fontSize="20">
                []
              </text>
              <text x="30" y="60" fill="white" fontSize="15">
                &lt;/&gt;
              </text>
              <text x="80" y="30" fill="white" fontSize="15">
                #
              </text>
              <text x="0" y="80" fill="white" fontSize="15">
                ;
              </text>
              <text x="60" y="90" fill="white" fontSize="15">
                =
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coding-pattern)" />
        </svg>
      </div>
      {/* pattern ends here */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative mb-8"
        >
          <Image
            src={pfp}
            alt="profile"
            width={60}
            height={70}
            className="rounded-full"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl mb-6"
        >
          Hi, I'm Daman <span className="animate-wave inline-block">✌️</span>
        </motion.h2>
        <HeadingHero />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mb-8 text-gray-400"
        >
          Blockhain smart contract developer, React js full stack developer.
          Specialize in smart contract development. Located in India
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
        >
          Connect
        </motion.button>
      </div>
      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(20deg);
          }
        }
        .animate-wave {
          animation: wave 2s infinite;
        }
      `}</style>
    </div>
  );
}
