import Link from "next/link";
import { draftMode } from "next/headers";
import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";
import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { calculateReadingTime } from "@/lib/reading-time";
import { ThemeSwitcher } from "@/app/components/layout/ThemeSwitcher";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import TableOfContentsClient from "../TableOfContentClient";
import RichTextArticle from "../RichTextArticle";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  if (!allPosts) {
    return [];
  }

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  // Calculate reading time from post content
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="min-h-screen  mx-auto  transition-colors duration-300 ">
      <div className="flex items-center justify-between py-2 px-4">
        <Link
          href="/blog"
          className="inline-flex text-sm  items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors "
        >
          {" "}
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all Articles
        </Link>
        <ThemeSwitcher />
      </div>

      <header className="relative rounded-3xl overflow-hidden mb-16">
        {/* article header with bg img */}
        <div className="absolute inset-0 z-0">
          <CoverImage title={post.title} url={post.coverImage.url} />
          {/* overlay over cover header image */}
          <div className=" absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 dark:from-black/80 dark:to-black/60" />
        </div>
        <div className="relative z-10 p-8 md:p-16 text-white ">
          <div>
            <div className="mb-4 md:mb-0">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block px-4 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm text-white mb-6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <Date dateString={post.date} />
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readingTime}
            </div>
          </div>

          {/* Author and meta information card */}
          <div className="flex items-center gap-3 mt-8">
            {post.author && (
              <div className="flex items-center mr-6">
                <Avatar name={post.author.name} picture={post.author.picture} />
                <div className="ml-3">
                  <p className="font-medium text-white">{post.author.name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-col  lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Table of Contents - Dynamic from content headings */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="pr-4 sticky top-6 ">
            <TableOfContentsClient content={post.content} />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 relative">
          <article className="rounded-lg shadow-lg p-6 md:p-10 mb-12">
            <RichTextArticle content={post.content} />
          </article>
        </main>
      </div>
    </div>
  );
}