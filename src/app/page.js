import Link from "next/link";
import { playfair } from "./_components/brand-fonts";
import SiteHeader from "./_components/site-header";
import SiteShell from "./_components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 sm:px-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p
              className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00004d]/70 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              Precision Electronics Studio
            </p>
            <h1
              className={`${playfair.className} mt-5 text-4xl font-semibold leading-tight text-[#0c0c2a] sm:text-5xl lg:text-6xl animate-fade-up`}
              style={{ animationDelay: "90ms" }}
            >
              Calibrate every signal, capture every insight.
            </h1>
            <p
              className="mt-5 max-w-xl text-lg leading-8 text-[#3d3d5f] animate-fade-up"
              style={{ animationDelay: "170ms" }}
            >
              Expert Electronic crafts diagnostic platforms for labs, clean rooms,
              and field teams who cannot afford drift. We align hardware,
              firmware, and data so measurements stay trusted under pressure.
            </p>
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <Link
                className="rounded-full bg-[#00004d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#000066]"
                href="/contact"
              >
                Request a Demo
              </Link>
              <Link
                className="rounded-full border border-[#00004d]/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#00004d] transition hover:border-[#00004d]/50"
                href="/products"
              >
                Browse Catalog
              </Link>
            </div>
            <div
              className="mt-10 flex flex-wrap items-center gap-8 text-sm text-[#52526f] animate-fade-up"
              style={{ animationDelay: "330ms" }}
            >
              <div>
                <p className="text-2xl font-semibold text-[#00004d]">24h</p>
                <p>Calibration turnaround</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#00004d]">98.7%</p>
                <p>Signal accuracy</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#00004d]">40+</p>
                <p>Lab deployments</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(0,0,77,0.18)] backdrop-blur animate-fade-up"
              style={{ animationDelay: "210ms" }}
            >
              <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-[#ffb347]/40 blur-2xl" />
              <div className="absolute bottom-6 left-6 h-28 w-28 rounded-full bg-[#0c5f8c]/25 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                  Live Diagnostics
                </p>
                <h2
                  className={`${playfair.className} mt-4 text-3xl font-semibold text-[#121233]`}
                >
                  Signal Lab Snapshot
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-[#00004d]/10 bg-[#f5f5ff] p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#00004d]">
                        Voltage Drift
                      </span>
                      <span className="text-[#1f1f3d]">0.02%</span>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-white">
                      <div className="h-2 w-[86%] rounded-full bg-[#00004d]" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#00004d]/10 bg-white p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#00004d]">
                        Thermal Stability
                      </span>
                      <span className="text-[#1f1f3d]">Ready</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-xs text-[#6b6b8f]">
                      <span className="rounded-full bg-[#e6ecff] px-3 py-1">
                        0.4C delta
                      </span>
                      <span className="rounded-full bg-[#fff2d9] px-3 py-1">
                        18 sensors
                      </span>
                      <span className="rounded-full bg-[#e9f4f7] px-3 py-1">
                        Auto-tuned
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#00004d]/10 bg-[#0f102c] px-4 py-3 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Sync Window
                    </p>
                    <p className="text-lg font-semibold">02:14:22</p>
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                    Locked
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00004d]/70">
              Why Expert Electronic
            </p>
            <h2
              className={`${playfair.className} text-3xl font-semibold text-[#121233]`}
            >
              Built for accuracy, shaped for teams.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,77,0.12)] animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                Co-Design
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#15152e]">
                Instruments matched to your workflow.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b6a]">
                We map every calibration step before we ship, so your teams stay
                focused on results not rework.
              </p>
            </div>
            <div
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,77,0.12)] animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                Validation
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#15152e]">
                Live analytics that spot drift early.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b6a]">
                Our monitoring layer flags anomalies across fleets so calibration
                stays reliable between scheduled checks.
              </p>
            </div>
            <div
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,77,0.12)] animate-fade-up"
              style={{ animationDelay: "280ms" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                Support
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#15152e]">
                Expert teams on call worldwide.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b6a]">
                Remote diagnostics, onsite training, and calibration service all
                inside a single response channel.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div
            className="rounded-[36px] border border-white/70 bg-[#0f102c] p-8 text-white shadow-[0_25px_70px_rgba(0,0,77,0.3)] sm:p-12 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Ready to calibrate
                </p>
                <h2 className={`${playfair.className} mt-4 text-3xl font-semibold`}>
                  Let us map your next measurement system.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                  Share your requirements and we will design a deployment plan
                  with calibration, monitoring, and training built in.
                </p>
              </div>
              <Link
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#00004d] transition hover:bg-[#f7f3ec]"
                href="/contact"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
