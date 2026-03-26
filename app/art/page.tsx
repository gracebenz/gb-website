import ArtGallery from "./ArtGallery";

export default function Art() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-serif text-4xl text-ink">Art & Illustration</h2>
      <ArtGallery />
    </div>
  );
}
