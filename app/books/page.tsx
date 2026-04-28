import BookViewerWrapper from "@/components/BookViewerWrapper";

export default function Books() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="text-center flex flex-col items-center gap-4">
        <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-grape">01 · Book</p>
        <h2 className="font-serif font-light text-5xl sm:text-6xl text-ink leading-none italic">
          Grumpy Grape
        </h2>
        <div className="w-10 border-t border-grape/40" />
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted">
          by Grace Benz
        </p>
      </div>
      <BookViewerWrapper file="/Grumpy_boardBook_March9_website.pdf" />
    </div>
  );
}
