import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MAЯTÍN",
    template: "%s | MAЯTÍN",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#02bfff"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none max-h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-contain grid grid-rows-[20px_1fr_20px] items-center justify-items-center md:justify-items-start h-[100svh] md:h-[100vh] p-4 md:p-8 gap-0 font-[family-name:var(--font-geist-sans)]`}>
          {children}
          <footer className="fixed bottom-0 left-0 md:static text-center flex flex-wrap items-center justify-center md:justify-start text-[#a1a1a1a1] text-sm pb-2 sm:text-base w-full">
            <p className="text-center gap-2 md:pb-0">
              {/* &copy; 2025 MAЯTÍN. background image &copy; 2025 MAЯTÍN.<span className="md:hidden"> | this website is best viewed on desktop; mobile elements will look jagged or unfinished.</span> */}
              {`© ${new Date().getFullYear()} MAЯTÍN. background image © ${new Date().getFullYear()} MAЯTÍN.`}
            </p>
          </footer>
          <Toaster />
      </body>
    </html>
  );
}
