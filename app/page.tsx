import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    index: "01",
    tag: "Book",
    title: "Grumpy Grape",
    description:
      "A children's board book about a very grumpy little grape — and the friends who help him find his smile.",
    href: "/books",
    cta: "Read the book",
  },
  {
    index: "02",
    tag: "Art & Illustration",
    title: "Gallery",
    description:
      "Paintings, watercolors, AI-generated characters, and interior mood boards — made slowly and with love.",
    href: "/art",
    cta: "Explore",
  },
  {
    index: "03",
    tag: "Projects",
    title: "Pet Projects",
    description:
      "Websites, apps, and browser extensions — including Empire, a party game for 3–10 players.",
    href: "/projects",
    cta: "View work",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-6 pb-10 overflow-visible min-h-[160px]">

        {/* Illustration accents */}
        <div className="absolute bottom-0 -left-6 sm:-left-10 pointer-events-none select-none" style={{ opacity: 0.65 }}>
          <Image src="/pinkBlueCluster.png" alt="" width={170} height={157} />
        </div>
        <div className="absolute bottom-0 -right-6 sm:-right-10 pointer-events-none select-none" style={{ opacity: 0.6 }}>
          <Image src="/yellowCluster.png" alt="" width={150} height={196} />
        </div>

        {/* Tagline — masthead treatment */}
        <h1 className="anim-fade-up delay-0 relative z-10 flex items-center gap-4 sm:gap-6">
          <span className="flex-1 h-px bg-border block w-8 sm:w-14" />
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-muted whitespace-nowrap">
            Illustrator · Author · Chronic Side-Project Starter
          </span>
          <span className="flex-1 h-px bg-border block w-8 sm:w-14" />
        </h1>
      </section>

      {/* ── EDITORIAL GRID ──────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">

        {/* 01 · Books — wide */}
        <Link
          href={sections[0].href}
          className="editorial-card anim-fade-up delay-1 md:col-span-2 group bg-parchment border border-border p-10 flex flex-col gap-7 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <span
              className="font-serif font-light leading-none text-grape/15 select-none"
              style={{ fontSize: "clamp(5rem, 11vw, 9rem)" }}
            >
              {sections[0].index}
            </span>
            <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-grape mt-1">
              {sections[0].tag}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink mb-3">
              {sections[0].title}
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-sm">
              {sections[0].description}
            </p>
          </div>
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted group-hover:text-grape transition-colors duration-300">
            {sections[0].cta} →
          </span>
        </Link>

        {/* 02 · Art — single column */}
        <Link
          href={sections[1].href}
          className="editorial-card anim-fade-up delay-2 group bg-parchment border border-border p-10 flex flex-col gap-7 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <span
              className="font-serif font-light leading-none text-grape/15 select-none"
              style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
            >
              {sections[1].index}
            </span>
            <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-grape mt-1">
              {sections[1].tag}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink mb-3">
              {sections[1].title}
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed">
              {sections[1].description}
            </p>
          </div>
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted group-hover:text-grape transition-colors duration-300">
            {sections[1].cta} →
          </span>
        </Link>

        {/* 03 · Projects — full width bottom */}
        <Link
          href={sections[2].href}
          className="editorial-card anim-fade-up delay-3 md:col-span-3 group bg-parchment border border-border p-10 flex flex-col gap-7 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <span
              className="font-serif font-light leading-none text-grape/15 select-none"
              style={{ fontSize: "clamp(4rem, 6vw, 5.5rem)" }}
            >
              {sections[2].index}
            </span>
            <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-grape mt-1">
              {sections[2].tag}
            </span>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink mb-2">
                {sections[2].title}
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed max-w-md">
                {sections[2].description}
              </p>
            </div>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted group-hover:text-grape transition-colors duration-300 shrink-0">
              {sections[2].cta} →
            </span>
          </div>
        </Link>
      </section>

    </div>
  );
}
