import { View, Map, Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import React from "react";

export function CenterOnUser({ view, map }: { view: View; map: Map }) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        view.animate({ center: [longitude, latitude], zoom: 17 });
        const marker = new Feature(new Point([longitude, latitude]));
        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [marker],
          }),
        });

        map.addLayer(vectorLayer);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      },
    );
  }

  return <button onClick={handleClick}>Center on me</button>;
}
