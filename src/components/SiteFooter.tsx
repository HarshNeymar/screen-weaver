import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-white w-full pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
        <div>
          <div className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Chawla Cranes</div>
          <div className="mb-8 space-y-3">
  <p className="text-stone-500 text-sm leading-relaxed font-medium">
    NCR&apos;s premium industrial lifting authority. Engineering precision
    from IMT Manesar to the heart of Delhi.
  </p>

  <p className="text-stone-400 text-sm leading-relaxed font-semibold">
    Chawla Cranes is a unit of Chawla Crane &amp; Heavy Labour Contractor.
  </p>
</div>
         <div className="flex gap-4">
  <a
    className="w-10 h-10 rounded bg-stone-900 flex items-center justify-center hover:bg-primary transition-colors border border-white/5"
    href="https://wa.me/919717459360"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact Chawla Cranes on WhatsApp"
  >
    <Icon name="share" className="text-lg" />
  </a>

  <a
    className="w-10 h-10 rounded bg-stone-900 flex items-center justify-center hover:bg-primary transition-colors border border-white/5"
    href="mailto:manesar@chawlacranes.com"
    aria-label="Email Chawla Cranes"
  >
    <Icon name="alternate_email" className="text-lg" />
  </a>
</div>
        </div>
        <div>
          <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-fixed-dim mb-8">Service Regions</h6>
          <ul className="space-y-4 text-xs font-bold tracking-wider text-stone-500">
            <li><Link to="/locations" className="hover:text-white transition-colors">IMT Manesar Hub</Link></li>
            <li><Link to="/locations" className="hover:text-white transition-colors">Gurugram Sector 44/45</Link></li>
            <li><Link to="/locations" className="hover:text-white transition-colors">Udyog Vihar Phase I-V</Link></li>
            <li><Link to="/locations" className="hover:text-white transition-colors">Delhi-NCR Operations</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-fixed-dim mb-8">Heavy Services</h6>
          <ul className="space-y-4 text-xs font-bold tracking-wider text-stone-500">
            <li><Link to="/services" className="hover:text-white transition-colors">Hydra Crane Rental</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Farana Fleet Support</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Industrial Recovery</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-fixed-dim mb-8">Gurugram Center</h6>
          <ul className="space-y-4 text-xs font-bold tracking-wider text-stone-500">
            <li className="flex items-start gap-3">
              <Icon name="location_on" className="text-primary-fixed-dim text-lg" />
              <span>Sector 56<br />Gurugram, Haryana 122051</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="call" className="text-primary-fixed-dim text-lg" />
              <span>+91 97174 59360</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="text-primary-fixed-dim text-lg" />
              <span>manesar@chawlacranes.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
          © 2024 Chawla Crane & Heavy Labour Contractor. Gurugram Industrial Hub Authority.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-stone-500">
  <Link
    to="/privacy-policy"
    className="transition-colors hover:text-primary-container"
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms-and-conditions"
    className="transition-colors hover:text-primary-container"
  >
    Terms &amp; Conditions
  </Link>
</div>
        <div className="flex gap-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary-fixed-dim">ISO 9001 CERTIFIED</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-primary-fixed-dim">NSIC REGISTERED</span>
        </div>
        
      </div>
    </footer>
  );
}
