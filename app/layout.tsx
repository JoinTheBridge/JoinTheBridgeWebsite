import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: "BRIDGE | Build Resilience in Development, Growth, and Education",
  description: "Free educational programs in economics and financial literacy for low-income communities. Empowering students through education, mentorship, and community support.",
  keywords: ["nonprofit", "education", "financial literacy", "economics", "student programs", "mentorship", "community development"],
  authors: [{ name: "BRIDGE Team" }],
  openGraph: {
    title: "BRIDGE Nonprofit",
    description: "Breaking barriers through education",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className={dmSans.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
