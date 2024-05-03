import { Feature } from "ol";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";
import { Icon, Style } from "ol/style";

export interface storeProperties {
  name: string;
}
export type storeFeature = {
  getproperties(): storeProperties;
} & Feature<Point>;
export const storeStyle = (feature: FeatureLike) => {
  const store = feature.getProperties() as storeProperties;
  return new Style({
    image: new Icon({
      src: "/WhereToOslo/storePin.png",
      anchor: [0.5, 1],
      scale: 0.05,
    }),
  });
};
export const activeStoreStyle = (feature: FeatureLike) => {
  const store = feature.getProperties() as storeProperties;
  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Icon({
      src: "/WhereToOslo/storePin.png",
      anchor: [0.5, 1],
      scale: 0.06,
    }),
  });
};
