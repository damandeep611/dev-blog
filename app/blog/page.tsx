import React from "react";
import MoreStories from "../more-stories";
import CoverImage from "../cover-image";
import Link from "next/link";
import DateComponent from "../date";
import Avatar from "../avatar";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section className="w-full max-w-4xl mb-16 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-1/2">
          <div className="h-full">
            <CoverImage title={title} slug={slug} url={coverImage.url} />
          </div>
        </div>
        <div className="p-6 lg:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              <Link
                href={`/posts/${slug}`}
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {title}
              </Link>
            </h3>
            <p className="text-gray-700 text-base lg:text-lg mb-4 line-clamp-3">
              {excerpt}
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {author && (
                  <Avatar name={author.name} picture={author.picture} />
                )}
                <span className="ml-2 text-sm text-gray-600">
                  {author.name}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <DateComponent dateString={date} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blogger</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover interesting articles and stay updated with the latest news
          </p>
        </header>

        <div className="flex flex-col items-center">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}

          <h2 className="text-2xl font-bold text-gray-900 mb-8 self-start pl-4">
            Latest Posts
          </h2>

          {morePosts?.length > 0 && <MoreStories morePosts={morePosts} />}
        </div>
      </div>
    </div>
  );
}