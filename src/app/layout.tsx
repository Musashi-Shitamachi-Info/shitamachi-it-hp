import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer";
import { BASE_URL } from "@/constants";

const baseUrl = new URL(BASE_URL);
const title = "武蔵下町情報舎";
const description = "武蔵下町情報舎はITの力で地域の事業者の成長を支援し、地域全体の活性化に貢献して参ります。";

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description: description,
  openGraph: {
    type: "website",
  },
  facebook: {
    appId: "2124250178412036",
  },
};

// REF: https://zenn.dev/yuki_fujisawa/articles/4875c138b2fc33
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.className}`} data-scroll-behavior="smooth">
      <GoogleTagManager gtmId="GTM-WP3VK7M3" />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
