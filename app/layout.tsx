import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grace Benz",
  description: "Illustrator, author, and creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">

          {/* ── Header ── */}
          <header className="relative z-20 px-6 sm:px-12 pt-5 pb-4 flex items-end justify-between gap-4">
            <a href="/" className="group">
              <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-muted group-hover:text-grape transition-colors duration-300 block">
                Canvas &amp; Code
              </span>
            </a>
            <Nav />
          </header>

          <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 sm:px-12 py-10 sm:py-14">
            {children}
          </main>

          {/* ── Footer ── */}
          <footer className="relative border-t border-border overflow-hidden pointer-events-none">
            {/* single centered flower */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none select-none">
              <Image src="/flower1.png" alt="" width={22} height={32} />
            </div>

            {/* text row on top */}
            <div className="mx-6 sm:mx-12 flex items-center justify-between py-6 relative z-10 pointer-events-auto">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">
                © {new Date().getFullYear()} Grace Benz
              </span>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">
                Canvas &amp; Code
              </span>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
