import { Feature } from "ol";
import { Point } from "ol/geom";

import { Style, Icon } from "ol/style";

export interface drinkProperties {
  name: string;
  image: string;
}
export type drinkFeature = {
  getproperties(): drinkProperties;
} & Feature<Point>;
export const drinkStyle = () => {
  return new Style({
    image: new Icon({
      src: "/WhereToOslo/drinkPin.png",
      anchor: [0.5, 1],
      scale: 0.05,
    }),
  });
};
export const activeDrinkStyle = () => {
  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Icon({
      src: "/WhereToOslo/drinkPin.png",
      anchor: [0.5, 1],
      scale: 0.06,
    }),
  });
};
