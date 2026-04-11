import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ヒガコウカシタ ラジオ・レラのリンク集",
  description: "東小金井発、起業・開業にチャレンジする人を応援するポッドキャストです🎙️",
};

const links = [
  {
    label: "Spotify",
    icon: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17.61 16.906v-.007a.9.9 0 0 0-.464-.791l-.005-.002a13.24 13.24 0 0 0-6.999-1.797h.015a21 21 0 0 0-4.626.559l.142-.028a.75.75 0 0 0-.656.816v-.003v.012c0 .205.081.391.212.528c.132.14.318.227.525.227l.031-.001h-.001c.225-.034.42-.077.611-.133l-.032.008a18.5 18.5 0 0 1 3.786-.422h.01a11.74 11.74 0 0 1 6.258 1.639l-.054-.03c.146.097.323.159.513.172h.004a.734.734 0 0 0 .734-.734v-.017v.001zm1.5-3.36v-.032c0-.395-.219-.74-.542-.918l-.005-.003c-2.358-1.387-5.195-2.207-8.223-2.207q-.178 0-.354.004h.018a17.5 17.5 0 0 0-4.858.687l.123-.031a.94.94 0 0 0-.749 1.004v-.004v.004c0 .516.418.934.934.934h.004c.218-.028.414-.072.603-.131l-.024.007a14.6 14.6 0 0 1 3.894-.516h.027h-.001a14.6 14.6 0 0 1 7.695 1.975l-.07-.038c.169.108.371.181.588.203h.01a.934.934 0 0 0 .934-.934v-.004zm1.69-3.874l.001-.052c0-.449-.251-.839-.62-1.039l-.006-.003a15.8 15.8 0 0 0-4.472-1.707l-.106-.019c-1.596-.372-3.429-.586-5.312-.586h-.05h.003a20.2 20.2 0 0 0-5.83.769L4.55 7a1.24 1.24 0 0 0-.6.398l-.002.002a1.14 1.14 0 0 0-.24.761v-.003v.029c0 .305.122.582.321.784c.196.203.471.328.775.328h.032h-.002q.343-.03.645-.131l-.02.006a17.5 17.5 0 0 1 4.814-.578h-.014h.044c1.699 0 3.352.194 4.939.56l-.147-.029a13.7 13.7 0 0 1 4.028 1.519l-.067-.035c.178.111.393.18.623.187h.012c.304 0 .579-.122.778-.32c.205-.194.333-.469.333-.773l-.001-.035zM24 12v.09c0 2.187-.598 4.234-1.64 5.987l.03-.054a12.05 12.05 0 0 1-4.311 4.337l-.056.03c-1.729 1.012-3.806 1.609-6.024 1.609s-4.295-.597-6.081-1.64l.057.031a12.05 12.05 0 0 1-4.337-4.311l-.03-.056C.596 16.294-.001 14.217-.001 11.999s.597-4.295 1.64-6.081l-.031.057a12.05 12.05 0 0 1 4.311-4.337l.056-.03C7.704.596 9.781-.001 11.999-.001s4.295.597 6.081 1.64l-.057-.031a12.05 12.05 0 0 1 4.337 4.311l.03.056A11.6 11.6 0 0 1 24 11.908v.096v-.005z"
        />
      </svg>
    ),
    url: "https://open.spotify.com/show/1SBSElBLwNwMiwwZoi0X8S?si=080558aa12514b37",
    description: "Spotifyで聴く",
  },
  {
    label: "Stand.fm",
    icon: <Image src="/standfm_icon.webp" alt="Stand.fm" width={48} height={48} />,
    url: "https://stand.fm/channels/69991e02a26898585572aab2",
    description: "Stand.fmで聴く",
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 512 512" className="size-9">
        <path
          fill="currentColor"
          d="M224 202.66A53.34 53.34 0 1 0 277.36 256A53.38 53.38 0 0 0 224 202.66m124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33ZM224 338a82 82 0 1 1 82-82a81.9 81.9 0 0 1-82 82m85.38-148.3a19.14 19.14 0 1 1 19.13-19.14a19.1 19.1 0 0 1-19.09 19.18ZM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0c-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132c1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0c25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88"
        />
      </svg>
    ),
    url: "https://www.instagram.com/higakoukashita.radio.rera/",
    description: "Instagramページ",
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 14 14">
        <path fill="currentColor" d="M0 12.923V1.077A1.077 1.077 0 0 1 1.077 0h11.846A1.077 1.077 0 0 1 14 1.077v11.846A1.077 1.077 0 0 1 12.923 14h-3.23V8.895h.764a.657.657 0 0 0 .657-.657V7.41a.655.655 0 0 0-.657-.657h-.722V5.74c0-.905.41-.905.819-.905h.527a.6.6 0 0 0 .464-.193a.63.63 0 0 0 .194-.464v-.796a.67.67 0 0 0-.647-.69H9.854a2.498 2.498 0 0 0-2.574 2.8v1.26h-.69a.657.657 0 0 0-.667.657v.83a.657.657 0 0 0 .668.656h.689V14H1.077A1.077 1.077 0 0 1 0 12.923" />
      </svg>
    ),
    url: "https://www.facebook.com/higakoukashita.radio.rera",
    description: "Facebookページ",
  },
  {
    label: "武蔵下町情報舎",
    icon: (
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1" />
      </svg>
    ),
    url: "https://shitamachi-it.work/links/shitamachi-it/",
    description: "運営",
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-pearl-bush-50 to-pearl-bush-100 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-md mx-auto">
        {/* プロフィール */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <Image src="/higakoukashita-radio-rera.webp" alt="ヒガコウカシタ ラジオ・レラ ロゴ" width={96} height={96} className="rounded-full shadow-md" loading="eager" fetchPriority="high" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-pearl-bush-900 mb-2">ヒガコウカシタ ラジオ・レラ</h1>
          <p className="text-sm sm:text-base text-pearl-bush-700">
            <span className="inline-block">東小金井発、</span>
            <span className="inline-block">起業・開業にチャレンジする人</span>
            <span className="inline-block">を応援するポッドキャストです🎙️</span>
          </p>
        </div>

        {/* リンク一覧 */}
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label} className="even:pb-4 even:border-b-2 even:border-pearl-bush-300 even:border-dashed">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full bg-white border border-pearl-bush-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-8 shrink-0" aria-hidden="true">
                  {link.icon}
                </div>
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
