export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-200 pt-32 pb-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">地域に根ざしたIT活用支援</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">多摩地区の事業者様のDX推進をお手伝いします</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            現役ITエンジニアが、地域の中小企業・商店のデジタル化を全力でサポート。
            <br className="hidden md:block" />
            ホームページ制作からWebアプリ開発、業務効率化まで、ITのお困りごとをワンストップで解決します。
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            まずは無料相談から
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">提供サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ホームページ制作</h3>
              <p className="text-gray-600 leading-relaxed">集客につながるSEO対策済みのホームページを制作。スマホ対応、保守サポート付きで安心です。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Webアプリケーション開発</h3>
              <p className="text-gray-600 leading-relaxed">顧客管理や予約システムなど、業務に特化したWebアプリケーションをカスタム開発いたします。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ITツール導入支援</h3>
              <p className="text-gray-600 leading-relaxed">クラウドサービスや業務効率化ツールの選定から導入、運用サポートまで一貫してお手伝いします。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">SNS活用支援</h3>
              <p className="text-gray-600 leading-relaxed">Instagram、Facebook等のSNSを活用した集客支援。投稿企画から運用代行まで対応可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">武蔵下町情報舎の強み</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">💻 現役エンジニアの技術力</h3>
              <p className="text-gray-600 leading-loose">
                現役のWebエンジニアとして最新の技術動向に精通。単なる制作にとどまらず、SEO対策、セキュリティ対策、パフォーマンス最適化まで技術的な観点から質の高いサービスを提供します。
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">🏪 地域密着の手厚いサポート</h3>
              <p className="text-gray-600 leading-loose">
                地域に住み、地域の事業者との距離が近いからこそ実現できるきめ細やかなサポート。急なトラブル対応や機能追加にも迅速に対応し、導入後の運用支援まで継続的にサポートします。
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">🎯 ワンストップIT支援</h3>
              <p className="text-gray-600 leading-loose">
                ホームページ制作だけでなく、Webアプリ開発、ITツール導入、SNS活用まで幅広く対応。事業成長に合わせて段階的にサービスを拡張でき、一つの窓口で全てのIT課題を解決できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Area Section */}
      <section id="area" className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">対応地域</h2>
          <p className="text-lg text-gray-600 mb-8">武蔵の国・多摩地区を中心にサービスを提供しています</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">府中市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">国分寺市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">小金井市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">国立市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">立川市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">調布市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">三鷹市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">武蔵野市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">狛江市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">多摩市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">稲城市</span>
            <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-full font-medium">その他多摩地区</span>
          </div>
          <p className="text-gray-500">※上記以外の地域もご相談ください。リモート対応も可能です。</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">武蔵下町情報舎について</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-loose">
              地域の中小企業や商店では、デジタル化の波に取り残されているケースが少なくありません。 私たちは、現役ITエンジニアの技術力と地域密着のサポート力を活かして、
              こうした地域の課題をITの力で解決したいと考えています。
            </p>
            <p className="text-lg text-gray-700 leading-loose">
              単にシステムを作るだけでなく、お客様の立場に立って本当に必要な機能を見極め、 使いやすく効果的なITソリューションを提供します。
              ITの力で地域の事業者の成長を支援し、地域全体の活性化に貢献することが私たちの目標です。
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
