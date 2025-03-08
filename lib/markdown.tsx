import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <Image src={asset.url} width={500} height={300} alt={asset.description} />
    );
  }

  return null;
}

// Function to slugify text for IDs
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen

export function Markdown({ content }: { content: Content }) {
  // Extract text content from a rich text node
  const getTextFromNode = (node: any): string => {
    if (!node || !node.content) return "";

    return node.content
      .filter((content: any) => content.nodeType === "text")
      .map((content: any) => content.value)
      .join("");
  };

  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.HEADING_1]: (node, children) => {
        const text = getTextFromNode(node);
        const id = slugify(text);
        return <h1 id={id}>{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        const text = getTextFromNode(node);
        const id = slugify(text);
        return <h2 id={id}>{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const text = getTextFromNode(node);
        const id = slugify(text);
        return <h3 id={id}>{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        const text = getTextFromNode(node);
        const id = slugify(text);
        return <h4 id={id}>{children}</h4>;
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        const text = getTextFromNode(node);
        const id = slugify(text);
        return <h5 id={id}>{children}</h5>;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        const text = getTextFromNode(node);
        const id = slugify(text);
        return <h6 id={id}>{children}</h6>;
      },
    },
  });
}
