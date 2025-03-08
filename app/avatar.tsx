import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: any;
}) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-100 dark:ring-indigo-900">
        <ContentfulImage
          alt={name}
          className="object-cover h-full w-full"
          height={32}
          width={32}
          src={picture.url}
        />
      </div>
    </div>
  );
}
