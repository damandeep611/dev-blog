import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  // author: any;
  slug: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-xs lg:text-sm font-medium leading-relaxed mb-4">
        {excerpt}
      </p>
      <div className="text-xs mb-4 flex justify-start self-start font-bold">
        <DateComponent dateString={date} />
      </div>

      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 gap-y-8 md:gap-y-16 mb-32">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            // author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
