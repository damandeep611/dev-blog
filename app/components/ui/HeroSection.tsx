"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imageOne from "../../../public/images/programmer.jpeg";
import imageTwo from "../../../public/images/work.jpeg";
import imageThree from "../../../public/images/blogpage.png";

import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const imageUrls = [imageOne, imageTwo, imageThree];

const ScrollColumn = ({ direction }: { direction: "up" | "down" }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: `${height}px`, overflow: "hidden" }}>
      <motion.div
        className="flex flex-col gap-4"
        initial={{ y: direction === "up" ? 0 : -height }}
        animate={{ y: direction === "down" ? -height : 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...imageUrls, ...imageUrls].map((url, index) => (
          <div key={index} className="w-full h-[200px] relative">
            <Image
              src={url}
              alt={`Scrolling image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <section className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 order-2 lg:order-1 overflow-hidden">
          <div className="grid grid-cols-3 gap-4 h-screen">
            <div className="overflow-hidden">
              <ScrollColumn direction="up" />
            </div>
            <div className="overflow-hidden">
              <ScrollColumn direction="down" />
            </div>
            <div className="overflow-hidden">
              <ScrollColumn direction="up" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2  p-8 flex flex-col order-1 lg:order-2 justify-center bg-white text-black">
          {/* header */}
          <div className=" py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/images/pfpdark.jpeg"
                  alt=""
                  width={60}
                  height={70}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-sm lg:text-base ">Daman</span>
                <span className="text-gray-500 text-xs lg:text-sm">
                  Full stack Developer
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 ">
              <div className="flex justify-center items-center gap-2 font-light bg-green-100 p-1 px-4 rounded-xl">
                <span>
                  <MdEmail />
                </span>
                <a
                  href="mailto:work@devdaman.com"
                  className="text-xs lg:text-sm"
                >
                  work@devdaman.com
                </a>
              </div>
              <div className="hidden sm:block">
                <ul className="flex items-center justify-center gap-2">
                  <li>
                    <Link href="https://twitter.com">
                      <FaXTwitter className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com">
                      <FaInstagram className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com">
                      <FaLinkedin className="w-5 h-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mb-4">
            <span className="text-sm font-semibold capitalize">
              Hi, I'm Daman
            </span>
          </div>
          <h1 className="text-5xl mb-6 capitalize">Full Stack Developer</h1>
          <p className="text-xl mb-6 capitalize">
            Specialize in Reactjs, MERN Stack
          </p>
          <button className="bg-black text-white px-6 py-2 rounded w-fit">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
