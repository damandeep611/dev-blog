"use client"
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"
import { ArrowUpRight } from "lucide-react"

const imagesTop = [
  "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
  "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
  "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
]

const imagesBottom = [
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
  "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&h=100&w=133",
]

export default function ExplorationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative  max-w-2xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-xl  overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-24 p-4 ">
        <span className="text-sm  bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
          Tool library
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-4">
        {/* Top Marquee - Moving Right */}
        <div className="transform rotate-8 origin-center">
          <Marquee speed={30} gradient={false} direction="right">
            {imagesTop.map((src, index) => (
              <div key={`top-${index}`} className="mx-1">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Exploration ${index + 1}`}
                  className="w-32 h-24 object-cover rounded-s shadow-md"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Marquee - Moving Left */}
        <div className="transform -rotate-8 origin-center">
          <Marquee speed={25} gradient={false} direction="left">
            {imagesBottom.map((src, index) => (
              <div key={`bottom-${index}`} className="mx-2">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Exploration ${index + 5}`}
                  className="w-32 h-24 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
}
