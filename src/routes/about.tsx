import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Chawla Cranes — Engineering the Skyline" },
      { name: "description", content: "From a single mobile crane in 2009 to NCR's heavy-lift authority. Meet the engineers and operators behind Chawla Cranes." },
    ],
  }),
  component: AboutPage,
});

const leaders = [
  {
    name: "Rajesh Chawla",
    role: "Founder & Managing Director",
    bio: "The visionary behind the company's inception in 2009, bringing over 25 years of industrial machinery expertise.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Pj9opkDReMmaZ8-ahR9MSSgluos4SCqN-TMutDWzjveka9pKghRTQ-PzzGdYJT9JwAdsd4eNrRL3EBTNzDX4yO__u0Of4XhaNtWHQJdiW9ec4lgk4czSL3KEOXduEdRur94om4lzP36A239yenffAxuPhXmB1D0zoAUAYm9j0QSLR4lfoKI3tNx3n8KH9Q7UwMoLO9VMQIMny2vEHudUp2TCbCedkwJG90DlWFbfbudUIxnsIoITwUrtSPlpqO5qYDDluVVRQiQ",
  },
  {
    name: "Aditi Sharma",
    role: "Chief Operations Officer",
    bio: "Orchestrating the complex logistics of our nationwide fleet with a focus on operational efficiency and precision.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUMKfSEc4YnZkSOoTwA_v90E03K-rhdcdmJXEAZcPNsiBZT3GWC9C0hNW0Lxph4M29X2IMM7-yHV30WwrCKr_hy-jUznzKNpf4MjNLc8ZoT1XsYJCUzFSuOlsEF7jIQdDnMJwtxsB5clgiIsjIkIpt5z4a3-5xtcnPpvGbPg7FJowX7u8LU8x4tnELGA2baQ2TW88Pi5_Nd3CEAU1I-ZSf-j1Yu6sJt0Iejf92bcbW3CmMjMt7v_qxnOEUoqaSN1uH-wG3P7DsDfI",
  },
  {
    name: "Vikram Singh",
    role: "Director of Engineering",
    bio: "Leading the technical strategy and ensuring the 'Chawla Standard' is met across every complex lift and project.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYe4UfpwAwJfL0EXUv3aSXMulDTKfDIX5BhbiW-w1aDRcqnlQJsddhi6aldmpRFXlNSKCJUSbu7Omqshc3Ib9P8xnjigCJ_K8_0IECRkXqh9HdqKAodz3B771mLlebffArq3X76YelXQQpSk3vGvSeAUGvKLDFXoPfdTdf9VXriCiV-X1G4rVAiIJgGfCu2qww_PXCRRUiWPulUc4tnZ3N97UKqRHoYI0Bhj57rlW2VvyykctPJhTxgz4HI0oG_gentDuoSnT91Z4",
  },
];

