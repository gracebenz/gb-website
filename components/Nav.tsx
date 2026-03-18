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
    <nav className="flex justify-center gap-1 pt-4 pb-2">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-5 py-2 text-sm tracking-widest uppercase transition-all duration-200 rounded-full ${
              isActive
                ? "bg-lavender text-slate font-medium"
                : "text-lavender-mid hover:text-slate hover:bg-lavender/40"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
