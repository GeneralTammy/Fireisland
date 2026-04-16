import type { Metadata } from "next";
import {
  Inter,
  Cormorant_Garamond,
  Dancing_Script,
  Outfit,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-hand",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Living Fire Island Homes",
  description: "The Summer Side of New York. Premier Fire Island Real Estate.",
  icons: {
    icon: [
      {
        url: "/MainLogo_FullColor_BlueGingham-1000px.png",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#185b89",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
