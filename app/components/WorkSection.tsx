"use client";

import { ArrowUpRight, PackageIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import workimg from "../../public/images/dashboarddemo.png";
import BlogImage from "../../public/images/blogimg.webp";

import React from "react";
import ExplorationCard from "./ui/ExplorationCard";
import GalleryCard from "./ui/GalleryCard";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

export default function WorkSection() {
  return (
    <div>
      {/* top row grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* my works grid box */}
        <Link href="/work">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg ">
            <div className="p-4 space-y-3">
              <span className="text-sm bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
                Works
              </span>
              <h2 className="text-2xl font-medium">Selected Works</h2>
              <p className="text-sm text-zinc-500">
                Some of the Projects that i have worked on and some personal
                build tools also.
              </p>
            </div>
            <div className="">
              <div className="p-4 ">
                <ArrowUpRight size={20} />
              </div>
              <div className="pt-4 flex items-center justify-center ">
                <Image
                  src={workimg}
                  alt="Works card image"
                  className="rounded-t-lg shadow-2xl"
                  width={450}
                  height={300}
                />
              </div>
            </div>
          </div>
        </Link>
        {/* top right grid */}
        <div className="space-y-8 ">
          {/* blog card */}
          <Link href="/blog">
            <div className=" relative flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden">
              <div className="p-4 flex flex-col items-start justify-between gap-8">
                <span className="text-sm  bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
                  Blog
                </span>
                <h3 className="text-2xl font-medium">
                  Tech , AI and Tutorials
                </h3>
                <p></p>
                <PackageIcon />
              </div>
              <Image
                src={BlogImage}
                alt="Blog image"
                width={200}
                height={200}
                className="rounded-l-xl  "
              />
            </div>
          </Link>
          {/* youtube card */}
          <div className="  flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <div className="p-4 flex flex-col items-start  justify-between gap-8">
              <span className="text-sm  bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
                YouTube
              </span>
              <h3 className="text-2xl font-medium">
                Sometime i also make tech videos
              </h3>
              <p className="text-zinc-500 ">
                Mainly ReactJs and React Native Based and some Ai automations
              </p>
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
        {/* left soon card */}
        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <div className="p-4 space-y-2">
            <span className="text-sm  bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
              In Progress
            </span>
            <h3 className="text-2xl font-medium">N8N Automations</h3>
            <p className="text-zinc-500">
              A minimal Ai agent with n8n automations integrations acting as
              personal assistant for specialized tasks.
            </p>
          </div>
          <div>
            <div className="p-4 ">
              <ArrowUpRight size={20} />
            </div>
            <div className="flex items-center justify-center ">
              <div className="bg-gray-200 w-4/5 h-40 rounded-t-xl"></div>
            </div>
          </div>
        </div>
        {/* Right Exploration card */}
        <div>
          <ExplorationCard />
        </div>
      </div>
      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 my-8">
        {/* react native grid box or design cards show */}
        <GalleryCard />
        {/* build x skill demo box */}
        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <div className="p-4 space-y-2">
            <span className="text-sm  bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
              Project
            </span>
            <h3 className="text-2xl font-medium">BuildxSkill</h3>
            <p className="text-zinc-500">
              Learning Management Tools to track time and skill learning
              progress with analytics and progress based charts and history
            </p>
          </div>
          <div>
            <div className="p-4 ">
              <ArrowUpRight size={20} />
            </div>
            <div className="flex items-center justify-center ">
              <div className="bg-gray-200 w-4/5 h-40 rounded-t-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
