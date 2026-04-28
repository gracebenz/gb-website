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

          <div className="mx-6 sm:mx-12 border-t border-border" />

          <main className="flex-1 max-w-6xl mx-auto w-full px-6 sm:px-12 py-16">
            {children}
          </main>

          {/* ── Footer ── */}
          <footer className="relative border-t border-border overflow-hidden pointer-events-none">
            {/* all flowers sit behind the text row (z-10) */}

            {/* left edge cluster — tall yellow spike anchors left */}
            <Image src="/grass4.png"  alt="" width={36} height={23} style={{ position:"absolute", bottom:0, left:"1%",  opacity:0.32, transform:"rotate(-6deg)" }} />
            <Image src="/flower1.png" alt="" width={34} height={49} style={{ position:"absolute", bottom:0, left:"3%",  opacity:0.56, transform:"rotate(5deg)"  }} />
            <Image src="/bush1.png"   alt="" width={60} height={44} style={{ position:"absolute", bottom:0, left:"7%",  opacity:0.42, transform:"rotate(-2deg)" }} />
            <Image src="/flower4.png" alt="" width={22} height={36} style={{ position:"absolute", bottom:0, left:"14%", opacity:0.52, transform:"rotate(-7deg)" }} />
            <Image src="/grass2.png"  alt="" width={40} height={26} style={{ position:"absolute", bottom:0, left:"17%", opacity:0.30, transform:"rotate(3deg)"  }} />

            {/* left-centre — tallest blue flower peaks here */}
            <Image src="/flower3.png" alt="" width={36} height={55} style={{ position:"absolute", bottom:0, left:"27%", opacity:0.56, transform:"rotate(6deg)"  }} />
            <Image src="/flower4.png" alt="" width={22} height={36} style={{ position:"absolute", bottom:0, left:"31%", opacity:0.48, transform:"rotate(-5deg)" }} />
            <Image src="/grass1.png"  alt="" width={44} height={24} style={{ position:"absolute", bottom:0, left:"33%", opacity:0.28, transform:"rotate(2deg)"  }} />
            <Image src="/bush2.png"   alt="" width={58} height={35} style={{ position:"absolute", bottom:0, left:"36%", opacity:0.42, transform:"rotate(-3deg)" }} />
            <Image src="/flower2.png" alt="" width={26} height={36} style={{ position:"absolute", bottom:0, left:"43%", opacity:0.60, transform:"rotate(4deg)"  }} />

            {/* dense centre — big bush + tall blue spike side by side */}
            <Image src="/grass3.png"  alt="" width={36} height={20} style={{ position:"absolute", bottom:0, left:"46%", opacity:0.26, transform:"rotate(-4deg)" }} />
            <Image src="/bush1.png"   alt="" width={68} height={50} style={{ position:"absolute", bottom:0, left:"48%", opacity:0.44                           }} />
            <Image src="/flower3.png" alt="" width={34} height={52} style={{ position:"absolute", bottom:0, left:"56%", opacity:0.58, transform:"rotate(5deg)"  }} />
            <Image src="/flower2.png" alt="" width={22} height={31} style={{ position:"absolute", bottom:0, left:"60%", opacity:0.60, transform:"rotate(-7deg)" }} />
            <Image src="/grass2.png"  alt="" width={38} height={25} style={{ position:"absolute", bottom:0, left:"63%", opacity:0.32, transform:"rotate(-3deg)" }} />

            {/* right-centre — tall pink poppy leans out of bush */}
            <Image src="/flower4.png" alt="" width={30} height={50} style={{ position:"absolute", bottom:0, left:"69%", opacity:0.54, transform:"rotate(8deg)"  }} />
            <Image src="/bush2.png"   alt="" width={58} height={35} style={{ position:"absolute", bottom:0, left:"72%", opacity:0.40, transform:"rotate(2deg)"  }} />
            <Image src="/flower1.png" alt="" width={28} height={40} style={{ position:"absolute", bottom:0, left:"79%", opacity:0.56, transform:"rotate(-6deg)" }} />
            <Image src="/grass4.png"  alt="" width={36} height={23} style={{ position:"absolute", bottom:0, left:"82%", opacity:0.28, transform:"rotate(4deg)"  }} />

            {/* right trailing — blue then small bush, fading out */}
            <Image src="/flower3.png" alt="" width={26} height={40} style={{ position:"absolute", bottom:0, left:"85%", opacity:0.50, transform:"rotate(6deg)"  }} />
            <Image src="/bush1.png"   alt="" width={52} height={38} style={{ position:"absolute", bottom:0, left:"88%", opacity:0.36, transform:"rotate(-3deg)" }} />
            <Image src="/flower2.png" alt="" width={20} height={28} style={{ position:"absolute", bottom:0, left:"93%", opacity:0.50, transform:"rotate(-8deg)" }} />
            <Image src="/grass1.png"  alt="" width={40} height={22} style={{ position:"absolute", bottom:0, left:"96%", opacity:0.26, transform:"rotate(5deg)"  }} />

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
