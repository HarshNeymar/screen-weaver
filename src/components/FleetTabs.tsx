import { Icon } from "@/components/Icon";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type CraneSpec = {
  label: string;
  value: string;
};

type Crane = {
  id: string;
  tabLabel: string;
  capacity: string;
  title: string;
  image: string;
  imageAlt: string;
  badge?: string;
  description: string;
  specs: CraneSpec[];
  features: string[];
  applications: string[];
};

const cranes: Crane[] = [
  {
    id: "sany-160-ton",
    tabLabel: "160T Mobile",
    capacity: "160 Ton",
    title: "SANY Mobile Crane",
    image: "/images/cranes/160-ton-mobile-crane.webp",
    imageAlt:
      "160 ton red and yellow telescopic mobile crane at an industrial project",
    badge: "Only 1 year old",
    description:
      "A high-capacity mobile crane suitable for heavy industrial erection, infrastructure construction and long-reach lifting operations.",
    specs: [
      { label: "Main Boom", value: "75 metres" },
      { label: "Jib", value: "30 metres" },
      { label: "Maximum Height", value: "103 metres / 338 feet" },
      { label: "Hiring", value: "Monthly and long-term" },
    ],
    features: [
      "Heavy lifting capacity",
      "Long working reach",
      "Experienced operator",
      "24×7 project support",
    ],
    applications: [
      "Industrial plant erection",
      "Bridge construction",
      "Heavy machinery installation",
      "Infrastructure projects",
    ],
  },
  {
    id: "zoomlion-80-ton",
    tabLabel: "80T Mobile",
    capacity: "80 Ton",
    title: "Zoomlion Mobile Crane",
    image: "/images/cranes/80-ton-mobile-crane.webp",
    imageAlt:
      "80 ton green and black telescopic mobile crane at a construction site",
    description:
      "A versatile mobile crane for structural erection, industrial lifting and construction work requiring dependable capacity and mobility.",
    specs: [
      { label: "Capacity", value: "80 Ton" },
      { label: "Crane Type", value: "Telescopic mobile crane" },
      { label: "Availability", value: "Gurugram, Delhi NCR and all India" },
      { label: "Hiring", value: "Monthly and long-term" },
    ],
    features: [
      "Strong lifting performance",
      "Quick site mobilisation",
      "Regularly maintained",
      "Professional operations",
    ],
    applications: [
      "Steel structure erection",
      "Factory projects",
      "Infrastructure lifting",
      "Heavy loading work",
    ],
  },
  {
    id: "zoomlion-60-ton",
    tabLabel: "60T Mobile",
    capacity: "60 Ton",
    title: "Zoomlion Mobile Crane",
    image: "/images/cranes/60-ton-mobile-crane.webp",
    imageAlt:
      "60 ton green telescopic mobile crane lifting at an industrial site",
    badge: "2 units available",
    description:
      "Modern 60-ton mobile cranes for medium and heavy lifting projects, with two units available for projects requiring multiple machines.",
    specs: [
      { label: "Main Boom", value: "45 metres" },
      { label: "Jib", value: "16 metres" },
      { label: "Model", value: "2022 and above" },
      { label: "Fleet", value: "2 units" },
    ],
    features: [
      "Two cranes available",
      "Recent fleet models",
      "Flexible project deployment",
      "Round-the-clock assistance",
    ],
    applications: [
      "Factory maintenance",
      "Equipment installation",
      "Civil construction",
      "Commercial projects",
    ],
  },
  {
    id: "xcmg-50-ton",
    tabLabel: "50T Mobile",
    capacity: "50 Ton",
    title: "XCMG Mobile Crane",
    image: "/images/cranes/50-ton-mobile-crane.webp",
    imageAlt:
      "50 ton yellow telescopic mobile crane on a modern construction site",
    description:
      "A reliable 50-ton mobile crane designed for construction, plant maintenance and medium-capacity lifting operations.",
    specs: [
      { label: "Main Boom", value: "45 metres" },
      { label: "Jib", value: "17 metres" },
      { label: "Capacity", value: "50 Ton" },
      { label: "Hiring", value: "Monthly and long-term" },
    ],
    features: [
      "Long boom reach",
      "Fast mobilisation",
      "Well-maintained machine",
      "Safe lifting operations",
    ],
    applications: [
      "Plant maintenance",
      "Shed erection",
      "Construction sites",
      "Material handling",
    ],
  },
  {
    id: "sany-60-ton-crawler",
    tabLabel: "60T Crawler",
    capacity: "60 Ton",
    title: "SANY Crawler Crane",
    image: "/images/cranes/60-ton-crawler-crane.webp",
    imageAlt:
      "60 ton red lattice boom crawler crane operating on tracked undercarriage",
    description:
      "A tracked crawler crane offering excellent stability for long-duration lifting work on demanding industrial and infrastructure sites.",
    specs: [
      { label: "Capacity", value: "60 Ton" },
      { label: "Crane Type", value: "Lattice-boom crawler crane" },
      { label: "Undercarriage", value: "Tracked" },
      { label: "Hiring", value: "Project and monthly basis" },
    ],
    features: [
      "Stable tracked platform",
      "Suitable for uneven sites",
      "Long-duration deployment",
      "Experienced lifting crew",
    ],
    applications: [
      "Infrastructure projects",
      "Industrial plants",
      "Foundation work",
      "Heavy structural lifting",
    ],
  },
  {
    id: "sany-25-ton",
    tabLabel: "25T Mobile",
    capacity: "25 Ton",
    title: "SANY Mobile Crane",
    image: "/images/cranes/25-ton-mobile-crane.webp",
    imageAlt:
      "compact 25 ton yellow telescopic mobile crane at a construction project",
    description:
      "A compact mobile crane suited to regular construction lifting, factory shifting, equipment handling and maintenance work.",
    specs: [
      { label: "Capacity", value: "25 Ton" },
      { label: "Crane Type", value: "Compact mobile crane" },
      { label: "Availability", value: "Delhi NCR and all India" },
      { label: "Hiring", value: "Monthly and project basis" },
    ],
    features: [
      "Compact site mobility",
      "Quick dispatch",
      "Cost-effective hiring",
      "Safe and reliable",
    ],
    applications: [
      "Loading and unloading",
      "Factory shifting",
      "Building construction",
      "Maintenance projects",
    ],
  },
];

