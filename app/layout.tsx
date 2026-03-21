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

            {/* ── LEFT SIDE ── */}
            {/* bush1 is tall and fills its PNG — small negative bottom to clip whitespace */}
            <Image src="/bush1.png" alt="" width={580} height={435} style={{ position: 'absolute', bottom: -15, left: -20 }} />
            <Image src="/grass3.png" alt="" width={130} height={100} style={{ position: 'absolute', bottom: -8, left: 290 }} />

            {/* Mixed flower cluster — yellow, blue, orange */}
            <Image src="/flower1.png" alt="" width={78} height={140} style={{ position: 'absolute', bottom: -18, left: 360, transform: 'rotate(-8deg)' }} />
            <Image src="/flower3.png" alt="" width={90} height={162} style={{ position: 'absolute', bottom: -12, left: 400 }} />
            <Image src="/flower2.png" alt="" width={74} height={130} style={{ position: 'absolute', bottom: -20, left: 440, transform: 'rotate(10deg)' }} />

            <Image src="/grass1.png" alt="" width={90} height={70} style={{ position: 'absolute', bottom: -6, left: 462 }} />

            {/* Stray single — pink poppy */}
            <Image src="/flower4.png" alt="" width={64} height={116} style={{ position: 'absolute', bottom: -14, left: 530, transform: 'rotate(5deg)' }} />

            {/* ── RIGHT SIDE ── */}
            {/* bush2 is a wide flat mound — less whitespace below, so smaller offset */}
            <Image src="/bush2.png" alt="" width={580} height={435} style={{ position: 'absolute', bottom: 0, right: -20 }} />
            <Image src="/grass4.png" alt="" width={130} height={100} style={{ position: 'absolute', bottom: -8, right: 290 }} />

            {/* Mixed flower cluster — orange, pink, blue */}
            <Image src="/flower2.png" alt="" width={80} height={144} style={{ position: 'absolute', bottom: -16, right: 360, transform: 'rotate(7deg)' }} />
            <Image src="/flower4.png" alt="" width={68} height={124} style={{ position: 'absolute', bottom: -10, right: 400, transform: 'rotate(-4deg)' }} />
            <Image src="/flower3.png" alt="" width={76} height={138} style={{ position: 'absolute', bottom: -20, right: 440, transform: 'rotate(-9deg)' }} />

            <Image src="/grass2.png" alt="" width={90} height={70} style={{ position: 'absolute', bottom: -6, right: 462 }} />

            {/* Stray single — yellow marigold */}
            <Image src="/flower1.png" alt="" width={66} height={120} style={{ position: 'absolute', bottom: -12, right: 532, transform: 'rotate(-5deg)' }} />
          </div>
        </div>
      </body>
    </html>
  );
}
