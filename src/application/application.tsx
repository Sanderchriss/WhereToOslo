import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./application.css";
import "ol/ol.css";
import { MapContext, map } from "../map/mapContext";
import { Layer } from "ol/layer";
import { CenterOnUser } from "../map/centerOnUser";
import { Restaurantcheckbox } from "../restaurant/restaurantCheck";
import { Cafecheckbox } from "../cafe/cafeCheckBox";
import { Storecheckbox } from "../store/storeCheckbox";
import { Activitycheckbox } from "../activity/activityCheckbox";
import { Drinkcheckbox } from "../drink/drinkCheck";
import { MapboxVectorLayer } from "ol-mapbox-style";

export function Application() {
  const [layers, setLayers] = useState<Layer[]>([
    new MapboxVectorLayer({
      styleUrl: "mapbox://styles/mapbox/dark-v11",
      accessToken: "MAPBOX_API_KEY",
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
        <Drinkcheckbox />
      </nav>
    </MapContext.Provider>
  );
}