export function FleetTabs() {
  return (
    <section className="bg-[#0b0b0b] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/40 bg-primary-container/10 px-4 py-2">
              <Icon
                name="precision_manufacturing"
                className="text-lg text-primary-container"
              />

              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-container">
                Available crane fleet
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Select a crane for your project
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-stone-400">
              View capacity, specifications and suitable applications for each
              crane available for rent.
            </p>
          </div>

          <a
            href="tel:+919717459360"
            className="inline-flex w-fit items-center gap-3 rounded-lg bg-primary-container px-6 py-4 font-black uppercase tracking-wider text-on-primary-container transition-transform hover:-translate-y-1"
          >
            <Icon name="call" />
            Call 9717459360
          </a>
        </div>

        <Tabs defaultValue={cranes[0].id}>
          <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-xl border border-white/10 bg-white/5 p-2 sm:grid-cols-3 xl:grid-cols-6">
            {cranes.map((crane) => (
              <TabsTrigger
                key={crane.id}
                value={crane.id}
                className="min-h-14 rounded-lg border border-transparent px-3 py-3 text-xs font-black uppercase tracking-wide text-stone-300 data-[state=active]:border-primary-container data-[state=active]:bg-primary-container data-[state=active]:text-on-primary-container"
              >
                {crane.tabLabel}
              </TabsTrigger>
            ))}
          </TabsList>

          {cranes.map((crane) => {
            const whatsappText = encodeURIComponent(
              `Hello Chawla Cranes, I need availability and pricing for the ${crane.capacity} ${crane.title}.`,
            );

            return (
              <TabsContent
                key={crane.id}
                value={crane.id}
                className="mt-8"
              >
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515] shadow-2xl">
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="relative min-h-[330px] overflow-hidden sm:min-h-[460px]">
                      <img
                        src={crane.image}
                        alt={crane.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-lg bg-primary-container px-4 py-3 text-on-primary-container shadow-xl">
                        <span className="block text-3xl font-black leading-none">
                          {crane.capacity}
                        </span>

                        <span className="text-[10px] font-black uppercase tracking-widest">
                          Lifting capacity
                        </span>
                      </div>

                      {crane.badge && (
                        <span className="absolute right-5 top-5 rounded-lg border border-white/20 bg-black/80 px-4 py-2 text-xs font-black uppercase tracking-wider">
                          {crane.badge}
                        </span>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-primary-container">
                          Chawla Cranes
                        </p>

                        <h3 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                          {crane.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-10">
                      <p className="leading-relaxed text-stone-300">
                        {crane.description}
                      </p>

                      <div className="mt-8 grid grid-cols-2 gap-3">
                        {crane.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="rounded-xl border border-white/10 bg-white/5 p-4"
                          >
                            <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">
                              {spec.label}
                            </p>

                            <p className="mt-2 text-sm font-black text-white sm:text-base">
                              {spec.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <h4 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-primary-container">
                          Service advantages
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {crane.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-stone-300"
                            >
                              <Icon
                                name="check_circle"
                                className="text-sm text-primary-container"
                              />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <h4 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-primary-container">
                          Best suited for
                        </h4>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {crane.applications.map((application) => (
                            <div
                              key={application}
                              className="flex items-center gap-2 text-sm text-stone-300"
                            >
                              <Icon
                                name="arrow_right"
                                className="text-primary-container"
                              />
                              {application}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-9 grid gap-3 sm:grid-cols-2">
                        <a
                          href={`https://wa.me/919717459360?text=${whatsappText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-4 font-black uppercase tracking-wider text-on-primary-container transition-transform hover:-translate-y-1"
                        >
                          <Icon name="chat" />
                          Get quote
                        </a>

                        <a
                          href="tel:+919710111130"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-4 font-black uppercase tracking-wider transition-colors hover:border-primary-container hover:text-primary-container"
                        >
                          <Icon name="call" />
                          Alternate number
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="mt-8 grid overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "location_on",
              heading: "Coverage",
              text: "Gurugram, Delhi NCR and all India",
            },
            {
              icon: "calendar_month",
              heading: "Flexible hiring",
              text: "Monthly, long-term and project basis",
            },
            {
              icon: "support_agent",
              heading: "Support",
              text: "24×7 project and mobilisation assistance",
            },
            {
              icon: "verified_user",
              heading: "Operations",
              text: "Safe, reliable and professional",
            },
          ].map((item) => (
            <div
              key={item.heading}
              className="flex gap-4 border-b border-white/10 p-5 sm:border-r lg:border-b-0"
            >
              <Icon
                name={item.icon}
                className="text-2xl text-primary-container"
              />

              <div>
                <p className="text-xs font-black uppercase tracking-widest text-primary-container">
                  {item.heading}
                </p>

                <p className="mt-1 text-sm text-stone-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-stone-500">
          Final crane selection depends on load weight, lifting radius, boom
          configuration, ground conditions and site survey.
        </p>
      </div>
    </section>
  );
}