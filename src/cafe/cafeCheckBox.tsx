import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CheckedLayers } from "../map/layers";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { MapBrowserEvent, Overlay } from "ol";
import { FeatureLike } from "ol/Feature";
import { map } from "../map/mapContext";
import { activeCafeStyle, cafeFeature, cafeStyle } from "./cafeFeature";

const cafeLayer = new VectorLayer({
  className: "Cafe",
  source: new VectorSource({
    url: "/WhereToOslo/json/cafe.geojson",
    format: new GeoJSON(),
  }),
  style: cafeStyle,
});

export function Cafecheckbox() {
  const [checked, setChecked] = useState(false);

  CheckedLayers(cafeLayer, checked);
  const [activeFeature, setActiveFeature] = useState<cafeFeature>();
  const overlay = useMemo(() => new Overlay({}), []);
  const overlayref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    overlay.setElement(overlayref.current);
    map.addOverlay(overlay);
    console.log("overlay clicked");
    return () => {
      map.removeOverlay(overlay);
    };
  }, [overlay]);

  function handlePointerMove(e: MapBrowserEvent<MouseEvent>) {
    const features: FeatureLike[] = [];
    map.forEachFeatureAtPixel(e.pixel, (f) => features.push(f), {
      hitTolerance: 5,
      layerFilter: (l) => l === cafeLayer,
    });
    if (features.length === 1) {
      setActiveFeature(features[0] as cafeFeature);
      overlay.setPosition(e.coordinate);
    } else {
      setActiveFeature(undefined);
      overlay.setPosition(undefined);
    }
  }

  useEffect(() => {
    activeFeature?.setStyle(activeCafeStyle);
    return () => activeFeature?.setStyle(undefined);
  }, [activeFeature]);
  useEffect(() => {
    if (checked) {
      map?.on("click", handlePointerMove);
    }
    return () => map?.un("click", handlePointerMove);
  }, [checked]);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "Hide" : "Show"} Café
      </label>
      <div ref={overlayref} className={"overlay"}>
        {activeFeature && (
          <>
            <p>Navn: {activeFeature.get("name")}</p>
          </>
        )}
      </div>
    </div>
  );
}
