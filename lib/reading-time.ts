/**
 * Calculate reading time for a given text content
 * @param content The markdown or text content
 * @param wordsPerMinute Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes (rounded up to nearest minute)
 */
export function calculateReadingTime(
  content: string | any,
  wordsPerMinute = 200
): string {
  let text = "";

  // Check if content is a Contentful Rich Text object
  if (typeof content === "object" && content.json) {
    // Extract text from Rich Text JSON
    const extractTextFromNode = (node: any): string => {
      if (!node) return "";

      // If it's a text node, return its value
      if (node.nodeType === "text") {
        return node.value || "";
      }

      // If it has content, process each child
      if (node.content && Array.isArray(node.content)) {
        return node.content.map(extractTextFromNode).join(" ");
      }

      return "";
    };

    text = extractTextFromNode(content.json);
  } else if (typeof content === "string") {
    // If it's a plain string (markdown or plain text)
    text = content;
  } else {
    // Default fallback
    return "3 min read";
  }

  // Remove all HTML tags and markdown syntax
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "").replace(/[^\w\s]/g, "");

  // Count words by splitting on whitespace
  const words = cleanText.trim().split(/\s+/).length;

  // Calculate reading time in minutes
  const minutes = Math.ceil(words / wordsPerMinute);

  // Format the output
  return minutes === 1 ? "1 min read" : `${minutes} min read`;
}
