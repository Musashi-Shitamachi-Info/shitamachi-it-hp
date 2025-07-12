export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-4 w-full shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-white">武蔵下町情報舎</div>
          <nav>
            <ul className="flex gap-4 md:gap-8">
              <li>
                <a href="#services" className="hover:text-red-200 transition-colors font-medium">
                  サービス
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-red-200 transition-colors font-medium">
                  強み
                </a>
              </li>
              <li>
                <a href="#area" className="hover:text-red-200 transition-colors font-medium">
                  対応地域
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-200 transition-colors font-medium">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
