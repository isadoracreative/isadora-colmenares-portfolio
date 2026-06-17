import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/montserrat-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

const karla = localFont({
  src: [
    {
      path: "../../public/fonts/karla-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/karla-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/karla-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-karla",
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

