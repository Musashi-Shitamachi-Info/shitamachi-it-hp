import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BASE_URL } from "@/constants";

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
    url: BASE_URL,
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
  {
    label: "ヒガコウカシタ ラジオ・レラ",
    icon: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17.61 16.906v-.007a.9.9 0 0 0-.464-.791l-.005-.002a13.24 13.24 0 0 0-6.999-1.797h.015a21 21 0 0 0-4.626.559l.142-.028a.75.75 0 0 0-.656.816v-.003v.012c0 .205.081.391.212.528c.132.14.318.227.525.227l.031-.001h-.001c.225-.034.42-.077.611-.133l-.032.008a18.5 18.5 0 0 1 3.786-.422h.01a11.74 11.74 0 0 1 6.258 1.639l-.054-.03c.146.097.323.159.513.172h.004a.734.734 0 0 0 .734-.734v-.017v.001zm1.5-3.36v-.032c0-.395-.219-.74-.542-.918l-.005-.003c-2.358-1.387-5.195-2.207-8.223-2.207q-.178 0-.354.004h.018a17.5 17.5 0 0 0-4.858.687l.123-.031a.94.94 0 0 0-.749 1.004v-.004v.004c0 .516.418.934.934.934h.004c.218-.028.414-.072.603-.131l-.024.007a14.6 14.6 0 0 1 3.894-.516h.027h-.001a14.6 14.6 0 0 1 7.695 1.975l-.07-.038c.169.108.371.181.588.203h.01a.934.934 0 0 0 .934-.934v-.004zm1.69-3.874l.001-.052c0-.449-.251-.839-.62-1.039l-.006-.003a15.8 15.8 0 0 0-4.472-1.707l-.106-.019c-1.596-.372-3.429-.586-5.312-.586h-.05h.003a20.2 20.2 0 0 0-5.83.769L4.55 7a1.24 1.24 0 0 0-.6.398l-.002.002a1.14 1.14 0 0 0-.24.761v-.003v.029c0 .305.122.582.321.784c.196.203.471.328.775.328h.032h-.002q.343-.03.645-.131l-.02.006a17.5 17.5 0 0 1 4.814-.578h-.014h.044c1.699 0 3.352.194 4.939.56l-.147-.029a13.7 13.7 0 0 1 4.028 1.519l-.067-.035c.178.111.393.18.623.187h.012c.304 0 .579-.122.778-.32c.205-.194.333-.469.333-.773l-.001-.035zM24 12v.09c0 2.187-.598 4.234-1.64 5.987l.03-.054a12.05 12.05 0 0 1-4.311 4.337l-.056.03c-1.729 1.012-3.806 1.609-6.024 1.609s-4.295-.597-6.081-1.64l.057.031a12.05 12.05 0 0 1-4.337-4.311l-.03-.056C.596 16.294-.001 14.217-.001 11.999s.597-4.295 1.64-6.081l-.031.057a12.05 12.05 0 0 1 4.311-4.337l.056-.03C7.704.596 9.781-.001 11.999-.001s4.295.597 6.081 1.64l-.057-.031a12.05 12.05 0 0 1 4.337 4.311l.03.056A11.6 11.6 0 0 1 24 11.908v.096v-.005z"
        />
      </svg>
    ),
    url: "/links/higakoukashita-radio-rera",
    description: "東小金井発、チャレンジする人を応援するポッドキャスト",
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-pearl-bush-50 to-pearl-bush-100 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-md mx-auto">
        {/* プロフィール */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <Image src="/logo.webp" alt="武蔵下町情報舎 ロゴ" width={96} height={96} className="rounded shadow-md" loading="eager" fetchPriority="high" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-pearl-bush-900 mb-2">武蔵下町情報舎</h1>
          <p className="text-sm sm:text-base text-pearl-bush-700">多摩地区のITサポート専門</p>
        </div>

        {/* リンク一覧 */}
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label} className="nth-3:pb-4 nth-3:border-b-2 nth-3:border-pearl-bush-300 nth-3:border-dashed">
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
