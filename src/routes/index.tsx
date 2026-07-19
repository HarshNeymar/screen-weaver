import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chawla Cranes — Dominating Lifts in Gurugram & NCR" },
      {
        name: "description",
        content:
          "Premium crane rentals and heavy recovery for IMT Manesar, Gurugram Industrial Hub and Delhi NCR.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: "precision_manufacturing",
    title: "Hydra Crane Rental",
    body: "Optimized for tight manufacturing floors and factory installations across IMT Manesar.",
    bullets: ["14T - 40T Options", "Pick & Carry Precision"],
  },
  {
    icon: "settings_input_component",
    title: "Farana Fleet",
    body: "Articulating cranes for structural assembly and bridge construction in Gurugram.",
    bullets: ["High Stability Gear", "20T - 25T Specialists"],
  },
  {
    icon: "car_repair",
    title: "Heavy Recovery",
    body: "Specialized recovery for trucks, machinery, and heavy equipment across NH-48.",
    bullets: ["24/7 Roadside Assist", "Under-lift Systems"],
  },
];

function HomePage() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  function handleHeroSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this to a real endpoint (e.g. an API route or email service)
    // before launch. For now this only confirms receipt in the UI.
    setHeroSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <div className="bg-background text-on-background">
      <SiteNav />

      {/* Floating Emergency FAB */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl border-l-4 border-primary text-xs font-bold uppercase tracking-wider animate-bounce pointer-events-auto">
          24/7 NCR Recovery Live
        </div>
        <a
          href="tel:+919717459360"
          className="bg-primary-container text-on-primary-container w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform pointer-events-auto"
        >
          <Icon name="emergency_home" className="text-3xl" filled />
        </a>
      </div>

      <main>
        {/* Hero */}
        <section className="relative min-h-[900px] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Crane in Gurugram"
              className="w-full h-full object-cover"
              src="/images/cranes/160-ton-mobile-crane.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-primary/20 border border-primary/30 rounded text-primary-fixed-dim text-[10px] font-black tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Gurugram Industrial Hub Leader
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6">
                DOMINATING Lifts in <br />
                <span className="text-primary-container">Gurugram & NCR.</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl font-medium mb-8 max-w-xl leading-relaxed">
                Premium crane rentals and heavy recovery for IMT Manesar, Gurugram Industrial Hub,
                and Delhi NCR. Precision engineered for monumental infrastructure.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-700 flex items-center justify-center text-[10px] font-bold text-white">
                    L&T
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-800 flex items-center justify-center text-[10px] font-bold text-white">
                    DLF
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-900 flex items-center justify-center text-[10px] font-bold text-white">
                    TATA
                  </div>
                </div>
                <span className="text-stone-400 text-sm font-bold tracking-tight">
                  Trusted by Industry Titans across NCR
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 shadow-2xl">
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
                  Initiate Lift Plan
                </h3>
                {heroSubmitted ? (
                  <div role="status" className="py-8 text-center">
                    <p className="text-white font-black uppercase tracking-wide mb-2">
                      Request received
                    </p>
                    <p className="text-stone-400 text-sm">
                      Our deployment desk will call you back shortly.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleHeroSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="hero-service-type"
                          className="text-[10px] font-black uppercase text-stone-400 tracking-widest"
                        >
                          Service Type
                        </label>
                        <select
                          id="hero-service-type"
                          name="service_type"
                          className="w-full bg-stone-900/50 border border-stone-700 text-white text-sm rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>Hydra Crane</option>
                          <option>Farana Fleet</option>
                          <option>Heavy Recovery</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="hero-location"
                          className="text-[10px] font-black uppercase text-stone-400 tracking-widest"
                        >
                          Location
                        </label>
                        <select
                          id="hero-location"
                          name="location"
                          className="w-full bg-stone-900/50 border border-stone-700 text-white text-sm rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>IMT Manesar</option>
                          <option>Gurugram</option>
                          <option>Delhi NCR</option>
                          <option>Rewari/Bawal</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="hero-mobile"
                        className="text-[10px] font-black uppercase text-stone-400 tracking-widest"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="hero-mobile"
                        name="mobile"
                        type="tel"
                        required
                        pattern="[0-9+\s-]{7,15}"
                        placeholder="+91"
                        className="w-full bg-stone-900/50 border border-stone-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-primary outline-none px-4 py-3"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                    >
                      Get Technical Estimate
                    </button>
                    <p className="text-[10px] text-center text-stone-500 font-bold uppercase tracking-widest mt-4">
                      Typical Response: <span className="text-white">Under 15 Minutes</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-12 bg-surface-container border-b border-outline-variant/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <p className="text-center text-[10px] font-black text-secondary tracking-[0.3em] uppercase mb-4">
              Trusted Across NCR
            </p>

            <h2 className="text-center text-3xl md:text-5xl font-black tracking-tight uppercase text-on-surface">
              Major Projects
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-5 animate-marquee min-w-max px-6">
              {[
                "ALWANIYA PROJECT",
                "DLF DAHLIAS",
                "DLF DOWNTOWN",
                "DLF THE ARBOUR",
                "ACP COMPANY",
                "ULTRATECH",
                "GPTP COMPANY",
                "SB CONSTRUCTION",
                "SB CONTINENTAL",
                "RAMA CIVIL",
                "NCC",
                "MR PROJECTS",
                "WORLDMARK",
                "WORLDMARK AEROCITY",
                "POWER GRID DELHI",
                "BPTP SECTOR 102",
                "M3M",
                "MGS",
                "L&T",
                "J KUMAR INFRA",
              ].map((project, i) => (
                <div
                  key={i}
                  className="px-8 py-5 rounded-xl bg-surface-container-highest min-w-fit"
                >
                  <span className="text-lg md:text-xl font-black text-secondary tracking-tight whitespace-nowrap">
                    {project}
                  </span>
                </div>
              ))}

              {/* Duplicate for seamless infinite loop */}

              {[
                "ALWANIYA PROJECT",
                "DLF DAHLIAS",
                "DLF DOWNTOWN",
                "DLF THE ARBOUR",
                "ACP COMPANY",
                "ULTRATECH",
                "GPTP COMPANY",
                "SB CONSTRUCTION",
                "SB CONTINENTAL",
                "RAMA CIVIL",
                "NCC",
                "MR PROJECTS",
                "WORLDMARK",
                "WORLDMARK AEROCITY",
                "POWER GRID DELHI",
                "BPTP SECTOR 102",
                "M3M",
                "MGS",
                "L&T",
                "J KUMAR INFRA",
              ].map((project, i) => (
                <div
                  key={`duplicate-${i}`}
                  className="px-8 py-5 rounded-xl bg-surface-container-highest min-w-fit"
                >
                  <span className="text-lg md:text-xl font-black text-secondary tracking-tight whitespace-nowrap">
                    {project}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Solutions */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">
                  Core Competencies
                </h2>
                <p className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
                  Specialized Solutions for NCR Projects
                </p>
              </div>
              <Link
                to="/services"
                className="bg-primary text-on-primary px-6 py-3 rounded font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-md self-start md:self-end"
              >
                Explore Full Fleet
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-white rounded-2xl border border-outline-variant/50 p-6 hover:shadow-2xl hover:border-primary transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon
                      name={s.icon}
                      className="text-3xl text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-3 tracking-tight">{s.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed mb-6">{s.body}</p>
                  <ul className="text-[11px] font-bold text-on-surface uppercase tracking-widest space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structural Authority */}
        <section className="py-24 bg-mesh text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-4 px-4 py-2 border border-primary/40 rounded bg-stone-900/40 mb-10">
                  <Icon name="location_on" className="text-primary-fixed-dim text-sm" />
                  <span className="font-black tracking-[0.2em] uppercase text-[10px]">
                    Headquartered in IMT Manesar
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                  THE AUTHORITY FOR <br />
                  <span className="text-primary-container">NCR OPERATIONS.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-3 p-6 bg-stone-900/60 rounded-xl border-l-4 border-primary">
                    <h5 className="text-lg font-black text-primary-fixed-dim">IMT Manesar</h5>
                    <p className="text-stone-400 text-xs font-medium">
                      Largest fleet deployment for automotive and pharmaceutical plants in the
                      industrial hub.
                    </p>
                  </div>
                  <div className="space-y-3 p-6 bg-stone-900/60 rounded-xl border-l-4 border-primary">
                    <h5 className="text-lg font-black text-primary-fixed-dim">Cyber City Sector</h5>
                    <p className="text-stone-400 text-xs font-medium">
                      Precision high-rise structural support and equipment lifting for corporate
                      developments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-stone-950/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["10min", "Avg. Response Time"],
                    ["24/7", "Active Deployment"],
                    ["0", "Local Incidents"],
                    ["100+", "Gurugram Clients"],
                  ].map(([n, l]) => (
                    <div
                      key={l}
                      className="p-6 bg-stone-900/80 rounded-2xl border border-white/5 text-center"
                    >
                      <p className="text-4xl font-black text-primary-container mb-1">{n}</p>
                      <p className="text-[9px] uppercase tracking-widest font-black text-stone-500">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-6 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-black text-lg">Need Immediate Assistance?</p>
                    <p className="text-stone-400 text-xs">Our Gurugram center is active now.</p>
                  </div>
                  <a
                    href="tel:+919717459360"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                  >
                    <Icon name="call" className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency banner */}
        <section className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary-container rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-on-primary-container text-primary-container text-[10px] font-black uppercase tracking-widest rounded mb-4">
                  Urgent Recovery
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-primary-container">
                  24/7 Emergency Deployment
                </h2>
                <p className="text-on-primary-container/70 text-lg font-medium mt-2">
                  Breakdown recovery and equipment rescue across NCR within 60 minutes.
                </p>
              </div>
              <a
                href="tel:+919717459360"
                className="bg-on-primary-container text-primary-container px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform relative z-10"
              >
                <Icon name="phone_in_talk" filled />
                SOS Recovery Line
              </a>
              <div className="absolute right-0 top-0 w-1/3 h-full blueprint-grid opacity-20 pointer-events-none" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
