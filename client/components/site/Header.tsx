import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/destinations", label: "Destinasyonlar" },
  { to: "/tours", label: "Turlar" },
  { to: "/about", label: "Hakkımızda" },
  { to: "/contact", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container max-w-7xl container-px">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" aria-label="Antalya Tourbox anasayfa">
              <img
                src="https://antalyatourbox.com/image/cache/catalog/yeni-logo-400x84.png.webp"
                alt="Antalya Tourbox"
                className="h-9 w-auto"
                width={120}
                height={25}
                loading="eager"
                decoding="async"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100",
                    isActive && "text-primary bg-primary/10",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="#" className="btn btn-outline h-10 px-4">
              Giriş
            </Link>
            <Link to="#" className="btn btn-accent h-10 px-4">
              Hemen Rezervasyon
            </Link>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-slate-700"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-1">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100",
                      isActive && "text-primary bg-primary/10",
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <Link to="#" className="btn btn-outline h-10 px-4 flex-1">
                  Giriş
                </Link>
                <Link to="#" className="btn btn-accent h-10 px-4 flex-1">
                  Rezervasyon
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
