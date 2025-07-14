interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <a href={href} className="relative px-4 py-2 font-medium text-white/90 hover:text-white transition-all duration-300 group">
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      </a>
    </li>
  );
}
