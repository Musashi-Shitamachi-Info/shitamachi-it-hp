import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-4 w-full shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-white">武蔵下町情報舎</div>
          <nav>
            <ul className="flex gap-2 md:gap-4">
              <NavLink href="#services">サービス</NavLink>
              <NavLink href="#strengths">強み</NavLink>
              <NavLink href="#area">対応地域</NavLink>
              <NavLink href="#contact">お問い合わせ</NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
