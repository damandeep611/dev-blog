"use client";

import Image from "next/image";

interface ContentfulImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  [key: string]: any; // For other props that might be passed
}



export default function ContentfulImage(props: ContentfulImageProps) {
  return <Image {...props} />;
}
