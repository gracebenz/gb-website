"use client";

import { useState, useRef, useEffect } from "react";

const PDFJS_CDN = "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build";

export default function BookViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(600);
  const [coverHeight, setCoverHeight] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<any>(null);
  const renderTaskRef = useRef<any>(null);

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

  // Load pdfjs and the PDF document entirely from CDN — webpack never touches pdfjs-dist
  useEffect(() => {
    let cancelled = false;
    async function load() {
      // webpackIgnore: true prevents webpack from bundling this import; browser fetches it natively
      const pdfjs = await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.min.mjs" as any);
      pdfjs.GlobalWorkerOptions.workerSrc = `${PDFJS_CDN}/pdf.worker.min.mjs`;
      const pdf = await pdfjs.getDocument(file).promise;
      if (!cancelled) {
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setReady(true);
      }
    }
    load().catch(console.error);
    return () => { cancelled = true; };
  }, [file]);

  // Render current page to canvas
  useEffect(() => {
    if (!ready || !pdfRef.current || !canvasRef.current) return;
    async function render() {
      if (renderTaskRef.current) renderTaskRef.current.cancel();
      const page = await pdfRef.current.getPage(pageNumber);
      if (!canvasRef.current || !containerRef.current) return;
      const freshWidth = Math.min(600, containerRef.current.offsetWidth);
      const viewport = page.getViewport({ scale: 1 });

      // Page 1 (cover) scales by width.
      // Pages 2+ are spreads (2× wider) — scale by height to match the cover's
      // display height so every page appears the same visual size.
      let scale: number;
      if (pageNumber === 1 || coverHeight === null) {
        scale = freshWidth / viewport.width;
      } else {
        scale = coverHeight / viewport.height;
      }

      const scaled = page.getViewport({ scale });
      const canvas = canvasRef.current;
      canvas.width = scaled.width;
      canvas.height = scaled.height;

      if (pageNumber === 1) setCoverHeight(scaled.height);

      const ctx = canvas.getContext("2d")!;
      renderTaskRef.current = page.render({ canvasContext: ctx, viewport: scaled });
      await renderTaskRef.current.promise;
    }
    render().catch((e) => {
      if (e?.name !== "RenderingCancelledException") console.error(e);
    });
  }, [ready, pageNumber, containerWidth]);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-8 w-full">
      <div className="overflow-hidden shadow-[0_8px_40px_rgba(28,24,21,0.12)]">
        <canvas ref={canvasRef} className="block" />
      </div>

      {!ready && (
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted">
          Loading…
        </p>
      )}

      {ready && (
        <>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
              className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted border border-border px-5 py-2.5 hover:border-grape hover:text-grape transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            <span className="font-sans text-[10px] tracking-[0.3em] text-muted tabular-nums">
              {pageNumber} / {numPages}
            </span>
            <button
              onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
              disabled={pageNumber >= numPages}
              className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted border border-border px-5 py-2.5 hover:border-grape hover:text-grape transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          <a
            href={file}
            download
            className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted hover:text-grape transition-colors duration-300"
          >
            Download PDF
          </a>
        </>
      )}
    </div>
  );
}
