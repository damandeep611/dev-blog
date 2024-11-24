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
    <section className="container mx-auto my-6 p-2  hover:bg-gray-600 hover:rounded-xl">
      <div className=" flex flex-col lg:flex-row gap-2 items-center justify-center   ">
        <div className="lg:w-1/2 flex items-center justify-center">
          <CoverImage title={title} slug={slug} url={coverImage.url} />
        </div>
        <div className="flex flex-col  lg:w-1/2">
          <div className="flex flex-col gap-4">
            <h3 className=" text-xl font-bold lg:text-3xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div>
              <p className="text-sm lg:text-lg font-medium leading-relaxed ">
                {excerpt}
              </p>
            </div>
            <div className=" md:mb-0 text-xs lg:text-sm text-gray-500">
              <DateComponent dateString={date} />
            </div>
          </div>
          <div className="my-4">
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
      {morePosts?.length > 0 && <MoreStories morePosts={morePosts} />}
    </div>
  );
}
