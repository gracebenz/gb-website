"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Art", href: "/art" },
  { label: "Projects", href: "/projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 sm:gap-8">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`font-sans text-[10px] tracking-[0.35em] uppercase transition-colors duration-200 link-slide pb-0.5 ${
              isActive ? "text-grape" : "text-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
