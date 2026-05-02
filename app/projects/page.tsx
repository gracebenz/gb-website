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

const SAGE = "#5A9980";

export default function Projects() {
  return (
    <div className="flex flex-col gap-12">

      {/* ── Page header ── */}
      <div className="flex flex-col gap-2 anim-fade-up delay-0">
        <p className="font-sans text-[9px] tracking-[0.5em] uppercase" style={{ color: SAGE }}>
          03 · Work
        </p>
        <h2 className="font-serif font-light text-5xl sm:text-6xl leading-none" style={{ color: "#3D7868" }}>
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
          <div className="flex-1 border-t border-sage/70" />
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {apps.map((app, i) => (
            <div
              key={app.title}
              className={`anim-fade-up border border-ink/10 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 delay-${i + 2} ${app.wip ? "bg-parchment" : "bg-sage/30"}`}
            >
              <div className="flex flex-col gap-3 max-w-xl">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-ink">
                    {app.title}
                  </h3>
                  <span
                    className="font-sans text-[9px] tracking-[0.4em] uppercase"
                    style={{ color: SAGE }}
                  >
                    {app.type}
                  </span>
                </div>
                <p className="font-sans text-[15px] text-muted leading-relaxed">{app.description}</p>
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
                <span
                  className="font-sans text-[9px] tracking-[0.4em] uppercase px-5 py-2.5 self-start sm:self-auto shrink-0"
                  style={{ color: `${SAGE}99`, border: `1px solid ${SAGE}40` }}
                >
                  In Progress
                </span>
              ) : (
                <a
                  href={app.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] tracking-[0.35em] uppercase text-ink border border-ink/20 px-6 py-3 transition-colors duration-300 self-start sm:self-auto shrink-0 hover:text-[#5A9980] hover:border-[#5A9980]"
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
          <div className="flex-1 border-t border-sage/70" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {websites.map((site, i) => (
            <div
              key={i}
              className={`anim-fade-up bg-parchment border border-ink/10 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 delay-${i + 5}`}
            >
              <div className="flex flex-col gap-2">
                <p
                  className="font-serif font-light text-ink leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
                >
                  {site.url}
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed">
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
                className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted border border-border px-5 py-2.5 transition-colors duration-300 self-start sm:self-auto shrink-0 hover:text-[#5A9980] hover:border-[#5A9980]"
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
