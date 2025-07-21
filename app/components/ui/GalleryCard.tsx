"use client"

import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function GalleryCard() {
  return (
     <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <div className="p-4 space-y-2">
            <span className="text-sm  bg-zinc-200 dark:bg-zinc-700 py-1 px-2 rounded-md">
              Mobile Apps
            </span>
            <h3 className="text-2xl font-medium">React Native</h3>
            <p className="text-zinc-500">
              Some of the experimental and work related React Native mobile application that i've build
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
  )
}
