const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/60 bg-[#fffaf1]/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Beijia Zhu home">
          <span className="h-2.5 w-2.5 rounded-full bg-[#8ba8cc] shadow-[0_0_24px_rgba(139,168,204,0.7)]" />
          <span className="font-display text-xl font-semibold tracking-wide text-[#33445b]">Beijia Zhu</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/45 p-1 shadow-[0_10px_32px_rgba(123,148,174,0.12)] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b] transition duration-300 hover:bg-[#e9f0fb] hover:text-[#33445b]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
