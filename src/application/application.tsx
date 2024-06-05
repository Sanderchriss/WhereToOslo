import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./application.css";
import "ol/ol.css";
import { MapContext, map } from "../map/mapContext";
import { Layer } from "ol/layer";
import { CenterOnUser } from "../buttons/centerOnUser";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import CategoryModal from "../navbar/categoryModal";
import Top5Modal from "../navbar/top5Modal";
import SearchEngine from "../buttons/search";
import SettingsButton from "../buttons/settingsButton";

export function Application() {
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({
      source: new OSM(),
    }),
  ]);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => map.setTarget(mapRef.current), []);
  useEffect(() => map.setLayers(layers), [layers]);

  return (
    <MapContext.Provider value={{ map, layers, setLayers }}>
      <div ref={mapRef}></div>
      <CenterOnUser view={map.getView()} map={map} />
      <SearchEngine />
      <SettingsButton />
      <nav>
        <CategoryModal />
        <Top5Modal />
      </nav>
    </MapContext.Provider>
  );
}
