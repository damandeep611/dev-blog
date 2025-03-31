import React from "react";
import MoreStories from "../more-stories";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import TagFilter from "../tag-filter";
import HeroPost from "../hero-post";
import { ThemeSwitcher } from "../components/layout/ThemeSwitcher";

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
      <h1 className="text-4xl font-bold mb-8 flex items-center justify-between gap-2">
        Blog{" "}
        <span>
          <ThemeSwitcher />
        </span>
      </h1>

      {/* Hero Post */}
      {heroPost && (
        <div className="mb-16">
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