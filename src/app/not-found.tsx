import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section id="top" className="h-screen flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">404 - ページが見つかりません</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed sm:text-center">
            お探しのページは存在しないか、移動された可能性があります。
            <br className="hidden sm:block" />
            ご不便をおかけしますが、以下のリンクからホームページに戻ってください。
          </p>
        </div>
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
