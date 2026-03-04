import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacob Wright",
  description: "Founder & builder. Currently building Castari (YC).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body className={`${inter.className} bg-[#0a0a0a] text-zinc-100 antialiased`}>{children}</body>
    </html>
  );
}
