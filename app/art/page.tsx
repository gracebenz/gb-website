import ArtGallery from "./ArtGallery";

export default function Art() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-grape">02 · Collection</p>
        <h2 className="font-serif font-light text-5xl sm:text-6xl text-ink leading-none">
          Art &amp; Illustration
        </h2>
        <div className="w-10 border-t border-grape/40 mt-1" />
      </div>
      <ArtGallery />
    </div>
  );
}
