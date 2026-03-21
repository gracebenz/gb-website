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
          <footer className="text-center pt-8 pb-72 text-xs tracking-widest uppercase text-lavender-mid">
            © {new Date().getFullYear()} Grace Benz
          </footer>

          {/* Bottom garden — fixed, behind all content */}
          <div className="fixed bottom-0 left-0 right-0 pointer-events-none overflow-hidden -z-10" style={{ height: 500 }}>

            {/* ── LEFT — pink/blue cluster ── */}
            <Image src="/pinkBlueCluster.png" alt="" width={240} height={238} style={{ position: 'absolute', bottom: -10, left: -10 }} />

            {/* ── small flowers shifted to middle-left ── */}
            <Image src="/flower1.png" alt="" width={78} height={140} style={{ position: 'absolute', bottom: -18, left: 210 }} />
            <Image src="/flower3.png" alt="" width={45} height={80} style={{ position: 'absolute', bottom: -12, left: 195 }} />

            {/* ── GRASS — small tufts spread across full width ── */}
            <Image src="/grass3.png" alt="" width={90} height={55} style={{ position: 'absolute', bottom: -4, left: 230 }} />
            <Image src="/grass1.png" alt="" width={70} height={45} style={{ position: 'absolute', bottom: -4, left: 490 }} />
            <Image src="/grass4.png" alt="" width={90} height={65} style={{ position: 'absolute', bottom: -4, left: 370 }} />
            <Image src="/grass4.png" alt="" width={70} height={45} style={{ position: 'absolute', bottom: -4, right: 280 }} />
            <Image src="/grass2.png" alt="" width={90} height={55} style={{ position: 'absolute', bottom: -4, right: 500 }} />

            {/* ── MIDDLE flowers ── */}
            {/* Mixed flower cluster — yellow, blue, orange */}
            <Image src="/flower3.png" alt="" width={90} height={162} style={{ position: 'absolute', bottom: -12, left: 360 }} />
            <Image src="/flower2.png" alt="" width={74} height={130} style={{ position: 'absolute', bottom: -20, left: 410, transform: 'rotate(15deg)' }} />
            <Image src="/flower4.png" alt="" width={64} height={116} style={{ position: 'absolute', bottom: -14, left: 350, transform: 'rotate(5deg)' }} />

            {/* ── RIGHT — yellow cluster ── */}
            <Image src="/yellowCluster.png" alt="" width={240} height={320} style={{ position: 'absolute', bottom: -20, right: -10 }} />
          </div>
        </div>
      </body>
    </html>
  );
}
