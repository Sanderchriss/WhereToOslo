import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./application.css";
import "ol/ol.css";
import { MapContext, map } from "../map/mapContext";
import { Layer } from "ol/layer";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { CenterOnUser } from "../map/centerOnUser";
import { Restaurantcheckbox } from "../restaurant/restaurantCheck";
import { Cafecheckbox } from "../cafe/cafeCheckBox";
import { Storecheckbox } from "../store/storeCheckbox";
import { Activitycheckbox } from "../activity/activityCheckbox";

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
      <header></header>
      <nav>
        <CenterOnUser view={map.getView()} map={map} />
        <Restaurantcheckbox />
        <Cafecheckbox />
        <Storecheckbox />
        <Activitycheckbox />
      </nav>
    </MapContext.Provider>
  );
}
