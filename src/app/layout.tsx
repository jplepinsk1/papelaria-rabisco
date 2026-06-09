import type { Metadata } from "next";
import { Roboto, Geist, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Papelaria Rabisco",
  description: "A melhor papelaria da região",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", roboto.className, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