function AboutPage() {
  return (
    <div className="bg-surface text-on-surface">
      <SiteNav />

      <main className="pt-24">
        <section className="relative min-h-[600px] md:min-h-[819px] flex flex-col justify-end p-8 md:p-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Crawler crane at dawn"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUd2x51EoA3bHcfPanENpKNWeuWokCYMSd5_GDCBR8xFm7n3XWTSxNkm9s_eUyC49vNQjPiWq3VOowjJAxBwTxAPzyJ25KncRQ2Ys7tXriVgjzvjcH46_A9IPc3Zo2sf8PonrZhu-yZ5fBjIRdroNM6ZZb59I4WMOWgvDEQecbx3EOQiiqlc42npVkYLt46utdNAxxpMOrHubjzXaTuqAmdx6xSdWxwr2IV-eA3OuMG_SRhMqz1ttTiNZPQh6gVqd4sLtbRvF3Zm4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-5xl">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-on-background uppercase leading-none mb-6">
              Structural<br /><span className="text-primary">Authority.</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl font-light leading-relaxed">
              Engineering the skylines of tomorrow with precision, power, and an uncompromising commitment to the highest standards of safety.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-32 px-8 md:px-20 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Origin</span>
              <h2 className="text-5xl font-bold tracking-tight text-on-background mb-8 leading-tight">
                From Ground Zero to <span className="text-outline">Skyline Leaders.</span>
              </h2>
             <div className="space-y-6 text-secondary text-lg">
  <p className="rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4 font-semibold text-on-surface">
    Chawla Cranes is a unit of Chawla Crane &amp; Heavy Labour Contractor.
  </p>

  <p>
    Founded in 2009, Chawla Cranes began with a single mobile crane and a
    vision to redefine heavy lifting in the regional market. What started as a
    local rental service quickly evolved into a strategic engineering partner
    for the nation&apos;s most complex infrastructure projects.
  </p>

  <p>
    Over the last decade, we have expanded our fleet ten-fold, incorporating
    state-of-the-art crawler and tower cranes that allow us to reach heights
    and capacities once thought impossible.
  </p>
</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-surface-container-low p-8 rounded-xl aspect-square flex flex-col justify-center">
                  <span className="text-5xl font-black text-primary mb-2">2009</span>
                  <p className="text-sm font-bold uppercase tracking-tighter text-secondary">Inception</p>
                </div>
                <div className="bg-primary-container p-8 rounded-xl aspect-square flex flex-col justify-center">
                  <span className="text-5xl font-black text-on-primary-container mb-2">500+</span>
                  <p className="text-sm font-bold uppercase tracking-tighter text-on-primary-container">Projects Completed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-highest p-8 rounded-xl aspect-square flex flex-col justify-center">
                  <img
                    alt="Founding site"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWjRNv9qxfOafLA8gV9FV38pbiQtjmwpGfDEwceDSIX0twurtjf9uMfM7C-PHYYKEDMc-Wo4N3_KanlhU0g8zKSA1buzqUU-njed97XfOEo_TyNUr9l-W4vUQOCfaNB6sIClzbaCQ1Xio9f1oXhGsdC5a09AHi7vzYBoWEupHq91AIs8DjsRHwdU1tBk3I1K0-XNleDpiatKE5mzY14Zlvl9TIhKIc4hy8Fch-WrFTTjdwiYuIt_anoDowrTbU9d070X8aozogAKI"
                    className="rounded-lg mb-4 opacity-80"
                  />
                  <p className="text-xs font-bold uppercase text-secondary">Founding Site</p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-xl aspect-square flex flex-col justify-center">
                  <span className="text-5xl font-black text-primary mb-2">150+</span>
                  <p className="text-sm font-bold uppercase tracking-tighter text-secondary">Fleet Units</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Chawla Standard */}
        <section className="py-32 bg-on-background text-surface overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 pointer-events-none">
            <span className="text-[20rem] font-black tracking-tighter uppercase leading-none select-none">SAFE</span>
          </div>
          <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
            <div className="mb-20 max-w-3xl">
              <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8">
                The Chawla <span className="text-primary-container">Standard</span>
              </h2>
              <p className="text-xl text-surface-container-highest font-light leading-relaxed">
                Where engineering excellence meets uncompromising safety. We don't view safety as a department—we view it as the foundation of every calculation and every lift.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "engineering", t: "Precision Engineering", b: "Every project undergoes rigorous lift-planning and site-simulation using CAD and specialized rigging software to ensure absolute stability." },
                { icon: "verified_user", t: "Zero-Incident Culture", b: "Our operators are certified to international standards, undergoing continuous training in hazard identification and machine ergonomics." },
                { icon: "settings_suggest", t: "Technical Resilience", b: "We maintain our fleet in-house with a team of specialist technicians, ensuring every component operates at peak industrial performance." },
              ].map((c) => (
                <div key={c.t} className="p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon name={c.icon} className="text-primary-container text-5xl mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{c.t}</h3>
                  <p className="text-surface-container-highest/80 leading-relaxed">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Infra */}
        <section className="py-32 px-8 md:px-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 relative">
              <img
                alt="Bridge under construction"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxaYdBp4g6cTasiUeniZihsWAuBYIwDonBh9bgvDVv5Bdjp3PauBx_O8er-vnu_WwDpBCQtghfRqndledcFI4HP1K4MlhTpRtORJifJL7jF4DwqF5kbzE7itI3Wuo0zNIbS4y2CN0zM4e37fiJHMM5UuIDw_aac668cWrfDlU_xkhdW2ae7s4-Ztne4dtvtzfpy8ZrsWfsWeGF9Oe6EGfEMPbFCa8MJ2T0Ijp127RDPifHnv9XexQzAVFJ9G6aw9VLfBK8lqyjluY"
                className="rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-container rounded-xl -z-10 hidden md:block" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold tracking-tight text-on-background mb-8">
                Building the <span className="text-primary">Backbone</span> of the Region.
              </h2>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                Our commitment goes beyond providing equipment. We are invested in the regional infrastructure that connects communities. From metro bridges and power plants to high-rise commercial hubs, Chawla Cranes provides the lifting power that brings national blueprints to life.
              </p>
              <div className="space-y-4">
                {["Metropolitan Connectivity", "Energy & Power Facilities", "Industrial Logistics Hubs"].map((t) => (
                  <div key={t} className="flex items-center gap-4 group">
                    <div className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all" />
                    <span className="font-bold uppercase tracking-widest text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        {/* <section className="py-32 px-8 md:px-20 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-5xl font-bold tracking-tighter uppercase mb-4">
                The Architects of <span className="text-outline">Growth.</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leaders.map((l) => (
                <div key={l.name} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      alt={l.name}
                      src={l.img}
                      className="w-full grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-on-background">{l.name}</h3>
                  <p className="text-primary font-bold uppercase text-xs tracking-widest mb-3">{l.role}</p>
                  <p className="text-secondary text-sm leading-relaxed">{l.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <SiteFooter />
    </div>
  );
}
