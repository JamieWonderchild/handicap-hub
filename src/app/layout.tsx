import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handicap Hub – Your Official Golf Handicap Without the Club",
  description:
    "Track and manage your golf handicap in line with World Handicap System principles. No golf club required. Built for South African golfers.",
  openGraph: {
    title: "Handicap Hub – Your Official Golf Handicap Without the Club",
    description:
      "A modern, independent way to get and maintain your golf handicap. No club membership required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
