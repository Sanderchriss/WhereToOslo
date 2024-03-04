import { Feature } from "ol";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";
import { Circle, Fill, Stroke, Style } from "ol/style";

export interface cafeProperties {
  name: string;
}
export type cafeFeature = {
  getproperties(): cafeProperties;
} & Feature<Point>;
export const cafeStyle = (feature: FeatureLike) => {
  const cafe = feature.getProperties() as cafeProperties;
  return new Style({
    image: new Circle({
      fill: new Fill({ color: "rgba(241,68,112,0.8)" }),
      stroke: new Stroke({ color: "#eeeeee" }),
      radius: 5,
    }),
  });
};
export const activeCafeStyle = (feature: FeatureLike) => {
  const cafe = feature.getProperties() as cafeProperties;
  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Circle({
      fill: new Fill({ color: "rgba(241,68,112,1)" }),
      stroke: new Stroke({ color: "#eeeeee", width: 3 }),
      radius: 5,
    }),
  });
};
