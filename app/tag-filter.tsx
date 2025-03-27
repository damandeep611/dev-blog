"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface TagFilterProps {
  tags: string[];
  selectedTag?: string;
}

export default function TagFilter({ tags, selectedTag }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? "" : tag;
    router.push(`/blog?${createQueryString("tag", newTag)}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => handleTagClick("")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${
            !selectedTag
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
      >
        All Posts
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedTag === tag
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
