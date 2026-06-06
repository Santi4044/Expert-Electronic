import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { playfair } from "../_components/brand-fonts";
import { client } from "../../lib/sanity";

const CATEGORIES = [
  { value: "natv",  label: "NATV & Distribution" },
  { value: "sound", label: "Sound Systems" },
  { value: "led",   label: "LED & Display" },
  { value: "cctv",  label: "CCTV & Security" },
];

async function getProducts() {
  return client.fetch(`*[_type == "product"] | order(name asc) {
    _id,
    name,
    category,
    brand,
    description,
    featured,
    "imageUrl": image.asset->url
  }`);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">

        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00004d]/70">
              Products
            </p>
            <h1 className={`${playfair.className} text-4xl font-semibold text-[#0c0c2a] sm:text-5xl`}>
              Equipment we specify and install.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#3d3d5f]">
              We supply gear as part of full design and installation projects,
              not as a standalone shop. These are the categories we typically
              source and install.
            </p>
          </div>
        </section>

        {/* Products by category */}
        {CATEGORIES.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat.value);
          if (catProducts.length === 0) return null;
          return (
            <section key={cat.value} className="mx-auto w-full max-w-6xl px-6 pb-12 sm:px-10">
              <h2 className={`${playfair.className} text-2xl font-semibold text-[#0c0c2a] mb-6`}>
                {cat.label}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catProducts.map((product, index) => (
                  <div
                    key={product._id}
                    className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(0,0,77,0.12)] animate-fade-up"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {product.imageUrl && (
                      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    )}
                    {product.featured && (
                      <span className="mb-2 inline-block rounded-full bg-[#00004d] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                        Featured
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-[#15152e]">{product.name}</h3>
                    {product.brand && (
                      <p className="text-xs text-[#00004d]/60 mt-1">{product.brand}</p>
                    )}
                    {product.description && (
                      <p className="mt-2 text-sm leading-6 text-[#4b4b6a]">{product.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_18px_40px_rgba(0,0,77,0.12)] lg:flex-row lg:items-center animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00004d]/70">
                Need a custom build
              </p>
              <h2 className={`${playfair.className} mt-3 text-2xl font-semibold text-[#121233]`}>
                We can tailor a system for your environment.
              </h2>
            </div>
            <Link
              className="rounded-full bg-[#00004d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#000066]"
              href="/contact"
            >
              Talk to Project Team
            </Link>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}