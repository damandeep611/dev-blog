import React from "react";
import MoreStories from "../more-stories";
import CoverImage from "../cover-image";
import Link from "next/link";
import DateComponent from "../date";
import Avatar from "../avatar";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import Hero from "../components/ui/Hero";

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
    <section className="container mx-auto max-w-7xl">
      <div className=" flex items-center justify-center gap-4  ">
        <div className="max-w-xl ">
          <CoverImage title={title} slug={slug} url={coverImage.url} />
        </div>
        <div className="flex flex-col">
          <div>
            <h3 className="mb-4 text-xl lg:text-xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <DateComponent dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.picture} />}
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
    <div className="container mx-auto px-2 lg:px-5 flex flex-col items-center ">
      <Hero />
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
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
