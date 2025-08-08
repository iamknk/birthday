import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Happy Birthday!",
  description: "A cute, animated birthday wishes site.",
  openGraph: {
    title: "Happy Birthday!",
    description: "Open the card 🎉",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday!",
    description: "Open the card 🎉",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50 text-gray-800 selection:bg-rose-200/60">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
