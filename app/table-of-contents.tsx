import { BLOCKS } from "@contentful/rich-text-types";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headings from Contentful Rich Text content
 */
export function extractTOCFromRichText(document: any): TOCItem[] {
  const toc: TOCItem[] = [];

  // Function to slugify text for IDs
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special chars
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen

  // Function to recursively traverse the rich text document
  const traverse = (node: any) => {
    // Check if this is a heading node
    if (
      node.nodeType === BLOCKS.HEADING_1 ||
      node.nodeType === BLOCKS.HEADING_2 ||
      node.nodeType === BLOCKS.HEADING_3 ||
      node.nodeType === BLOCKS.HEADING_4 ||
      node.nodeType === BLOCKS.HEADING_5 ||
      node.nodeType === BLOCKS.HEADING_6
    ) {
      // Extract heading level from node type (e.g., "heading-2" -> 2)
      const level = parseInt(node.nodeType.split("-")[1]);

      // Extract text content from the heading
      const text = node.content
        .filter((content: any) => content.nodeType === "text")
        .map((content: any) => content.value)
        .join("");

      const id = slugify(text);

      toc.push({ id, text, level });
    }

    // Recursively process child nodes
    if (node.content) {
      node.content.forEach(traverse);
    }
  };

  // Start traversal from the document root
  if (document && document.content) {
    document.content.forEach(traverse);
  }

  return toc;
}

export default function TableOfContents({ document }: { document: any }) {
  const toc = extractTOCFromRichText(document);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:block lg:fixed lg:right-8 lg:top-40 lg:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 max-h-[calc(100vh-200px)] overflow-y-auto">
      <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
        Table of Contents
      </h3>
      <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-2 text-sm">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              item.level === 2
                ? "text-indigo-600 dark:text-indigo-400 font-medium"
                : "text-gray-600 dark:text-gray-400 ml-${(item.level - 2) * 2}"
            }`}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}
