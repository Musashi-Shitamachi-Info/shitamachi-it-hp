import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">お問い合わせ</h2>

        <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
          <span className="inline-block">ITに関するお困りごとは、</span>
          <span className="inline-block">お気軽にご相談ください。</span>
          <br className="hidden sm:block" />
          <span className="inline-block">初回相談は無料で承っております。</span>
        </p>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfM6u1weCuTx58dzygIwtnU-4hToUcPHQaA8Qd0oZbhcPWaZQ/viewform?usp=dialog" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg" target="_blank" rel="noopener noreferrer">
          ご相談はこちらから
        </Link>

        <p className="text-sm sm:text-base mt-6 sm:mt-8">
          <span className="inline-block">営業時間：平日 9:00〜18:00</span>
          <span className="inline-block">（土日祝日もご相談可能）</span>
        </p>

        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/privacy" className="text-sm sm:text-base mt-6 inline-block hover:underline text-white/80">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/links/shitamachi-it/" className="text-sm sm:text-base mt-6 inline-block hover:underline text-white/80">
              リンク集
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
