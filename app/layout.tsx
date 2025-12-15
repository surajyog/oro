import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oro Dental | Modern Dentistry for Your Perfect Smile",
  description: "Experience state-of-the-art dental care at Oro Dental. Services include implants, cosmetic dentistry, orthodontics, and more. Book your appointment today.",
  keywords: ["Dentist", "Dental Clinic", "Implants", "Cosmetic Dentistry", "Orthodontics", "Oro Dental"],
  openGraph: {
    title: "Oro Dental | Modern Dentistry",
    description: "Experience state-of-the-art dental care at Oro Dental.",
    type: "website",
    locale: "en_US",
    siteName: "Oro Dental",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
