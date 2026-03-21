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
          <footer className="text-center pt-8 pb-52 text-xs tracking-widest uppercase text-lavender-mid">
            © {new Date().getFullYear()} Grace Benz
          </footer>

          {/* Bottom garden — fixed so it persists across pages */}
          <div className="fixed bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-48 z-0">
            {/* Left cluster */}
            <Image src="/bush1.png" alt="" width={160} height={120} className="absolute bottom-0 left-0 opacity-90" />
            <Image src="/grass2.png" alt="" width={100} height={80} className="absolute bottom-0 left-28 opacity-80" />
            <Image src="/flower2.png" alt="" width={70} height={110} className="absolute bottom-6 left-44 opacity-90" />
            <Image src="/grass4.png" alt="" width={90} height={70} className="absolute bottom-0 left-56 opacity-70" />
            <Image src="/flower4.png" alt="" width={60} height={95} className="absolute bottom-4 left-64 opacity-85" />

            {/* Right cluster */}
            <Image src="/bush2.png" alt="" width={160} height={120} className="absolute bottom-0 right-0 opacity-90" />
            <Image src="/grass1.png" alt="" width={100} height={80} className="absolute bottom-0 right-28 opacity-80" />
            <Image src="/flower1.png" alt="" width={70} height={110} className="absolute bottom-6 right-44 opacity-90" />
            <Image src="/grass3.png" alt="" width={90} height={70} className="absolute bottom-0 right-56 opacity-70" />
            <Image src="/flower3.png" alt="" width={60} height={95} className="absolute bottom-4 right-64 opacity-85" />
          </div>
        </div>
      </body>
    </html>
  );
}
