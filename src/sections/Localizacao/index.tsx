import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import type { LatLngExpression } from "leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const coordenadas: LatLngExpression = [-16.6818457, -49.270237];

export function Localizacao() {
  return (
    <Section id="localizacao">
      <SectionTitle>Localização</SectionTitle>
      <div className="flex flex-col items-center justify-center gap-5 md:mt-5 md:flex-row-reverse md:gap-10">
        <div className="md:max-w-64">
          <p className="text-xl font-bold">01 de agosto 2026, às 18h</p>
          <p className="mt-5 text-xl font-bold">
            Salão de Festas do Boulevard des Roses
          </p>
          <p className="mt-5">
            Alameda das Rosas, Qd. G-2, Lts. 36/38 - St. Oeste, Goiânia - GO,
            74110-060
          </p>
          <a
            href="https://maps.app.goo.gl/7dmyxFy3HCfT33Ly6"
            className="text-brown underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
        <MapContainer
          center={coordenadas}
          zoom={12}
          scrollWheelZoom={true}
          style={{
            minHeight: "18rem",
            width: "100%",
            maxWidth: "26rem",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={coordenadas}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <div className="text-center">
                <b>Boulevard des Roses</b>
                <br />
                Alameda das Rosas, Qd. G-2, Lts. 36/38
                <br />
                St. Oeste, Goiânia - GO, 74110-060
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Section>
  );
}
