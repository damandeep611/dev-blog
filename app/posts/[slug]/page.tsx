import Link from "next/link";
import { draftMode } from "next/headers";
import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";
import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

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

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-5 py-8">
        {/* Header */}
        <h2 className="mb-10 mt-4 text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
          <Link href="/" className="hover:underline">
            Notes
          </Link>
        </h2>

        <article>
          {/* Title */}
          <h1 className="mb-8 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>

          {/* Author - Desktop */}
          <div className="hidden md:mb-8 md:block">
            {post.author && (
              <div className="flex items-center">
                <Avatar name={post.author.name} picture={post.author.picture} />
                <span className="ml-2 text-gray-700">{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Cover Image */}
          <div className="mb-8 sm:mx-0 md:mb-12 rounded-lg overflow-hidden shadow-md">
            <CoverImage title={post.title} url={post.coverImage.url} />
          </div>

          {/* Author - Mobile */}
          <div className="mb-6 block md:hidden">
            {post.author && (
              <div className="flex items-center">
                <Avatar name={post.author.name} picture={post.author.picture} />
                <span className="ml-2 text-gray-700">{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Date */}
          <div className="mb-8 text-gray-600">
            <Date dateString={post.date} />
          </div>

          {/* Content */}
          <div className="mx-auto max-w-2xl">
            <div className="prose lg:prose-xl prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline">
              <Markdown content={post.content} />
            </div>
          </div>
        </article>

        {/* Divider */}
        <hr className="border-gray-200 mt-16 mb-16" />

        {/* More Stories */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">More Articles</h2>
        <MoreStories morePosts={morePosts} />
      </div>
    </div>
  );
}