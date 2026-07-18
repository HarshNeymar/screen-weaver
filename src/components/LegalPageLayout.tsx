import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  description,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteNav />

      <main>
        <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,190,0,0.15),transparent_38%)]" />

          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <Link
              to="/"
              className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-primary-container hover:underline"
            >
              ← Back to Home
            </Link>

            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-primary-container">
              Chawla Cranes
            </p>

            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
              {title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-300 sm:text-lg">
              {description}
            </p>

            <p className="mt-6 text-sm font-semibold text-stone-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <section className="bg-stone-50 py-16 sm:py-20">
          <article className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="legal-content space-y-10">{children}</div>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-stone-900">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-8 text-stone-600">
        {children}
      </div>
    </section>
  );
}