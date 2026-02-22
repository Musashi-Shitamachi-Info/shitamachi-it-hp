import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "リンク集",
  description: "武蔵下町情報舎のSNS・リンク一覧ページ",
};

const links = [
  {
    label: "ホームページ",
    icon: "🌐",
    url: "https://shitamachi-it.work",
    description: "公式サイト",
  },
  // {
  //   label: "Facebook",
  //   icon: "📘",
  //   url: "https://www.facebook.com/", // TODO: 正しいURLに変更してください
  //   description: "Facebookページ",
  // },
  // {
  //   label: "note",
  //   icon: "📝",
  //   url: "https://note.com/", // TODO: 正しいURLに変更してください
  //   description: "ブログ・コラム",
  // },
  {
    label: "お問い合わせ",
    icon: "📬",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfM6u1weCuTx58dzygIwtnU-4hToUcPHQaA8Qd0oZbhcPWaZQ/viewform?usp=dialog",
    description: "無料相談・お問い合わせフォーム",
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-pearl-bush-50 to-pearl-bush-100 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-md mx-auto">
        {/* プロフィール */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <Image src="/logo.png" alt="武蔵下町情報舎 ロゴ" width={96} height={96} className="rounded shadow-md" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-pearl-bush-900 mb-2">武蔵下町情報舎</h1>
          <p className="text-sm sm:text-base text-pearl-bush-700">多摩地区のITサポート専門</p>
        </div>

        {/* リンク一覧 */}
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full bg-white border border-pearl-bush-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-2xl w-8 text-center shrink-0" aria-hidden="true">
                  {link.icon}
                </span>
                <dl className="flex-1 min-w-0">
                  <dt className="font-bold text-pearl-bush-900 text-base">{link.label}</dt>
                  <dd className="text-xs text-pearl-bush-600 mt-0.5">{link.description}</dd>
                </dl>
                <div className="shrink-0" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M10 7L15 12L10 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-pearl-bush-600" />
                    </g>
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
