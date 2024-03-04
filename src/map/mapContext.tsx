import React, { Dispatch, SetStateAction } from "react";
import { Layer } from "ol/layer";
import { Map, View } from "ol";
import { useGeographic } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

useGeographic();

export const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({ center: [10.7522454, 59.9138688], zoom: 12 }),
});

export const MapContext = React.createContext<{
  map: Map;
  setLayers: Dispatch<SetStateAction<Layer[]>>;
  layers: Layer[];
}>({
  map,
  setLayers: () => {},
  layers: [],
});
