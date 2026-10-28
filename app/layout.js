import { Inter, Public_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://meritancingai.com"),
  title: "Meritancing, Adaptive AI Platform for Family Wealth",
  description:
    "Meritancing is an AI platform that learns your family's risk tolerance and keeps your portfolio on course automatically as markets change.",
  icons: {
    icon: [
      { url: "/favicon-2026.ico", sizes: "any" },
      { url: "/favicon-2026.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon-2026.png", sizes: "180x180" }],
  },
  verification: {
    google: "UmwJCnEYUomVUiH40MTQrParjgrxBZGepNfoW-NH6co",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${publicSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QJ8XYTSQKL"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJ8XYTSQKL');
          `}
        </Script>
      </body>
    </html>
  );
}
