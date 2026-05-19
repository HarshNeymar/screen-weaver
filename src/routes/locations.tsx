import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Chawla Cranes — Structural Authority" },
      { name: "description", content: "Strategic operational hubs across Gurugram, Manesar and Noida with rapid deployment of cranes and recovery fleet." },
    ],
  }),
  component: LocationsPage,
});

const hubs = [
  {
    name: "Gurugram",
    badge: "HEADQUARTERS",
    badgeClass: "bg-primary text-on-primary",
    addr: "Sector 44, Institutional Area, Gurugram",
    phone: "+91 124 459 2000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ewpsSIY_CIHQ0UOZaPDiJMmyzmZ9zCIMW3HnEF9kQIi83kG3fe8hwyjbz9yYX3xPaJS4-WLIv6k9sPvV0VVnId_qH6itiVynVOQxzB7XRKfrzTdXINZO-TwS8uaY511pkKdF5FNXr0UK8WeKU6fM8XZjur29g1tgFqG8RspIZoF-LtWuJ22jwyqf5Rz8SMkNMmIQl8qhAuwmsRthNBdzOI9Zaj6UOLOubdw536jKqskC2nHBczEc0Sxg6xQbGZQTS5Bvzx8jzLU",
  },
  {
    name: "Manesar",
    badge: "LOGISTICS HUB",
    badgeClass: "bg-secondary text-white",
    addr: "IMT Manesar, Phase II, Haryana",
    phone: "+91 124 234 8812",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc_6h6JGAIVGDn206GBTefFDqELrDkpaRDQ4AV6cyHIJy-XHmjlJZS4C2veHltnRF10XF_07ERVYF9KdNYC8cdIU32qN-SslyFTSYnWjG_BJdz2WIYRzmbVNCwH8D7G9w1JzvmCASwlxKTnDesaJRayasmqQ68UPtnKj0-c3IHwkwTSP81_W9IjLp3739E77RoXChcCvjzU-JSf4m5BBH3MNVnKUtvhE5w6LNIRIjYyVFu9KTrIOz6Ev-5K3uE6T8RYuYo94U2dXI",
  },
  {
    name: "Noida",
    badge: "UP OPERATIONS",
    badgeClass: "bg-secondary text-white",
    addr: "Sector 63, Noida, Uttar Pradesh",
    phone: "+91 120 421 9901",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzNh2QrRWo09v-9q82DG5i7hSRMBmPF5cX1Qk_ueNTaU9A86o7VeD5uCuZ9klzG07gNDlk1k9YeCqDEFlw69C8mphMcGDn7Ir1zd-CI7gT6jpgvI2-fhDrf7-yhhQgHHiKGtOk6m2ZcfjexfwssC6JOr8wjs9w3rgi1CVGlB8E8C1SA8kj6l5cFT6gVhHFNpL4RWLRAIig4zJUsTxICmYABuIu_X1uqOmz0HsSAVv6DzflS3HYWAw8YB9PfQ3F-klzInVYcUSpL4o",
  },
];

