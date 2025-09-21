export default function SearchBar() {
  return (
    <div id="search" className="-mt-10 relative z-10">
      <div className="container max-w-6xl container-px">
        <div className="rounded-2xl bg-white/95 shadow-xl ring-1 ring-black/5 backdrop-blur">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-4 sm:p-6">
            <div className="lg:col-span-2">
              <label className="block text-xs font-semibold text-slate-700">
                Nereye?
              </label>
              <input
                className="mt-2 h-11 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Şehir / Ülke"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Giriş
              </label>
              <input
                type="date"
                className="mt-2 h-11 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Çıkış
              </label>
              <input
                type="date"
                className="mt-2 h-11 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-end">
              <button className="btn btn-primary h-11 w-full">Ara</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
