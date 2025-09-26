import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import type { LatLng } from "@/lib/geo";
import "leaflet/dist/leaflet.css";

interface Props {
  fromLabel: string;
  toLabel: string;
  from: LatLng | null;
  to: LatLng | null;
  distanceKm: number | null;
  durationText: string | null;
}

export default function MapSidebar({ fromLabel, toLabel, from, to, distanceKm, durationText }: Props) {
  const center = useMemo<LatLng>(() => ({ lat: from?.lat ?? 36.8969, lng: from?.lng ?? 30.7133 }), [from]);
  const positions = useMemo(() => (from && to ? [from, to] : []), [from, to]);
  const [height, setHeight] = useState(320);

  useEffect(() => {
    const onResize = () => setHeight(Math.max(240, Math.min(520, Math.floor(window.innerHeight * 0.45))));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <aside className="space-y-3">
      <div className="rounded-lg border overflow-hidden bg-white">
        <MapContainer center={[center.lat, center.lng]} zoom={10} style={{ height }} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          {from && <Marker position={[from.lat, from.lng]} />}
          {to && <Marker position={[to.lat, to.lng]} />}
          {positions.length === 2 && <Polyline positions={positions.map((p) => [p.lat, p.lng])} color="#ef4444" />}
        </MapContainer>
      </div>

      <div className="rounded-lg border bg-white p-3 text-sm">
        <div className="font-semibold mb-2">Rota Özeti</div>
        <div className="space-y-1">
          <div><span className="text-slate-500">Alış:</span> {fromLabel || "-"}</div>
          <div><span className="text-slate-500">Varış:</span> {toLabel || "-"}</div>
          <div><span className="text-slate-500">Mesafe:</span> {distanceKm != null ? `${distanceKm.toFixed(1)} km` : "-"}</div>
          <div><span className="text-slate-500">Süre:</span> {durationText ?? "-"}</div>
        </div>
      </div>
    </aside>
  );
}