function LocationsPage() {
  return (
    <div className="bg-surface text-on-background">
      <SiteNav />

      <main className="pt-24 pb-20 overflow-hidden">
        <section className="relative px-8 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-end">
              <div className="lg:w-2/3">
                <span className="inline-block py-1 px-3 bg-primary-fixed text-on-primary-fixed-variant font-bold text-xs uppercase tracking-[0.2em] mb-6 rounded-sm">
                  Strategic Presence
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-on-background uppercase leading-none">
                  Regional <br /> <span className="text-primary">Powerhouse</span>
                </h1>
              </div>
              <div className="lg:w-1/3 mb-4">
                <p className="text-lg text-secondary leading-relaxed border-l-4 border-primary pl-6">
                  Deploying the largest heavy-lift fleet across the North India corridor. From Gurugram's high-rises to Manesar's industrial backbone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden relative min-h-[600px] group shadow-inner">
                <div className="absolute inset-0 z-0">
                  <img
                    alt="NCR Map"
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtWV5U3c2ohR8JB-M7gnP_MjQQwt20U0g3sjyfdj_R90_IRTBbi635PS-Ij4LI27abv1g0RV9TlkxxmO6vDS-cuvxs50B2afm5tJCbNEu62Yxiqh-Pq3BcILJJSS4pfMw_IvK8xwDgaLMLEO0-QWxCOaLwDKc1SDCQfxWeUSEya_miISqpOY95mzilT00u3bOnN1lv3C4XYyDPniWudTbP2jiFB-JN8TvNWqxomTsv45owyLQEwox2zf31HYKmjqAtOGPJVYeB2KE"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-low via-transparent to-transparent" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white" />
                  <div className="mt-2 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold uppercase tracking-tighter">Gurugram HQ</div>
                </div>
                <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center cursor-pointer">
                  <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-white" />
                  <div className="mt-2 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold uppercase tracking-tighter">Noida Hub</div>
                </div>
                <div className="absolute top-1/2 left-1/4 flex flex-col items-center cursor-pointer">
                  <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-white" />
                  <div className="mt-2 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold uppercase tracking-tighter">Manesar Yard</div>
                </div>
                <div className="relative z-20 p-12 h-full flex flex-col justify-end">
                  <h3 className="text-4xl font-bold text-on-background max-w-sm mb-4">Unrivaled reach in the Haryana heartland.</h3>
                  <div className="flex gap-4 flex-wrap">
                    <span className="bg-surface-container-lowest/80 backdrop-blur px-4 py-2 rounded text-xs font-bold border border-outline-variant/20 uppercase tracking-widest">3 Strategic Yards</span>
                    <span className="bg-surface-container-lowest/80 backdrop-blur px-4 py-2 rounded text-xs font-bold border border-outline-variant/20 uppercase tracking-widest">150+ Fleet Units</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="p-8 bg-primary-container text-on-primary-container rounded-xl flex-1 flex flex-col justify-between">
                  <div>
                    <Icon name="precision_manufacturing" className="text-4xl mb-6" />
                    <h4 className="text-2xl font-bold mb-2">Automotive Excellence</h4>
                    <p className="text-sm opacity-80 leading-relaxed">
                      Serving the robust manufacturing corridors of Manesar and Dharuhera with specialized tower crane rigging for plant expansions.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-on-primary-container/20 mt-6">
                    <span className="text-3xl font-black">40%</span>
                    <span className="text-xs uppercase tracking-widest block font-bold">Sector Share</span>
                  </div>
                </div>
                <div className="p-8 bg-surface-container-highest rounded-xl flex-1">
                  <Icon name="apartment" className="text-4xl mb-6 text-primary" />
                  <h4 className="text-2xl font-bold mb-2">Urban Infrastructure</h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    Pioneering the skyline of Gurugram and Noida through ultra-heavy lifting for high-rise commercial and residential projects.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/50 p-3 rounded">
                      <span className="block font-bold text-lg">500t+</span>
                      <span className="text-[10px] uppercase text-secondary">Capacity</span>
                    </div>
                    <div className="bg-white/50 p-3 rounded">
                      <span className="block font-bold text-lg">24/7</span>
                      <span className="text-[10px] uppercase text-secondary">Ops</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 max-w-7xl mx-auto mb-32">
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-12 border-l-8 border-primary pl-6">Operational Hubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubs.map((h) => (
              <div key={h.name} className="group bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-highest transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img alt={h.name} src={h.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{h.name}</h3>
                    <span className={`${h.badgeClass} text-[10px] font-bold px-2 py-1 rounded`}>{h.badge}</span>
                  </div>
                  <ul className="space-y-4 text-sm text-secondary mb-8">
                    <li className="flex items-center gap-3">
                      <Icon name="location_on" className="text-primary text-xl" />
                      {h.addr}
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="call" className="text-primary text-xl" />
                      {h.phone}
                    </li>
                  </ul>
                  <button className="w-full py-3 border border-outline hover:bg-primary hover:text-on-primary hover:border-primary transition-all font-bold uppercase text-xs tracking-widest rounded">
                    Contact Hub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
