import type { Metadata } from "next";

import WorkCard from "@/components/work-card";
import type { WorkItem } from "@/types";

export const metadata: Metadata = {
  title: "実績紹介",
  description: "武蔵下町情報舎のこれまでの実績・制作事例をご紹介します。",
};

const workItems: WorkItem[] = [
  {
    title: "エコノクエスト様 ブラウザゲーム制作",
    description: "金融教育カードゲーム「エコノクエスト」のランディングページとブラウザゲーム版を制作しました。Next.jsとTailwind CSS、React Hook Formを使用して、レスポンシブでユーザーフレンドリーなデザインを実現しています。",
    tags: ["Next.js", "Tailwind CSS", "React Hook Form"],
    link: "https://econo.quest/",
  },
  {
    title: "地域通貨ぶんじ様 HP制作",
    description: "国分寺の地域通貨「ぶんじ」に関するのホームページを制作しました。Next.jsとTailwind CSSを使用して、レスポンシブでユーザーフレンドリーなデザインを実現しています。",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://bunji.me/",
  },
  {
    title: "自社 HP制作",
    description: "自社のホームページを制作しました。Next.jsとTailwind CSSを使用して、レスポンシブでユーザーフレンドリーなデザインを実現しています。",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://shitamachi-it.work/",
  },
  {
    title: "ぶんじエネルギー様 HP制作",
    description: "ぶんじエネルギー様のホームページを制作しました。microCMSを使用して、クライアント様が簡単にコンテンツを更新できるようにしています。また、Resendを使用して、お問い合わせフォームからのメール送信機能も実装しています。",
    tags: ["Next.js", "Tailwind CSS", "microCMS", "Resend"],
    link: "https://www.bunene.co.jp/",
  },
];

export default function WorkPage() {
  return (
    <main>
      <section id="top" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">実績紹介</h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-12 sm:mb-16 text-center leading-relaxed">これまでにお手伝いした主な事例をご紹介します。</p>

          {workItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {workItems.map((item, index) => (
                <WorkCard key={index} {...item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-24 text-gray-400">
              <p className="text-4xl sm:text-5xl mb-6">🛠️</p>
              <p className="text-base sm:text-lg">実績を準備中です。しばらくお待ちください。</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
