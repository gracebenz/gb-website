import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    index: "01",
    tag: "Book",
    tagColor: "#C9A8C9",
    titleColor: "#7A5A96",
    title: "Grumpy Grape",
    description:
      "A children's board book about a very grumpy little grape — and the friends who help him find his smile.",
    href: "/books",
    cta: "Read the book",
  },
  {
    index: "02",
    tag: "Art & Illustration",
    tagColor: "#B8963C",
    titleColor: "#9A7520",
    title: "Gallery",
    description:
      "Paintings, watercolors, AI-generated characters, and interior mood boards — made slowly and with love.",
    href: "/art",
    cta: "Explore",
  },
  {
    index: "03",
    tag: "Projects",
    tagColor: "#5A9980",
    titleColor: "#3D7868",
    title: "Pet Projects",
    description:
      "Custom websites for friends. Empire — a party game for 3–10 players where everyone picks a secret nickname and tries to guess each other's. Nyx — a Chrome extension that rewrites news headlines in calmer, funnier, or more poetic styles.",
    href: "/projects",
    cta: "View work",
  },
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-5">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-4 pb-4 overflow-visible min-h-[140px]">

        {/* Illustration accents */}
        <div className="absolute -bottom-4 -left-6 sm:-left-10 pointer-events-none select-none">
          <Image src="/pinkBlueCluster.png" alt="" width={210} height={194} />
        </div>
        <div className="absolute -bottom-4 -right-6 sm:-right-10 pointer-events-none select-none">
          <Image src="/yellowCluster.png" alt="" width={150} height={196} />
        </div>

        {/* Name + tagline */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <h1
            className="anim-fade-up delay-0 font-serif font-light leading-none"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            <span className="text-ink tracking-[-0.02em]">Grace</span>
            {" "}
            <span className="italic text-grape tracking-[-0.02em]">Benz</span>
          </h1>
          <div className="anim-fade-up delay-1 flex flex-col items-center gap-3">
            <div className="w-32 h-px bg-border" />
            <span className="font-sans text-[10px] tracking-[0.42em] uppercase text-muted whitespace-nowrap">
              Illustrator · Author · Chronic Side-Project Starter
            </span>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL GRID ──────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

        {/* 01 · Books — wide */}
        <Link
          href={sections[0].href}
          className="editorial-card anim-fade-up delay-1 md:col-span-2 group bg-lavender border border-ink/10 rounded-2xl p-7 flex flex-col gap-5 cursor-pointer"
        >
          <span
            className="absolute top-7 right-7 font-sans text-[9px] tracking-[0.45em] uppercase whitespace-nowrap"
            style={{ color: sections[0].tagColor }}
          >
            {sections[0].tag}
          </span>
          <span
            className="font-serif font-light leading-none text-ink/20 select-none"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            {sections[0].index}
          </span>
          <div className="flex-1">
            <h2
              className="font-serif text-3xl sm:text-4xl font-light mb-3"
              style={{ color: sections[0].titleColor }}
            >
              {sections[0].title}
            </h2>
            <p className="font-sans text-sm text-ink-mid leading-relaxed">
              {sections[0].description}
            </p>
          </div>
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-ink-mid group-hover:text-grape transition-colors duration-300 self-end">
            {sections[0].cta} →
          </span>
        </Link>

        {/* 02 · Art — single column */}
        <Link
          href={sections[1].href}
          className="editorial-card anim-fade-up delay-2 group bg-honey border border-ink/10 rounded-2xl p-7 flex flex-col gap-5 cursor-pointer"
        >
          <span
            className="absolute top-7 right-7 font-sans text-[9px] tracking-[0.45em] uppercase whitespace-nowrap"
            style={{ color: sections[1].tagColor }}
          >
            {sections[1].tag}
          </span>
          <span
            className="font-serif font-light leading-none text-ink/20 select-none"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            {sections[1].index}
          </span>
          <div className="flex-1">
            <h2
              className="font-serif text-3xl sm:text-4xl font-light mb-3"
              style={{ color: sections[1].titleColor }}
            >
              {sections[1].title}
            </h2>
            <p className="font-sans text-sm text-ink-mid leading-relaxed">
              {sections[1].description}
            </p>
          </div>
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-ink-mid group-hover:text-grape transition-colors duration-300 self-end">
            {sections[1].cta} →
          </span>
        </Link>

        {/* 03 · Projects — full width bottom */}
        <Link
          href={sections[2].href}
          className="editorial-card anim-fade-up delay-3 md:col-span-3 group bg-sage border border-ink/10 rounded-2xl p-7 flex flex-col gap-5 cursor-pointer"
        >
          <span
            className="absolute top-7 right-7 font-sans text-[9px] tracking-[0.45em] uppercase whitespace-nowrap"
            style={{ color: sections[2].tagColor }}
          >
            {sections[2].tag}
          </span>
          <span
            className="font-serif font-light leading-none text-ink/20 select-none"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            {sections[2].index}
          </span>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex-1">
              <h2
                className="font-serif text-3xl sm:text-4xl font-light mb-2"
                style={{ color: sections[2].titleColor }}
              >
                {sections[2].title}
              </h2>
              <p className="font-sans text-sm text-ink-mid leading-relaxed">
                {sections[2].description}
              </p>
            </div>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-ink-mid group-hover:text-grape transition-colors duration-300 shrink-0 self-end">
              {sections[2].cta} →
            </span>
          </div>
        </Link>
      </section>

    </div>
  );
}
