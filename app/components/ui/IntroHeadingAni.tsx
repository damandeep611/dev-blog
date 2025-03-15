"use client"
import { cn } from '@/lib/utils';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
interface AnimatedTextProps {
  /** The main text to display with pull-up animation */
  text: string;
  /** Array of words to rotate through at the end */
  rotatingWords?: string[];
  /** Delay between each word animation in seconds */
  animationDelay?: number;
  /** Interval between rotating words in milliseconds */
  rotationInterval?: number;
  /** Additional classes to apply to the text */
  className?: string;
}
export function IntroHeadingAni({
  text,
  rotatingWords = ["Apps", "Websites", "Ai Tools"],
  animationDelay = 0.1,
  rotationInterval = 3000,
  className = '',
}: AnimatedTextProps) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Split the main text into words
  const mainWords = text.split(' ');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, rotationInterval);
    
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [rotatingWords.length, rotationInterval]);

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * animationDelay,
      },
    }),
  };

  return (
    <div className="flex flex-wrap justify-start items-center">
      {/* Animate main text words */}
      {mainWords.map((word, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(
            "text-3xl text-center sm:text-2xl font-bold tracking-tighter md:text-3xl md:leading-[4rem]",
            "pr-2", // class to separate words
            className
          )}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.div>
      ))}

      {/* Container for rotating word */}
      <div className="h-[4rem] overflow-hidden relative flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={cn(
              "text-xl text-center sm:text-2xl font-bold tracking-tighter md:text-3xl md:leading-[4rem]",
              className
            )}
          >
            {rotatingWords[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}