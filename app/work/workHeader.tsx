import Image from "next/image";
import React from "react";
import workimg from "@/public/icons/workisometric.png";
import { ArrowDown } from "lucide-react";

export default function WorkHeader() {
  return (
    <div className=" w-full mx-auto border-b border-zinc-400">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tighter p-4 md:p-12">
          Selected <br />
          <span className="ml-12 ">works</span>
        </h1>
        <div>
          <Image src={workimg} alt="Work image icon" width={300} height={150} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <h1 className=" hidden md:flex text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter p-12">
          <ArrowDown size={50} className="text-zinc-500 " />
        </h1>
        <div className="max-w-md text-zinc-500 py-8">
          <p className="text-sm">
            Work spanning frontend React development and backend architecture,
            with occasional ventures into Web design and React Native. Projects
            that emphasize clean architecture, fast performance with security
            focused , and interfaces people find intuitive to use.
          </p>
        </div>
      </div>
    </div>
  );
}
