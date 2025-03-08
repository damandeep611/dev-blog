interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headings from markdown content and generate a table of contents
 * @param markdown The markdown content
 * @returns Array of TOC items with id, text and heading level
 */
export function extractTableOfContents(markdown: string): TOCItem[] {
  // Regular expression to match markdown headings (## Heading)
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special chars
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen

  const toc: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length; // Number of # symbols
    const text = match[2].trim();
    const id = slugify(text);

    toc.push({
      id,
      text,
      level,
    });
  }

  return toc;
}
