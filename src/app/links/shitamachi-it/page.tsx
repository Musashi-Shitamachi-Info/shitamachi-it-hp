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
    icon: (
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1" />
      </svg>
    ),
    url: "https://shitamachi-it.work",
    description: "公式サイト",
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 14 14">
        <path fill="currentColor" d="M0 12.923V1.077A1.077 1.077 0 0 1 1.077 0h11.846A1.077 1.077 0 0 1 14 1.077v11.846A1.077 1.077 0 0 1 12.923 14h-3.23V8.895h.764a.657.657 0 0 0 .657-.657V7.41a.655.655 0 0 0-.657-.657h-.722V5.74c0-.905.41-.905.819-.905h.527a.6.6 0 0 0 .464-.193a.63.63 0 0 0 .194-.464v-.796a.67.67 0 0 0-.647-.69H9.854a2.498 2.498 0 0 0-2.574 2.8v1.26h-.69a.657.657 0 0 0-.667.657v.83a.657.657 0 0 0 .668.656h.689V14H1.077A1.077 1.077 0 0 1 0 12.923" />
      </svg>
    ),
    url: "https://www.facebook.com/shitamachi.it", // TODO: 正しいURLに変更してください
    description: "Facebookページ",
  },
  {
    label: "お問い合わせ",
    icon: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11.75 19h-.25q-3.55 0-6.025-2.475T3 10.5t2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825t1.824 2.7T20 10.5q0 3.35-1.888 6.225t-4.762 4.5q-.25.125-.5.138t-.45-.113t-.35-.325t-.175-.475zm-.275-3.025q.425 0 .725-.3t.3-.725t-.3-.725t-.725-.3t-.725.3t-.3.725t.3.725t.725.3M9.3 8.375q.275.125.55.013t.45-.363q.225-.3.525-.463T11.5 7.4q.6 0 .975.337t.375.863q0 .325-.187.65t-.663.8q-.625.55-.925 1.038t-.3.987q0 .3.213.513t.512.212t.5-.225t.3-.525q.125-.425.45-.775t.6-.625q.525-.525.788-1.05t.262-1.05q0-1.15-.788-1.85T11.5 6q-.8 0-1.475.388t-1.1 1.062q-.15.275-.038.538t.413.387"
        />
      </svg>
    ),
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
            <Image src="/logo.webp" alt="武蔵下町情報舎 ロゴ" width={96} height={96} className="rounded shadow-md" />
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
