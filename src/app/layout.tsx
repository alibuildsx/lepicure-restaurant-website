import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Épicure — Luxury Fine Dining",
  description:
    "Experience the pinnacle of culinary artistry at L'Épicure. Chef's tasting journeys, seasonal ingredients, and an atmosphere of timeless elegance. Reserve your table today.",
  keywords: [
    "luxury restaurant",
    "fine dining",
    "Michelin",
    "chef tasting menu",
    "gourmet",
    "L'Épicure",
  ],
  openGraph: {
    title: "L'Épicure — Luxury Fine Dining",
    description:
      "Experience the pinnacle of culinary artistry at L'Épicure. Chef's tasting journeys, seasonal ingredients, and an atmosphere of timeless elegance.",
    type: "website",
    siteName: "L'Épicure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f5dc] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
