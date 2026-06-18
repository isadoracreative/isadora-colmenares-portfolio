import type { Metadata } from "next";
import { Montserrat, Karla } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Isadora Colmenares — Experience Design Leader",
  description:
    "Portfolio of Isadora Colmenares, an Experience Design Leader and Engineer based in New York City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} ${karla.variable} min-h-full flex flex-col antialiased`}
      >
        {children}

        {/* Font Awesome 7 Pro — sharp thin style (fa-sharp fa-thin) */}
        <Script
          src="https://kit.fontawesome.com/b4676e0d67.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
