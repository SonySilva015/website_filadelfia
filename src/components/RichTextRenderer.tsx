// components/RichText.tsx

import {
  RichText as RichTextRenderer,
} from "@payloadcms/richtext-lexical/react";

export default function RichText({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="prose prose-lg max-w-none">
      <RichTextRenderer data={data} />
    </div>
  );
}