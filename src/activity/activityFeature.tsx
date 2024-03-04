import { Feature } from "ol";
import { Point } from "ol/geom";
import { FeatureLike } from "ol/Feature";
import { Circle, Fill, Stroke, Style } from "ol/style";

export interface activityProperties {
  name: string;
}
export type activityFeature = {
  getproperties(): activityProperties;
} & Feature<Point>;
export const activityStyle = (feature: FeatureLike) => {
  const activity = feature.getProperties() as activityProperties;
  return new Style({
    image: new Circle({
      fill: new Fill({ color: "rgba(72,211,50,0.8)" }),
      stroke: new Stroke({ color: "#eeeeee" }),
      radius: 5,
    }),
  });
};
export const activeActivityStyle = (feature: FeatureLike) => {
  const activity = feature.getProperties() as activityProperties;
  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Circle({
      fill: new Fill({ color: "rgba(72,211,50,1)" }),
      stroke: new Stroke({ color: "#eeeeee", width: 3 }),
      radius: 5,
    }),
  });
};
