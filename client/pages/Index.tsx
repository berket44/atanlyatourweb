import { useEffect, useState } from "react";
import { DemoResponse } from "@shared/api";
import Hero from "@/components/site/Hero";
import SearchBar from "@/components/site/SearchBar";
import SectionHeading from "@/components/site/SectionHeading";
import DestinationCard from "@/components/site/DestinationCard";
import CategoriesStrip from "@/components/site/CategoriesStrip";

const destinations = [
  {
    title: "Bali Adası",
    country: "Endonezya",
    priceFrom: "₺8.500'den",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Kapadokya",
    country: "Türkiye",
    priceFrom: "₺4.200'den",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Paris",
    country: "Fransa",
    priceFrom: "₺9.900'den",
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Maldivler",
    country: "Hint Okyanusu",
    priceFrom: "₺12.500'den",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div>
      <Hero />
      <SearchBar />

      <section className="container max-w-7xl container-px py-14">
        <SectionHeading title="Popüler Destinasyonlar" subtitle="Keşfet" />
        <CategoriesStrip />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <DestinationCard key={d.title} {...d} />
          ))}
        </div>
      </section>

      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 animate-bg-pan"
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="container max-w-7xl container-px py-14 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Erken Rezervasyon Fırsatları
              </h3>
              <p className="mt-3 text-white/90 max-w-xl">
                Yaz tatilinizi bugünden planlayın, en iyi fiyatları kaçırmayın.
                Esnek iptal hakkı ve güvenli ödeme ile rahat edin.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#search" className="btn btn-accent h-11 px-6">
                Fiyatları Gör
              </a>
              <a
                href="/tours"
                className="btn btn-outline h-11 px-6 border-white text-white hover:bg-white/10"
              >
                Turlara Göz At
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-7xl container-px py-14">
        <SectionHeading title="Neden DreamsTour?" subtitle="Avantajlarımız" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Uzman Rehberler",
              desc: "Bölgesini en iyi bilen profesyonellerle güvenli keşif.",
              icon: (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
            },
            {
              title: "Esnek Planlar",
              desc: "İhtiyacınıza göre değiştirilebilir tarih ve rotalar.",
              icon: (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M3 6h18M3 12h12m-7 6h13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
            },
            {
              title: "Uygun Fiyat",
              desc: "Erken rezervasyonda özel kampanyalar ve taksit.",
              icon: (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M12 1v22M3 8h18M3 16h18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
            },
            {
              title: "7/24 Destek",
              desc: "Her adımda yanınızdayız, hızlı müşteri desteği.",
              icon: (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M21 15a4 4 0 00-4-4H7a4 4 0 000 8h2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {f.icon}
              </div>
              <h4 className="mt-4 font-semibold text-slate-900">{f.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container max-w-7xl container-px py-14">
        <div className="rounded-2xl bg-slate-900 p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Bültene Kayıt Olun
              </h3>
              <p className="mt-3 text-white/80">
                İndirimler ve yeni turlar için e-posta alın.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="h-11 flex-1 rounded-md border border-white/20 bg-white/10 px-3 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn btn-accent h-11 px-6">Kayıt Ol</button>
            </form>
          </div>
        </div>
      </section>

      <p className="sr-only">{exampleFromServer}</p>
    </div>
  );
}
