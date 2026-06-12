import type { Metadata } from "next";
import { Montserrat, Karla } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isadora Colmenares Portfolio",
  description: "My design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.variable} ${karla.variable} min-h-full flex flex-col antialiased`}>
        {children}

        {/* Replace YOUR_KIT_CODE with your actual Font Awesome Kit code */}
        <Script src="https://kit.fontawesome.com/b4676e0d67.js" crossOrigin="anonymous" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
