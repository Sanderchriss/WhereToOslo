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
  const [selectedMarkerTypes, setSelectedMarkerTypes] = useState<string[]>([]);
  const map = useMemo(
    () =>
      new Map({
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({ center: [10.7522454, 59.9138688], zoom: 12 }),
      }),
    [],
  );
  useEffect(() => {
    // Handle changes in selected marker types
    // Update map layers based on selectedMarkerTypes
    // You need to implement this logic based on your requirements
  }, [selectedMarkerTypes]);

  useEffect(() => {
    map.setLayers(layers);
  }, [layers]);

  const handleCheckboxChange = (type: string, isChecked: boolean) => {
    // Handle changes in checkbox state
    // Update selectedMarkerTypes or perform other actions
    setSelectedMarkerTypes((prevTypes) =>
      isChecked ? [...prevTypes, type] : prevTypes.filter((t) => t !== type),
    );
  };

  return (
    <>
      <MapView map={map} />
      <header></header>
      <nav>
        <CenterOnUser view={map.getView()} map={map} />
      </nav>
    </>
  );
}
