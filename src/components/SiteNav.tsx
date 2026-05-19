import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-surface-container-high shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link to="/" className="text-2xl font-black text-stone-900 tracking-tighter uppercase">
          Chawla Cranes
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-bold text-xs uppercase tracking-widest text-stone-600 hover:text-primary transition-colors"
              activeProps={{ className: "font-bold text-xs uppercase tracking-widest text-primary border-b-2 border-primary pb-1" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end leading-none">
            <span className="text-[10px] font-black uppercase text-stone-400 tracking-tighter">Gurugram 24/7 Hotline</span>
            <span className="text-sm font-bold text-on-surface">+91 97174 59360</span>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-6 py-3 rounded font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-md"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
