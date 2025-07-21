import React from "react";
import MoreStories from "../more-stories";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import TagFilter from "../tag-filter";
import HeroPost from "../hero-post";
import { ThemeSwitcher } from "../components/layout/ThemeSwitcher";
import { ArrowDown, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import blogimg from "@/public/icons/laptopisometric.png";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);

  // Extract unique tags from all posts
  const allTags = Array.from(
    new Set(allPosts.filter((post) => post.tags).flatMap((post) => post.tags))
  );

  // Filter posts based on selected tag
  const filteredPosts = searchParams.tag
    ? allPosts.filter((post) => post.tags?.includes(searchParams.tag))
    : allPosts;

  const heroPost = filteredPosts[0];
  const morePosts = filteredPosts.slice(1);

  return (
    <div className="container mx-auto lg:px-4 py-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1 text-xs text-neutral-400"
        >
          <ArrowLeft className="h-5" /> back to home
        </Link>
        <ThemeSwitcher />
      </div>

      <div className=" w-full mx-auto border-b border-zinc-400">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tighter p-4 md:p-12">
            Blog <br />
            <span className="ml-12 text-4xl md:text-5xl lg:text-6xl ">
              articles
            </span>
          </h1>
          <div>
            <Image
              src={blogimg}
              alt="Work image icon"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h1 className=" hidden md:flex text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter p-12">
            <ArrowDown size={50} className="text-zinc-500 " />
          </h1>
          <div className="max-w-md text-zinc-500 px-4 py-8">
            <p className="text-sm">
              Some useful React design patterns , JavaScript weirdness and node
              js backends , AI stuff I'm trying out, and cool repos I stumble
              across
            </p>
          </div>
        </div>
      </div>

      {/* Hero Post */}
      {heroPost && (
        <div className="mb-16 m-2">
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            tags={heroPost.tags}
          />
        </div>
      )}

      {/* Tag Filter */}
      <TagFilter tags={allTags} selectedTag={searchParams.tag} />

      {/* More Posts */}
      {morePosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">More Posts</h2>
          <MoreStories posts={morePosts} />
        </div>
      )}
    </div>
  );
}