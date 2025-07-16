import Image from "next/image";
import NavLink from "./NavLink";

export default function Header() {
  return (
    // <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 px-2 sm:p-4 w-full shadow-lg sticky top-0 z-50">
    <header className="bg-gradient-to-br from-pearl-bush-50 to-pearl-bush-100 text-black py-3 px-2 sm:p-4 w-full shadow-lg sticky top-0 z-50 border-b border-mischka-200">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <a href="#top" className="text-lg sm:text-xl md:text-2xl font-bold">
            <div className="flex items-end gap-2">
              <Image src="/logo.png" width="28" height="28" alt="" className="rounded" />
              武蔵下町情報舎
            </div>
          </a>
          <nav>
            <ul className="flex gap-1 sm:gap-2 md:gap-4">
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
