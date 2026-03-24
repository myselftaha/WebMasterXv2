type NavLink = {
  label: string;
  href: string;
  hasCaret?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services", hasCaret: true },
  { label: "Website Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources", hasCaret: true },
  { label: "Company", href: "#company", hasCaret: true }
];

export default function Navbar() {
  return (
    <header className="relative z-30 bg-[#050505]">
      <div
        className="h-1 bg-[linear-gradient(90deg,#ff6b6b,#f6d84c,#74ff7c,#64e2ff,#7f63ff)]"
        aria-hidden="true"
      />
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-5 text-[0.95rem]">
        <div className="text-[0.9rem] font-semibold tracking-[0.4em]" aria-label="PAKWEBMASTER">
          PAKWEBMASTER
        </div>
        <div className="flex flex-1 items-center justify-center gap-7 max-[960px]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white/90 transition hover:text-white"
            >
              <span>{link.label}</span>
              {link.hasCaret ? (
                <span
                  className="inline-block h-[6px] w-[6px] -translate-y-[1px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-white/90"
                  aria-hidden="true"
                />
              ) : null}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="font-medium text-white/90 transition hover:text-white">
            Login
          </a>
          <button
            className="hidden items-center font-semibold tracking-[0.06em] text-white max-[960px]:inline-flex"
            type="button"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}
