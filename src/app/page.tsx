import ServiceCard from "@/components/service-card";
import StrengthCard from "@/components/strength-card";
import TargetArea from "@/components/target-area";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="top" className="bg-gradient-to-br from-gray-50 to-gray-200 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
            <span className="inline-block">地域に根ざした</span>
            <span className="inline-block">IT活用支援</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 text-center">
            <span className="inline-block">多摩地区の事業者様の</span>
            <span className="inline-block">DX推進をお手伝いします</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed sm:text-center">
            地域の中小企業・商店のデジタル化を全力でサポート。
            <br className="hidden sm:block" />
            <span className="sm:inline-block">ホームページ制作からWebアプリ開発、業務効率化まで、</span>
            <span className="sm:inline-block">ITのお困りごとをワンストップで解決します。</span>
          </p>
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            まずは無料相談から
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">ご提供サービス</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 list-none">
            <ServiceCard icon="🌐" title="ホームページ制作" description="集客につながるSEO対策済みのホームページを制作。スマホ対応、保守サポート付きで安心です。" />
            <ServiceCard icon="⚡" title="Webアプリケーション開発" description="顧客管理や予約システムなど、業務に特化したWebアプリケーションをカスタム開発いたします。" />
            <ServiceCard icon="🛠️" title="ITツール導入支援" description="クラウドサービスや業務効率化ツールの選定から導入、運用サポートまで一貫してお手伝いします。" />
            <ServiceCard icon="📱" title="SNS活用支援" description="Instagram、Facebook等のSNS導入支援。アカウント設定やホームページ連携まで幅広く対応します。" />
          </ul>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">武蔵下町情報舎の強み</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 list-none">
            <StrengthCard
              title="💻 現場で培った技術力"
              description="ただホームページを作るだけでなく、「検索で見つけてもらいやすくする工夫」や「安全に使えるサイト作り」など、お客様のビジネスに本当に役立つ技術を提供します。"
            />
            <StrengthCard
              title="🏪 地域密着のサポート"
              description="地域に住み、地域の事業者との距離が近いからこそ実現できるきめ細やかなサポート。急なトラブル対応や機能追加にも迅速に対応し、導入後の運用支援まで継続的にサポートします。"
            />
            <StrengthCard
              title="🎯 ワンストップIT支援"
              description="Webアプリ開発、ITツール導入、SNS活用まで幅広く対応。事業成長に合わせて段階的にサービスを拡張でき、一つの窓口で全てのIT課題を解決できます。"
            />
          </ul>
        </div>
      </section>

      {/* Target Area Section */}
      <section id="area" className="py-12 sm:py-16 md:py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">対応地域</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            <span className="inline-block">多摩地区を中心に</span>
            <span className="inline-block">サービスを提供しています</span>
          </p>
          <TargetArea />
          <p className="text-sm sm:text-base text-gray-500">
            <span className="inline-block">※上記以外の地域もご相談ください。</span>
            <span className="inline-block">リモート対応も可能です。</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 md:mb-12">武蔵下町情報舎について</h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-loose text-left">
              地域の中小企業や商店では、デジタル化の波に取り残されているケースが少なくありません。私たちは、現場で培った技術力と地域密着のサポート力を活かして、こうした地域の課題をITの力で解決したいと考えています。
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-loose text-left">
              単にシステムを作るだけでなく、お客様の立場に立って本当に必要な機能を見極め、使いやすく効果的なITソリューションを提供します。ITの力で地域の事業者の成長を支援し、地域全体の活性化に貢献することが私たちの目標です。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-lg mb-12 leading-relaxed">
            ITに関するお困りごとは、お気軽にご相談ください。
            <br />
            初回相談は無料で承っております。
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-xl mb-4">📞 電話でのお問い合わせ</p>
              <p className="text-2xl font-bold mb-8">080-XXXX-XXXX</p>
            </div>
            <div>
              <p className="text-xl mb-4">📧 メールでのお問い合わせ</p>
              <p className="text-xl font-bold">info@musashi-shimomachi.jp</p>
            </div>
          </div>
          <p className="text-gray-400 mt-8">営業時間：平日 9:00〜18:00（土日祝日もご相談可能）</p>
        </div>
      </section>
    </main>
  );
}
