import Link from "next/link";

const projects = [
  {
    title: "Grumpy Grape",
    description: "A children's book about a very grumpy little grape.",
    href: "/books",
    color: "bg-lavender",
    accent: "text-grape",
    tag: "Book",
    tagColor: "bg-grape/20 text-grape",
  },
  {
    title: "Art & Illustration",
    description: "Paintings, drawings, and things made with love.",
    href: "/art",
    color: "bg-amber/20",
    accent: "text-amber",
    tag: "Art",
    tagColor: "bg-amber/20 text-amber",
  },
  {
    title: "Pet Projects",
    description: "Little experiments in code and creativity.",
    href: "/projects",
    color: "bg-sage/20",
    accent: "text-sage",
    tag: "Code",
    tagColor: "bg-sage/20 text-sage",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      {/* Intro */}
      <div className="text-center max-w-lg pt-4">
        <p className="font-serif text-xl leading-relaxed text-ink/80">
          Hi! I&rsquo;m Grace &mdash; an illustrator, author, and creative tinkerer.
          This is my little corner of the internet.
        </p>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {projects.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className={`group rounded-2xl p-8 ${p.color} flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md`}
          >
            <span className={`text-xs font-medium tracking-widest uppercase px-2 py-1 rounded-full self-start ${p.tagColor}`}>
              {p.tag}
            </span>
            <h2 className={`font-serif text-2xl ${p.accent}`}>{p.title}</h2>
            <p className="text-sm text-ink/70 leading-relaxed">{p.description}</p>
            <span className="text-xs tracking-widest uppercase text-ink/40 mt-auto group-hover:text-ink/70 transition-colors">
              View →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
