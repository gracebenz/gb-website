const websites = [
  {
    url: "lianbenz.com",
    href: "https://lianbenz.com",
    description: "Academic papers, research, and notes. Intimidatingly well organized.",
    tags: ["Next.js", "Tailwind"],
  },
  {
    url: "aglassortu.com",
    href: "https://aglassortu.com",
    description: "A wine-forward journal and events hub. Pour yourself a glass first.",
    tags: ["Next.js", "Tailwind"],
  },
];

const apps = [
  {
    title: "Empire",
    type: "Party Game",
    description:
      "A party game for 3–10 players. Everyone picks a secret nickname — then tries to guess each other's before their own is revealed. Conquer your friends, build an empire.",
    tags: ["React Native", "Supabase"],
    href: "https://empire.gracebenz.com",
    cta: "Play Now",
    wip: false,
  },
  {
    title: "Nyx",
    type: "Chrome Extension",
    description:
      "A browser extension that un-click-baits article titles and rewrites news in different styles — calmer, funnier, more poetic. An experiment in changing how information feels.",
    tags: ["Plasmo", "TypeScript"],
    href: null,
    cta: null,
    wip: true,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-12">

      {/* ── Page header ── */}
      <div className="flex flex-col gap-2 anim-fade-up delay-0">
        <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-grape">03 · Work</p>
        <h2 className="font-serif font-light text-5xl sm:text-6xl text-ink leading-none">
          Pet Projects
        </h2>
        <div className="w-10 border-t border-sage mt-1" />
        <p className="font-sans text-sm text-muted leading-relaxed max-w-md mt-1">
          Things built for fun and for friends.
        </p>
      </div>

      {/* ── Section: Apps & Extensions ── */}
      <div className="flex flex-col gap-5 anim-fade-up delay-1">
        <div className="flex items-center gap-5">
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-muted shrink-0">
            Apps &amp; Extensions
          </span>
          <div className="flex-1 border-t border-border" />
        </div>

        <div className="flex flex-col gap-px bg-border">
          {apps.map((app, i) => (
            <div
              key={app.title}
              className={`anim-fade-up bg-parchment border border-border p-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 delay-${i + 2}`}
            >
              <div className="flex flex-col gap-3 max-w-xl">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-ink">
                    {app.title}
                  </h3>
                  <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-grape">
                    {app.type}
                  </span>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">{app.description}</p>
                {app.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[9px] tracking-[0.35em] uppercase text-muted border border-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {app.wip ? (
                <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted/50 border border-border/50 px-5 py-2.5 self-start sm:self-auto shrink-0">
                  In Progress
                </span>
              ) : (
                <a
                  href={app.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] tracking-[0.35em] uppercase text-ink border border-ink/20 px-6 py-3 hover:border-grape hover:text-grape transition-colors duration-300 self-start sm:self-auto shrink-0"
                >
                  {app.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Section: Website Design ── */}
      <div className="flex flex-col gap-5 anim-fade-up delay-4">
        <div className="flex items-center gap-5">
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-muted shrink-0">
            Website Design
          </span>
          <div className="flex-1 border-t border-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {websites.map((site, i) => (
            <div
              key={i}
              className={`anim-fade-up bg-parchment border border-border p-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 delay-${i + 5}`}
            >
              <div className="flex flex-col gap-2">
                <p
                  className="font-serif font-light text-ink leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
                >
                  {site.url}
                </p>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  {site.description}
                </p>
                {site.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[9px] tracking-[0.35em] uppercase text-muted border border-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted border border-border px-5 py-2.5 hover:border-grape hover:text-grape transition-colors duration-300 self-start sm:self-auto shrink-0"
              >
                Visit →
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
