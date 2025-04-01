"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";


//function to slugify the text for IDs 

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen

interface RichTextProps {
  content: {
    json: any;
    links?: {
      assets?: {
        block?: any[];
      };
    };
  };
}

export default function RichTextArticle({content}: RichTextProps){

  //get all asset entries (images) as a directory for easy lookup 
  const assetMap = new Map();
  if(content?.links?.assets?.block){
    content.links.assets.block.forEach((asset)=> {
      assetMap.set(asset.sys.id, {
        url: asset.url,
        description: asset.description || '',
      });
    });
  }

  //define custom options for the rich text renderer 
  const options = {
    renderNode: {
      // Render headings with IDs for table of contents
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => {
        const text = node.content
          .filter((content: any) => content.nodeType === 'text')
          .map((content: any) => content.value)
          .join('');
          
        const id = slugify(text);
        return <h1 id={id}>{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => {
        const text = node.content
          .filter((content: any) => content.nodeType === 'text')
          .map((content: any) => content.value)
          .join('');
          
        const id = slugify(text);
        return <h2 id={id}>{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => {
        const text = node.content
          .filter((content: any) => content.nodeType === 'text')
          .map((content: any) => content.value)
          .join('');
          
        const id = slugify(text);
        return <h3 id={id}>{children}</h3>;
      },
      // Render embedded assets (images)
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const assetId = node.data.target.sys.id;
        const asset = assetMap.get(assetId);
        
        if (!asset) return null;
        
        return (
          <div className="my-6">
            <Image
              src={asset.url}
              alt={asset.description}
              width={720}
              height={400}
              className="rounded-lg shadow-md"
            />
            {asset.description && (
              <p className="text-sm text-gray-500 mt-2">{asset.description}</p>
            )}
          </div>
        );
      },
      // Customize links
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data;
        return (
          <Link href={uri} className="text-blue-600 hover:underline">
            {children}
          </Link>
        );
      },
    },
  };


  return (
    <div className="blog-content prose dark:prose-invert max-w-none">
      {documentToReactComponents(content.json, options)}
    </div>
  )

}