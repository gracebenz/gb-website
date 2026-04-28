"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = ["AI Generated", "Interior Design", "Watercolor", "Digital Illustration", "Acrylic"] as const;
type Tab = (typeof tabs)[number];

const interiorSections = [
  {
    title: "Living Room",
    images: [
      "/art/interior_design/livingRoom1.JPG",
      "/art/interior_design/livingRoom2.PNG",
      "/art/interior_design/livingRoom3.JPG",
      "/art/interior_design/livingRoom4.JPG",
      "/art/interior_design/livingRoom5.JPG",
      "/art/interior_design/livingRoom6.PNG",
      "/art/interior_design/livingRoom7.PNG",
      "/art/interior_design/livingRoom8.PNG",
      "/art/interior_design/livingRoom9.PNG",
    ],
  },
  {
    title: "Office",
    images: [
      "/art/interior_design/office1.JPG",
      "/art/interior_design/office2.PNG",
      "/art/interior_design/office3.PNG",
      "/art/interior_design/office4.JPG",
    ],
  },
  {
    title: "Kids Room",
    images: [
      "/art/interior_design/kidsRoom1.JPG",
      "/art/interior_design/kidsRoom2.JPG",
    ],
  },
];

const aiSections = [
  {
    title: "Critters",
    images: [
      "/art/characters/critters1.png",
      "/art/characters/critters2.png",
      "/art/characters/critters3.png",
      "/art/characters/critters4.png",
      "/art/characters/critters6.png",
    ],
  },
  {
    title: "Dogs",
    images: [
      "/art/dogs/blueDog1.png",
      "/art/dogs/blueDog2.png",
      "/art/dogs/blueDog3.png",
      "/art/dogs/3dogs.png",
      "/art/dogs/sketchDog1.png",
      "/art/dogs/sketchDog2.png",
      "/art/dogs/sketchDog3.png",
      "/art/dogs/dogGrass1.png",
    ],
  },
  {
    title: "Morty the Mouse",
    images: [
      "/art/empire/empireMouse1.png",
      "/art/empire/empireMouse2.png",
      "/art/empire/empireMouse3.png",
    ],
  },
  {
    title: "Farmer Jeeks",
    images: [
      "/art/farmerJeeks/farmerJeeksBrain1.png",
      "/art/farmerJeeks/farmerJeeksBrain2.png",
      "/art/farmerJeeks/farmerJeeksFly1.png",
      "/art/farmerJeeks/farmerJeeksFly2.png",
    ],
  },
  {
    title: "Invites & Cards",
    images: [
      "/art/invites_cards/holiday2.png",
      "/art/invites_cards/holiday6.png",
      "/art/invites_cards/menu1.png",
      "/art/invites_cards/soiree1.png",
    ],
  },
  {
    title: "Abstract",
    images: [
      "/art/abstract/landscape.png",
      "/art/abstract/landscape2.png",
    ],
  },
];

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 cursor-pointer anim-fade-in delay-0"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt="" fill className="object-contain" sizes="100vw" />
      </div>
      <button
        onClick={onClose}
        className="absolute top-6 right-8 font-sans text-[10px] tracking-[0.35em] uppercase text-parchment/60 hover:text-parchment transition-colors duration-200"
        aria-label="Close"
      >
        Close ✕
      </button>
    </div>
  );
}

function ImageGrid({
  images,
  onSelect,
}: {
  images: string[];
  onSelect: (src: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {images.map((src) => (
        <button
          key={src}
          onClick={() => onSelect(src)}
          className="aspect-square relative overflow-hidden bg-surface group cursor-pointer"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
        </button>
      ))}
    </div>
  );
}

export default function ArtGallery() {
  const [activeTab, setActiveTab] = useState<Tab>("AI Generated");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-10">
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}

      {/* Tabs — editorial underline style */}
      <div className="flex flex-wrap gap-0 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-sans text-[9px] tracking-[0.4em] uppercase px-4 py-3 border-b-[1.5px] -mb-px transition-colors duration-200 ${
              activeTab === tab
                ? "border-grape text-grape"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "AI Generated" ? (
        <div className="flex flex-col gap-14">
          {aiSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-serif font-light text-2xl text-ink">{section.title}</h3>
              <div className="w-6 border-t border-grape/30" />
              <ImageGrid images={section.images} onSelect={setLightboxSrc} />
            </div>
          ))}
        </div>
      ) : activeTab === "Interior Design" ? (
        <div className="flex flex-col gap-14">
          {interiorSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-serif font-light text-2xl text-ink">{section.title}</h3>
              <div className="w-6 border-t border-grape/30" />
              {section.images.length > 0 ? (
                <ImageGrid images={section.images} onSelect={setLightboxSrc} />
              ) : (
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted py-8">
                  Coming soon
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted">
            Coming soon
          </p>
        </div>
      )}
    </div>
  );
}
