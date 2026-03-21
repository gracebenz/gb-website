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
          <div className="fixed bottom-0 left-0 right-0 pointer-events-none overflow-hidden -z-10" style={{ height: 340 }}>

            {/* ── LEFT SIDE ── */}
            <Image src="/bush1.png" alt="" width={580} height={435} style={{ position: 'absolute', bottom: -50, left: -30, mixBlendMode: 'multiply' }} />
            <Image src="/grass3.png" alt="" width={130} height={100} style={{ position: 'absolute', bottom: -12, left: 280, mixBlendMode: 'multiply' }} />

            {/* Orange daisy cluster */}
            <Image src="/flower2.png" alt="" width={78} height={135} style={{ position: 'absolute', bottom: -20, left: 355, transform: 'rotate(-9deg)', mixBlendMode: 'multiply' }} />
            <Image src="/flower2.png" alt="" width={88} height={152} style={{ position: 'absolute', bottom: -14, left: 390, mixBlendMode: 'multiply' }} />
            <Image src="/flower2.png" alt="" width={72} height={124} style={{ position: 'absolute', bottom: -22, left: 428, transform: 'rotate(11deg)', mixBlendMode: 'multiply' }} />

            <Image src="/grass1.png" alt="" width={90} height={70} style={{ position: 'absolute', bottom: -8, left: 448, mixBlendMode: 'multiply' }} />

            {/* Stray single — yellow marigold */}
            <Image src="/flower1.png" alt="" width={68} height={118} style={{ position: 'absolute', bottom: -14, left: 520, transform: 'rotate(4deg)', mixBlendMode: 'multiply' }} />

            {/* ── RIGHT SIDE ── */}
            <Image src="/bush2.png" alt="" width={580} height={435} style={{ position: 'absolute', bottom: -50, right: -30, mixBlendMode: 'multiply' }} />
            <Image src="/grass4.png" alt="" width={130} height={100} style={{ position: 'absolute', bottom: -12, right: 280, mixBlendMode: 'multiply' }} />

            {/* Blue daisy cluster */}
            <Image src="/flower3.png" alt="" width={82} height={148} style={{ position: 'absolute', bottom: -18, right: 355, transform: 'rotate(8deg)', mixBlendMode: 'multiply' }} />
            <Image src="/flower3.png" alt="" width={92} height={166} style={{ position: 'absolute', bottom: -12, right: 392, mixBlendMode: 'multiply' }} />
            <Image src="/flower3.png" alt="" width={74} height={134} style={{ position: 'absolute', bottom: -24, right: 432, transform: 'rotate(-10deg)', mixBlendMode: 'multiply' }} />

            <Image src="/grass2.png" alt="" width={90} height={70} style={{ position: 'absolute', bottom: -8, right: 452, mixBlendMode: 'multiply' }} />

            {/* Stray single — pink poppy */}
            <Image src="/flower4.png" alt="" width={62} height={112} style={{ position: 'absolute', bottom: -16, right: 524, transform: 'rotate(-5deg)', mixBlendMode: 'multiply' }} />
          </div>
        </div>
      </body>
    </html>
  );
}
