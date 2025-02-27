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
    <div className="flex h-full items-center   rounded-lg shadow-sm overflow-hidden px-4 hover:shadow-md transition-shadow duration-200">
      <div className="h-32 w-32 overflow-hidden flex items-center">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold  mb-2 line-clamp-2">
          <Link
            href={`/posts/${slug}`}
            className="hover:text-indigo-600 transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-sm  mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <div className="text-xs  font-medium mt-auto">
          <DateComponent dateString={date} />
        </div>
        {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
      </div>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8  text-3xl font-bold ">Latest Articles</h2>
      <div className="flex flex-col gap-4 ">
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