"use client";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Home,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import ContactCard from "../ContactForm/ContactCard";

export default function DockSwipe() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // motion values for drag interactions
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dragX = useMotionValue(0);

  // to transform the x motino value to opacity for side nav labels
  const leftLabelOpacity = useTransform(x, [-50, -20, 0], [1, 0.8, 0]);
  const rightLabelOpacity = useTransform(x, [0, 20, 50], [0, 0.8, 1]);
  const upLabelOpacity = useTransform(y, [-50, -20, 0], [1, 0.8, 0]);

  // transform for scale on drag
  const scale = useTransform(
    x,
    [-100, -50, 0, 50, 100],
    [0.8, 0.9, 1, 0.9, 0.8]
  );

  // adding visual progress indicator
  const progressRadius = useTransform(
    x,
    [-100, -50, 0, 50, 100],
    [100, 50, 0, 50, 100]
  );

  // state variables
  const [isDragging, setIsDragging] = useState(false);
  const [showonMobile, setShowOnMobile] = useState(false);
  const [thresholdCrossed, setThresholdCrossed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);

  // timeout ref for touch interactions
  const touchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //check to see on mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setShowOnMobile(window.innerWidth < 1900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // handle navigation based on drag direction
  const handleDragEnd = () => {
    setIsDragging(false);
    const xValue = x.get();
    const yValue = y.get();

    if (isHomePage) {
      if (xValue < -50) {
        router.push("/about");
      } else if (xValue > 50) {
        router.push("/blog");
      } else if (yValue < -50) {
        //show contact card on upward swipe
        setShowContactCard(true);
      }
    }
    //reset position
    x.set(0);
    y.set(0);
  };

  // handle drag motion
  const handleDrag = (_: any, info: any) => {
    dragX.set(info.offset.x);

    // Threshold feedback
    if (Math.abs(info.offset.x) > 45 && !thresholdCrossed) {
      setThresholdCrossed(true);
      // Vibrate if supported
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
    } else if (Math.abs(info.offset.x) <= 45) {
      setThresholdCrossed(false);
    }
  };

  // handle click for non - home pages
  const handleClick = () => {
    if (!isHomePage) {
      router.push("/");
    }
  };

  // handle touch start
  const handleTouchStart = () => {
    setIsTouching(true);
    //clear any existing timeout
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    //set a timeout to hide the touch instructions after 3 seconds
    touchTimeoutRef.current = setTimeout(() => {
      setIsTouching(false);
    }, 3000);
  };

  // handle touch end
  const handleTouchEnd = () => {
    //clear the timeout
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    //hide touch instructions after a short delay
    touchTimeoutRef.current = setTimeout(() => {
      setIsTouching(false);
    }, 500);
  };

  // close contact card
  const closeContactCard = () => {
    setShowContactCard(false);
  };
  //
  if (!showonMobile) return null;
  return (
    <>
      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
        <div className="relative flex items-center justify-center pointer-events-auto">
          {/* to show nav label when hover over home icon  */}
          <AnimatePresence>
            {(isHovering || isTouching) &&
              isHomePage &&
              !isDragging &&
              !showContactCard && (
                <>
                  <motion.div
                    className="absolute -top-16 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Swipe up for Contact
                  </motion.div>
                  <motion.div
                    className=" absolute right-20 top-1 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 10 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Swipe left for about
                  </motion.div>
                  <motion.div
                    className="absolute left-20 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    Swipe right for Blog
                  </motion.div>
                </>
              )}
          </AnimatePresence>
          {/* left label route hehe (about) */}
          <AnimatePresence>
            {isDragging && isHomePage && x.get() < -10 && (
              <motion.div
                className="absolute right-16 text-sm font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md"
                style={{ opacity: leftLabelOpacity }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                About
              </motion.div>
            )}
          </AnimatePresence>
          {/* up label contact to show during drag */}
          <AnimatePresence>
            {isDragging && isHomePage && y.get() < -10 && (
              <motion.div
                className="absolute -top-12 text-sm font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md"
                style={{ opacity: upLabelOpacity }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Contact
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg  bg-primary-foreground "
            whileTap={{ scale: 0.95 }}
            drag={isHomePage ? true : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            style={{ x, y, scale }}
            onDrag={handleDrag}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            animate={{
              boxShadow: [
                "0 4px 6px rgba(0, 0, 0, 0.1)",
                "0 4px 15px rgba(0, 0, 0, 0.2)",
                "0 4px 6px rgba(0, 0, 0, 0.1)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            {isHomePage ? (
              <>
                <Home className="w-6 h-6" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gray-500"
                  style={{
                    clipPath: `circle(${progressRadius}% at center)`,
                    opacity: 0.5,
                  }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.3, 0.7] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </>
            ) : (
              <ArrowLeft className="w-6 h-6" />
            )}
          </motion.button>
          {/* right label (blog) */}
          <AnimatePresence>
            {isDragging && isHomePage && x.get() > 10 && (
              <motion.div
                className="absolute left-16 text-sm font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md"
                style={{ opacity: rightLabelOpacity }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                Blog
              </motion.div>
            )}
          </AnimatePresence>
          {/* direction indicator for home page animations */}
          {isHomePage && !showContactCard && (
            <>
              <motion.div
                className="absolute -left-8 text-primary/50"
                animate={{ x: [-2, 0, -2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.div>
              <motion.div
                className="absolute -right-8 text-primary/50"
                animate={{ x: [2, 0, 2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
              <motion.div
                className="absolute -top-8 text-primary/50"
                animate={{ y: [-2, 0, -2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronUp className="w-5 h-5" />
              </motion.div>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showContactCard && <ContactCard onClose={closeContactCard} />}
      </AnimatePresence>
    </>
  );
}
