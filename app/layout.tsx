import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Image from "next/image";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      <body className={`${lora.variable} ${dmSans.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="pt-12 pb-2 text-center">
            <a href="/" className="inline-block">
              <h1 className="font-serif text-3xl tracking-[0.25em] uppercase text-ink">
                Grace Benz
              </h1>
              <p className="text-xs tracking-[0.3em] uppercase text-lavender-mid mt-1">
                Canvas & Code
              </p>
            </a>
          </header>
          <Nav />
          <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
            {children}
          </main>
          <footer className="text-center pt-8 pb-6 text-xs tracking-widest uppercase text-lavender-mid">
            © {new Date().getFullYear()} Grace Benz
          </footer>

          {/* Bottom garden — fixed, behind all content */}
          <div className="fixed bottom-0 left-0 right-0 pointer-events-none overflow-hidden -z-10" style={{ height: 500 }}>

            {/* ── LEFT — pink/blue cluster ── */}
            <Image src="/pinkBlueCluster.png" alt="" width={300} height={278} style={{ position: 'absolute', bottom: -38, left: -10 }} />
         
            {/* ── RIGHT — yellow cluster ── */}
            <Image src="/yellowCluster.png" alt="" width={240} height={320} style={{ position: 'absolute', bottom: -20, right: 10 }} />
          </div>
        </div>
      </body>
    </html>
  );
}
