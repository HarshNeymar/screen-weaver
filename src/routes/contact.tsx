import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Chawla Cranes" },
      { name: "description", content: "Book heavy-lift cranes or speak with our 24/7 deployment desk across Gurugram, Manesar and Noida." },
    ],
  }),
  component: ContactPage,
});

const classes = [
  { key: "tower", icon: "precision_manufacturing", label: "Tower" },
  { key: "mobile", icon: "conveyor_belt", label: "Mobile" },
  { key: "crawler", icon: "forklift", label: "Crawler" },
  { key: "allterrain", icon: "architecture", label: "All-Terrain" },
] as const;

function ContactPage() {
  const [active, setActive] = useState<string>("tower");
  return (
    <div className="bg-surface text-on-surface">
      <SiteNav />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-background uppercase leading-[0.9] mb-4">
            Structural <br /> <span className="text-primary">Engagement</span>
          </h1>
          <p className="max-w-2xl text-secondary text-lg font-medium leading-relaxed">
            Connect with our deployment logistics team. Precision-engineered lifting solutions begin with a technical consultation for your NCR project.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <section className="lg:col-span-2 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-sm border border-outline-variant/30">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">Project Briefing Form</h2>
              <div className="flex gap-2">
                <div className="h-1 w-8 bg-primary rounded-full" />
                <div className="h-1 w-8 bg-outline-variant rounded-full" />
                <div className="h-1 w-8 bg-outline-variant rounded-full" />
              </div>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Project Location (Gurugram/Manesar/Noida)", icon: "location_on", placeholder: "Enter Site Location", type: "text" },
                  { label: "Company Name", icon: "corporate_fare", placeholder: "Your Infrastructure Firm", type: "text" },
                ].map((f) => (
                  <div key={f.label} className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">{f.label}</label>
                    <div className="relative">
                      <Icon name={f.icon} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-lg border-none ring-1 ring-outline/15 focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Lifting Load (Tons)</label>
                  <div className="relative">
                    <Icon name="weight" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                    <input
                      type="number"
                      placeholder="Maximum Tonnage Requirement"
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-lg border-none ring-1 ring-outline/15 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Estimated Duration</label>
                  <div className="relative">
                    <Icon name="timer" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                    <select className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-lg border-none ring-1 ring-outline/15 focus:ring-2 focus:ring-primary outline-none appearance-none transition-all">
                      <option>Select Deployment Span</option>
                      <option>Spot Lift (1-3 Days)</option>
                      <option>Project Term (1-6 Months)</option>
                      <option>Annual/Long Term (6+ Months)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Equipment Class</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {classes.map((c) => {
                    const isActive = active === c.key;
                    return (
                      <button
                        key={c.key}
                        type="button"
                        onClick={() => setActive(c.key)}
                        className={`flex flex-col items-center justify-center p-6 bg-surface-container-lowest border-2 rounded-xl transition-all ${
                          isActive ? "border-primary" : "border-outline/15 hover:border-primary/50"
                        }`}
                      >
                        <Icon name={c.icon} className={`mb-2 ${isActive ? "text-primary" : "text-outline"}`} />
                        <span className="text-xs font-bold">{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/10 flex items-center gap-3">
                  Initiate Inquiry <Icon name="arrow_forward" />
                </button>
              </div>
            </form>
          </section>

          <aside className="space-y-8">
            <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight text-on-background mb-6">Operational Readiness</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-primary leading-none">98.5%</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">On-Time</p>
                    <p className="text-sm font-medium">Deployment Success</p>
                  </div>
                </div>
                <div className="h-px bg-outline-variant/20" />
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-primary leading-none">15+</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Years in</p>
                    <p className="text-sm font-medium">Gurugram Operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-inverse-surface text-surface p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Icon name="contact_phone" className="text-primary-fixed-dim text-4xl" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Direct Connect</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase font-bold text-outline-variant tracking-widest ml-1">24/7 Emergency Hotline</p>
                    <a
                      className="flex items-center justify-between w-full bg-primary p-4 rounded-xl hover:bg-primary/90 transition-all group"
                      href=""
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="call" className="text-on-primary" />
                        <span className="text-xl font-black text-on-primary tracking-tight">+91 97174 59360</span>
                      </div>
                      <Icon name="arrow_forward" className="text-on-primary group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase font-bold text-outline-variant tracking-widest ml-1">Logistics Desk</p>
                    <a
                      className="flex items-center justify-between w-full bg-surface/10 border border-surface/20 p-4 rounded-xl hover:bg-surface/20 transition-all group"
                      href=""
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="local_shipping" className="text-primary-fixed-dim" />
                        <span className="text-xl font-black text-surface tracking-tight">+91 (124) 4900-888</span>
                      </div>
                      <Icon name="arrow_forward" className="text-surface/50 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-surface/10 text-center">
                  <p className="text-[10px] font-medium text-surface-dim uppercase tracking-widest">
                    Average NCR Mobilization: <span className="text-primary-fixed-dim font-bold">60-90 Mins</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
