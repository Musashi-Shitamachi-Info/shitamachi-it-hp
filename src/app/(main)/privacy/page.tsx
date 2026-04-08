import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "武蔵下町情報舎のプライバシーポリシーページ",
  openGraph: {
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <section id="top" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">プライバシーポリシー</h1>

          <div className="space-y-6 sm:space-y-8 text-gray-700">
            <div>
              <p className="text-sm sm:text-base leading-relaxed">武蔵下町情報舎（以下「当社」といいます。）は、お客様の個人情報の重要性を認識し、個人情報保護法及び関連法令等を遵守するとともに、以下のプライバシーポリシー（以下「本ポリシー」といいます。）に従って、個人情報を適切に取り扱います。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">1. 個人情報の定義</h2>
              <p className="text-sm sm:text-base leading-relaxed">本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">2. 個人情報の収集方法</h2>
              <p className="text-sm sm:text-base leading-relaxed">当社は、以下の方法により個人情報を収集いたします。</p>
              <ul className="mt-2 ml-4 space-y-1 text-sm sm:text-base list-disc list-inside">
                <li>お問い合わせフォームでの入力</li>
                <li>メールでのやり取り</li>
                <li>電話でのやり取り</li>
                <li>その他直接的な方法による収集</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">3. 個人情報の利用目的</h2>
              <p className="text-sm sm:text-base leading-relaxed">当社は、収集した個人情報を以下の目的で利用いたします。</p>
              <ul className="mt-2 ml-4 space-y-1 text-sm sm:text-base list-disc list-inside">
                <li>お問い合わせへの回答</li>
                <li>サービス提供のためのご連絡</li>
                <li>サービス向上のための分析</li>
                <li>重要なお知らせの配信</li>
                <li>その他、お客様にサービスを提供するために必要な業務</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">4. 個人情報の第三者提供</h2>
              <p className="text-sm sm:text-base leading-relaxed">当社は、法令に基づく場合や、お客様の同意をいただいた場合を除き、収集した個人情報を第三者に提供することはありません。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">5. 個人情報の安全管理</h2>
              <p className="text-sm sm:text-base leading-relaxed">当社は、個人情報の漏洩、滅失又は毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">6. 個人情報の開示・訂正・削除</h2>
              <p className="text-sm sm:text-base leading-relaxed">お客様は、当社が保有する個人情報について、開示、訂正、利用停止、削除等を求めることができます。これらのご請求については、下記お問い合わせ先までご連絡ください。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">7. アクセス解析ツールに​ついて</h2>
              <p className="text-sm sm:text-base leading-relaxed">当社のウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">8. プライバシーポリシーの変更</h2>
              <p className="text-sm sm:text-base leading-relaxed">本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">9. お問い合わせ</h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4">個人情報の取り扱いに関するお問い合わせは、下記お問い合わせフォームよりご連絡ください。</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">最終更新日： 2025/09/29</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
