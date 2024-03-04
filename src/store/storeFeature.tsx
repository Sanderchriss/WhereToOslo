import { Feature } from "ol";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";
import { Circle, Fill, Stroke, Style } from "ol/style";

export interface storeProperties {
  name: string;
}
export type storeFeature = {
  getproperties(): storeProperties;
} & Feature<Point>;
export const storeStyle = (feature: FeatureLike) => {
  const store = feature.getProperties() as storeProperties;
  return new Style({
    image: new Circle({
      fill: new Fill({ color: "rgba(68,126,241,0.8)" }),
      stroke: new Stroke({ color: "#eeeeee" }),
      radius: 5,
    }),
  });
};
export const activeStoreStyle = (feature: FeatureLike) => {
  const store = feature.getProperties() as storeProperties;
  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Circle({
      fill: new Fill({ color: "rgba(68,126,241,1)" }),
      stroke: new Stroke({ color: "#eeeeee", width: 3 }),
      radius: 5,
    }),
  });
};
