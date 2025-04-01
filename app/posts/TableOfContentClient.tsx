"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface HybridTableOfContentsProps {
  content: {
    json: any;
    links?: {
      assets?: {
        block?: any[];
      };
    };
  };
}

export default function TableOfContentClient({
  content,
}: HybridTableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const tocRef = useRef<HTMLDivElement>(null);

  // Function to slugify text for IDs
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special chars
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen

  useEffect(() => {
    // Extract headings from Contentful Rich Text JSON
    if (content?.json) {
      const extractedHeadings: TOCItem[] = [];
      
      // Recursive function to traverse JSON and find headings
      const findHeadings = (node: any) => {
        if (node.nodeType === 'heading-1' || 
            node.nodeType === 'heading-2' || 
            node.nodeType === 'heading-3') {
          
          // Extract level from nodeType
          const level = parseInt(node.nodeType.split('-')[1]);
          
          // Extract text from content nodes
          let text = '';
          if (node.content) {
            node.content.forEach((content: any) => {
              if (content.nodeType === 'text') {
                text += content.value;
              }
            });
          }
          
          if (text) {
            const id = slugify(text);
            extractedHeadings.push({ id, text, level });
          }
        }
        
        // Process children recursively
        if (node.content) {
          node.content.forEach(findHeadings);
        }
      };
      
      // Start from the root content
      if (content.json.content) {
        content.json.content.forEach(findHeadings);
      }
      
      setHeadings(extractedHeadings);
    }
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    // Set up intersection observer to track which section is active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0% -80% 0%",
        threshold: 0.1,
      }
    );

    // We need to wait a bit for the content to be rendered with proper ids
    setTimeout(() => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 500);

    // Animation for ToC
    if (tocRef.current) {
      gsap.fromTo(
        tocRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.5 }
      );
    }

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the heading
      element.scrollIntoView({ behavior: "smooth" });

      // Highlight the heading briefly
      gsap.fromTo(
        element,
        { color: "#F87171" },
        { color: "currentColor", duration: 1, delay: 0.5, ease: "power2.out" }
      );
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div
      ref={tocRef}
      className="hidden lg:block rounded-lg shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <div className="text-lg font-medium mb-4">Table of Contents</div>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`border-l-2 pl-3 py-1 transition-all duration-200 ${
                activeId === heading.id
                  ? "border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium"
                  : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className="block text-left w-full"
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}