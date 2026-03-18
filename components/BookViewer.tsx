"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function BookViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(600);
  const [coverDims, setCoverDims] = useState<{ width: number; height: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(Math.min(600, containerRef.current.offsetWidth));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const onCoverLoadSuccess = useCallback((page: { width: number; height: number }) => {
    setCoverDims({ width: page.width, height: page.height });
  }, []);

  // Cover renders at containerWidth. Its display height = containerWidth * (coverH / coverW).
  // All interior pages render at that same height so every page feels the same size.
  const coverDisplayHeight = coverDims
    ? containerWidth * (coverDims.height / coverDims.width)
    : undefined;

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-6 w-full">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="shadow-lg rounded-xl overflow-hidden"
      >
        <Page
          pageNumber={pageNumber}
          width={pageNumber === 1 ? containerWidth : undefined}
          height={pageNumber !== 1 ? coverDisplayHeight : undefined}
          onLoadSuccess={pageNumber === 1 ? onCoverLoadSuccess : undefined}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {/* Page controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 rounded-full bg-lavender text-slate text-sm tracking-widest uppercase disabled:opacity-30 hover:bg-lavender/70 transition-colors"
        >
          ← Prev
        </button>
        <span className="text-sm text-ink/50 tracking-widest">
          {pageNumber} / {numPages}
        </span>
        <button
          onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 rounded-full bg-lavender text-slate text-sm tracking-widest uppercase disabled:opacity-30 hover:bg-lavender/70 transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Download link */}
      <a
        href={file}
        download
        className="text-xs tracking-widest uppercase text-lavender-mid hover:text-ink transition-colors"
      >
        Download PDF
      </a>
    </div>
  );
}
