import React, { useEffect, useMemo, useState } from "react";

import "./application.css";
import { MapView } from "../map/viewMap";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import { Layer } from "ol/layer";
import { CenterOnUser } from "../map/centerOnUser";

useGeographic();

export function App() {
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);
  const map = useMemo(
    () =>
      new Map({
        view: new View({ center: [10.7522454, 59.9138688], zoom: 12 }),
      }),
    [],
  );
  useEffect(() => {
    map.setLayers(layers);
  }, [layers]);

  return (
    <>
      <header></header>
      <nav>
        <CenterOnUser view={map.getView()} map={map} />
      </nav>
      <MapView map={map} />
    </>
  );
}
