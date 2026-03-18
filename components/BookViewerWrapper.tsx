"use client";

import dynamic from "next/dynamic";

const BookViewer = dynamic(() => import("@/components/BookViewer"), {
  ssr: false,
  loading: () => (
    <p className="text-ink/40 text-sm tracking-widest uppercase">Loading book...</p>
  ),
});

export default function BookViewerWrapper({ file }: { file: string }) {
  return <BookViewer file={file} />;
}
