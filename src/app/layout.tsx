import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/*
  @fontsource-variable packages ship a single variable-font .woff2 per subset,
  covering the full weight axis (100–900) in one file — smaller payload than
  individual weight files, and zero network calls at compile/render time.
  This sidesteps the Turbopack worker → fonts.googleapis.com connection failure
  that affects next/font/google in this environment.
*/
const montserrat = localFont({
  src: "../../node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2",
  variable: "--font-montserrat",
  display: "swap",
  weight: "100 900",
});

const karla = localFont({
  src: "../../node_modules/@fontsource-variable/karla/files/karla-latin-wght-normal.woff2",
  variable: "--font-karla",
  display: "swap",
  weight: "100 900",
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
        {/*
          Layout structure:
            <Header>  sticky top-0, full-width chrome
            <div>     flex-1 — grows to fill space between header and footer;
                      zero padding so pages own their own containment.
                      Use `container-inner` inside pages for padded content,
                      or go edge-to-edge for full-bleed sections.
            <Footer>  green band, always at the bottom
        */}
        <Header />

        <div className="flex-1 flex flex-col w-full">
          {children}
        </div>

        <Footer />

        {/* Font Awesome 7 Pro — sharp light style (fa-sharp fa-light) */}
        <Script
          src="https://kit.fontawesome.com/b4676e0d67.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
