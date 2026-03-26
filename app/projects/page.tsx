const projects = [
  {
    title: "Empire",
    description:
      "A party game for 3–10 players. Everyone picks a secret nickname — then tries to guess each other's before their own is revealed. Conquer your friends, build an empire.",
    tags: ["React Native", "Expo", "Party Game"],
    url: "https://empire.gracebenz.com",
    cta: "Play Now",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="font-serif text-4xl text-ink">Projects</h2>
      <div className="grid gap-6 w-full max-w-2xl">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-lavender/20 border border-lavender-mid/40 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                <p className="text-ink/60 text-sm mt-1 leading-relaxed">{p.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-sans bg-lavender-mid/30 text-slate px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start bg-grape text-cream text-sm font-sans px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {p.cta} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
