import BookViewerWrapper from "@/components/BookViewerWrapper";

export default function Books() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="font-serif text-4xl text-grape">Grumpy Grape</h2>
        <p className="text-ink/50 text-sm tracking-widest uppercase mt-2">by Grace Benz</p>
      </div>
      <BookViewerWrapper file="/Grumpy_boardBook_March9_website.pdf" />
    </div>
  );
}
