import Link from "next/link";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { playfair } from "../_components/brand-fonts";

const caseStudies = [
  {
    title: "Semiconductor Yield Lab",
    sector: "Microelectronics",
    summary:
      "Rebuilt reference systems for high volume wafer inspection with continuous drift tracking.",
    results: [
      "31% reduction in variance",
      "24 hour calibration cycles",
      "Fleet level anomaly alerts",
    ],
  },
  {
    title: "Clean Room Sensor Grid",
    sector: "Pharma Manufacturing",
    summary:
      "Installed a multi zone monitoring stack with automated compliance reporting.",
    results: [
      "98.7% signal stability",
      "18 sensors synchronized",
      "Audit ready logs in real time",
    ],
  },
  {
    title: "Field Diagnostics Network",
    sector: "Energy Systems",
    summary:
      "Delivered portable calibration kits and remote dashboards for regional teams.",
    results: [
      "40 sites synchronized",
      "2 hour response time",
      "Unified calibration playbooks",
    ],
  },
];

const deliverySteps = [
  {
    title: "Discovery",
    detail: "We map your measurement chain and define tolerances.",
  },
  {
    title: "Calibration Design",
    detail: "Hardware, firmware, and analytics are aligned to your lab.",
  },
  {
    title: "Deployment",
    detail: "Systems ship with training, monitoring, and validation scripts.",
  },
];

export default function SolutionsPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">
        <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 sm:px-10">
          <div
            className="flex flex-col gap-3 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00004d]/70">
              Solutions
            </p>
            <h1
              className={`${playfair.className} text-4xl font-semibold text-[#0c0c2a] sm:text-5xl`}
            >
              Recent work across high precision teams.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#3d3d5f]">
              Our calibration teams support labs, fabs, and field operations that
              demand consistent signal integrity.
            </p>
          </div>
          <div
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#52526f] animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <div>
              <p className="text-2xl font-semibold text-[#00004d]">120+</p>
              <p>Deployments delivered</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#00004d]">15</p>
              <p>Countries supported</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#00004d]">6</p>
              <p>Industries served</p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-12 sm:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,77,0.12)] animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                  {study.sector}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-[#15152e]">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4b4b6a]">
                  {study.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#4b4b6a]">
                  {study.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {deliverySteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,77,0.12)] animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                  {step.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#4b4b6a]">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/70 bg-[#0f102c] p-8 text-white shadow-[0_25px_70px_rgba(0,0,77,0.28)] lg:flex-row lg:items-center animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Ready to collaborate
              </p>
              <h2 className={`${playfair.className} mt-3 text-2xl font-semibold`}>
                Let us design the next calibration plan.
              </h2>
            </div>
            <Link
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#00004d] transition hover:bg-[#f7f3ec]"
              href="/contact"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
