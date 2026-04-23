import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Ruzin | Engenheiro da Computação & Full Stack",
  description: "Portfólio de Felipe Ruzin. Engenheiro da Computação com foco em Sistemas Embarcados, IoT e Desenvolvimento Web Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
