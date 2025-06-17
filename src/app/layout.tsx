import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoForce Nepal | Premium Automotive Lubricants Distributor in Nepal",
  description:
    "AutoForce Nepal PVT LTD is a leading importer and distributor of high-performance automotive lubricants in Nepal. Featuring Progulf Lubricants — manufactured in Dubai and tested to international standards — we provide engine oils and greases designed for superior protection and efficiency across Nepal's diverse driving conditions.",
  keywords: [
    "AutoForce Nepal",
    "automotive lubricants Nepal",
    "engine oil Nepal",
    "Progulf Lubricants",
    "premium lubricants Nepal",
    "car oil distributor Nepal",
    "Dubai lubricants",
  ],
  authors: [{ name: "AutoForce Nepal PVT LTD" }],
  openGraph: {
    title: "AutoForce Nepal | Distributor of Progulf Lubricants in Nepal",
    description:
      "Trusted importer of high-performance engine oils and greases. Discover Progulf Lubricants – quality you can rely on, tested to global standards.",
    url: "https://autoforce-nepal.com",
    siteName: "AutoForce Nepal",
    type: "website",
    locale: "en_NP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
