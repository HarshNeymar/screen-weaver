import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";
import { FleetTabs } from "@/components/FleetTabs";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Fleet & Services | Chawla Cranes — Heavy Lift Solutions" },
      { name: "description", content: "Hydra, Farana, tower and crawler cranes plus heavy recovery, towing and earthmoving across Gurugram, Noida and Manesar." },
    ],
  }),
  component: ServicesPage,
});

type Section = {
  id: string;
  icon: string;
  title: string;
  body: string;
  cta: { label: string; icon: string };
  img: string;
  imgRight?: boolean;
  badge: string;
  rows: [string, string, string?][];
};

const sections: Section[] = [
  {
    id: "hydra-farana",
    icon: "precision_manufacturing",
    title: "Pick & Carry: Hydra & Farana",
    body: "Optimized for high-maneuverability industrial lifting and factory shifting. Features zero-radius turn capabilities for tight corridors.",
    cta: { label: "Check Availability", icon: "calendar_today" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbrYdBs50UTeHnCdd9_-H7tmA6GkAA5jwby6FA9jzGVNEdqyCKc_muYjl16-TqYflaBgePQ8h8FmE3AVJFEaj8LRanmdmlCzO5LnhftlCDN79QczKgOEbTbWh1-519H71oPsv6JYkd-aUFZEwVdadbc5ClT5OGKiki5mDKBBdBj4hUPr0WYF2voZ65hi9g8-LVbONozFv005KrDhrXNz8PBqQDdEbmD4TFy5bnESwihTGRXAyiPnV4DLM-06aFIaRK-WhMoXtSfvU",
    badge: "Mobile Units",
    rows: [
      ["Max Capacity", "12T - 25T Models", "Varies by boom extension"],
      ["Max Reach", "11.5m - 22m", "Horizontal & Vertical"],
      ["Typical Use", "Factory Shifting, Steel Erection, Loading/Unloading"],
    ],
  },
  {
    id: "tower-cranes",
    icon: "architecture",
    title: "High-Rise: Tower Cranes",
    body: "Essential for skyscraper construction and large-scale infrastructure projects. Our fleet includes Luffing Jib and Flat Top configurations.",
    cta: { label: "Book this Machine", icon: "engineering" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYr5Pyn7gZW3uQCFzDSJ9nR-pSHeYK_0FzHB1-AtCopylVedza5WLDj4ScdLcYDUHWqxDUfIj5pl-UJMCyOikyd_8qpVxZMAD0XxPEv1a_NqAnflFhzt0VSLrGGMYK24vHQoh5QMybQ6H46uW6DRdhFFgZxejIW_5mglodniIKjrpaDLkzxblkXO_6acBwIR9iaLCHoMPowjNM-DXDriIAzoE_p5lR12Ivv02f9y4mnj1404j5o6emsNVjb-87KUDt1qit9Yg_QXI",
    imgRight: true,
    badge: "Static Units",
    rows: [
      ["Max Capacity", "6T - 40T Tip Load", "Configuration dependent"],
      ["Jib Length", "Up to 80m", "Modular sections"],
      ["Typical Use", "Commercial Towers, Metros, Bridge Pylons"],
    ],
  },
  {
    id: "crawler-cranes",
    icon: "conveyor_belt",
    title: "Heavy Duty: Crawler Cranes",
    body: "Stability on soft ground and unmatched lifting capacity. Ideal for long-duration infrastructure projects requiring heavy component placement.",
    cta: { label: "Request Specs", icon: "description" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD24Vn_gE_lp4D4cVDabV_a1MwX6BJmv1rHudNnWc_KUUa9ofabHkrbblvKO_S2OiNWv4eFE-j--BHamrDC-Ew1Wt9Vn6I70BmE3-4QlKg9FkzdejmDdNY8qJJDdvV31BeqUfId0ClOgfR-PaNHiX5EaZFjb7aX10FLXXQDMZcx1b-CdkHYyfB6-PibXPWm6IuVRC3EgqbULfhP1tq_BlP_GVcPN-iuDkCGlXXT03Fd2NArXaNisCiGA1j0AujOT0ulUVgeToD6y5Y",
    badge: "All-Terrain Tracked",
    rows: [
      ["Max Capacity", "50T - 650T", "Lattice boom versatility"],
      ["Working Height", "Up to 150m", "With luffing fly jib"],
      ["Typical Use", "Refineries, Power Plants, Wind Turbine Assembly"],
    ],
  },
];

function ServicesPage() {
  return (
    <div className="bg-background text-on-surface">
      <SiteNav />

      <main className="pt-20">
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="industrial cranes"
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBcuCDcRmynSXiOwjKmjaV6CF34fKQyyiydqa7MPADNF1ZG0OTnNi4rA5f4gsv3Z_7jf_HFAFUbbJk-RtgENADeNYmt4D7ajIwiSiCy_GrKwln1tkR6OcKZLeIdxJJE6Jz4oyTN_C8Py9LZwO5F7RTNEsI4lTIbNjFOHmMgtvTcO2tIbprfuT24QsA2QJz-iAqM5pTJWTrrcS4tFRDvKEusYeDT540CD-tyH95kfRwP_E5Q9Lby2G3p5wyH-AtHe1x6LD0Xoy177Q"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/60 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container font-bold tracking-widest uppercase text-xs mb-6 rounded-sm">
                Industrial Powerhouse
              </span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 uppercase">
                Heavy Lift <br />
                <span className="text-primary-container">& Technical Logistics</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l-4 border-primary-container pl-6">
                North India's most versatile heavy-duty fleet. 24-hour mobilization across{" "}
                <span className="text-white font-bold">Gurugram, Noida, and Manesar</span>.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                  <Icon name="verified" className="text-primary-container text-sm" />
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Certified Operators</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                  <Icon name="build" className="text-primary-container text-sm" />
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Daily Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FleetTabs />

        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-32">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded">
                      <Icon name={s.icon} className="text-on-primary-container" />
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tight">{s.title}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {!s.imgRight && <img alt={s.title} src={s.img} className="rounded-xl w-full h-64 object-cover" />}
                    <div className="flex flex-col justify-center">
                      <p className="text-secondary leading-relaxed mb-6">{s.body}</p>
                      <button className="bg-primary text-on-primary w-fit px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-on-background transition-colors flex items-center gap-2">
                        {s.cta.label} <Icon name={s.cta.icon} className="text-sm" />
                      </button>
                    </div>
                    {s.imgRight && <img alt={s.title} src={s.img} className="rounded-xl w-full h-64 object-cover" />}
                  </div>
                  <div className="overflow-hidden rounded-xl border border-outline-variant/30">
                    <div className="bg-surface-container-high p-4 border-b border-outline-variant/30 flex justify-between items-center">
                      <h3 className="font-black uppercase text-sm tracking-widest text-secondary">Technical Spec Sheet</h3>
                      <span className="text-[10px] bg-primary-container px-2 py-0.5 rounded font-bold uppercase">{s.badge}</span>
                    </div>
                    <table className="w-full text-left border-collapse">
                      <tbody className="divide-y divide-outline-variant/10">
                        {s.rows.map((r, i) => (
                          <tr key={i} className="hover:bg-surface-container-low transition-colors">
                            <td className="p-4 font-bold">{r[0]}</td>
                            <td className="p-4 text-right" colSpan={r[2] ? 1 : 2}>{r[1]}</td>
                            {r[2] && <td className="p-4 text-secondary italic text-sm">{r[2]}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}

              <section className="bg-surface-container p-10 rounded-2xl border border-primary/10">
                <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Ancillary Support Services</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="car_repair" className="text-primary" />
                      <h3 className="text-xl font-bold uppercase">Heavy Recovery & Towing</h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      Specialized recovery for stranded heavy machinery and oversized commercial vehicles across North Indian highways. 24/7 emergency response.
                    </p>
                    <a className="text-primary font-black uppercase text-xs tracking-widest inline-flex items-center gap-1 hover:underline" href="tel:+919717459360">
                      Emergency Line →
                    </a>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="agriculture" className="text-primary" />
                      <h3 className="text-xl font-bold uppercase">Earthmoving (JCB/Backhoe)</h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      Integrated site preparation solutions. Our earthmoving fleet complements our lifting services for seamless site mobilization.
                    </p>
                    <a className="text-primary font-black uppercase text-xs tracking-widest inline-flex items-center gap-1 hover:underline" href="/contact">
                      Rent Earthmovers →
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div className="bg-on-background text-white p-8 rounded-xl shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-2xl font-black uppercase leading-tight mb-2 relative z-10">
                    Instant<br />Mobilization
                  </h3>
                  <p className="text-stone-400 text-xs mb-8 relative z-10">Immediate 24-hour dispatch for NCR operations.</p>
                  <div className="space-y-4 mb-8">
                    {["Gurugram Central", "Noida Ind. Area", "Manesar Hub"].map((l) => (
                      <div key={l} className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/10 hover:border-primary-container transition-colors cursor-pointer">
                        <Icon name="location_on" className="text-primary-container" />
                        <span className="text-xs font-bold uppercase tracking-widest">{l}</span>
                      </div>
                    ))}
                  </div>
                  <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Site Location"
                      className="w-full bg-white/5 border border-white/10 rounded p-4 text-white focus:ring-1 focus:ring-primary-container focus:border-transparent transition-all outline-none text-sm"
                    />
                    <button className="w-full bg-primary-container text-on-primary-container font-black uppercase tracking-widest py-4 rounded hover:bg-inverse-primary transition-colors flex items-center justify-center gap-2">
                      Check Fleet Status <Icon name="bolt" />
                    </button>
                  </form>
                </div>

                <div className="bg-white border border-outline-variant/30 p-8 rounded-xl space-y-6">
                  <h4 className="font-black uppercase tracking-widest text-[10px] text-secondary">Maintenance & Compliance</h4>
                  <div className="space-y-6">
                    {[
                      { c: "bg-green-100 text-green-700", icon: "history_edu", t: "Certified Operators", b: "All pilots undergo rigorous biannual safety recertification and medical checks." },
                      { c: "bg-amber-100 text-amber-700", icon: "settings_suggest", t: "Rigorous Maintenance", b: "Daily pre-shift inspections and monthly load testing following OEM standards." },
                      { c: "bg-blue-100 text-blue-700", icon: "shield", t: "Third-Party Insured", b: "Comprehensive transit and operational liability coverage for all site activities." },
                    ].map((x) => (
                      <div key={x.t} className="flex items-start gap-4">
                        <div className={`${x.c.split(" ")[0]} p-2 rounded`}>
                          <Icon name={x.icon} className={`${x.c.split(" ")[1]} text-lg`} />
                        </div>
                        <div>
                          <p className="font-bold text-sm uppercase">{x.t}</p>
                          <p className="text-[10px] text-secondary">{x.b}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
