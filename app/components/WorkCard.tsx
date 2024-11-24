"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/project-data";
import { WorkCardProps } from "@/lib/types";
import { Github, Globe } from "lucide-react";

export default function WorkCard({
  title,
  image,
  description,
  overlayHeading,
  overlayInfo,
  tags,
}: WorkCardProps) {
  return (
    <div className="h-[400px] relative rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform"
      />
      <div className="absolute inset-0   bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <div className="absolute top-0 left-0 right-0 p-6 translate-y-4 ">
          <h3 className="font-bold text-xl mb-2">{overlayHeading}</h3>
          <p className="text-gray-200 text-sm">{overlayInfo}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 bg-white text-black group-hover:translate-y-0 transition-transform duration-300 ">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>

          <div className="flex gap-1">
            {/* tags here */}
            {tags?.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 py-2">
            <Button>
              <Globe className="h-3 w-3 mr-1" /> Live Demo
            </Button>
            <Button variant={"outline"}>
              <Github className="h-3 w-3" />
              Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
