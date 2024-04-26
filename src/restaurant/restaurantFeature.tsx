import { Feature } from "ol";
import { Point } from "ol/geom";

import { Style, Icon } from "ol/style";

export interface restaurantProperties {
  name: string;
  image: string;
}
export type restaurantFeature = {
  getproperties(): restaurantProperties;
} & Feature<Point>;
export const restaurantStyle = () => {
  return new Style({
    image: new Icon({
      src: "public/restauranterpin.svg",
      anchor: [0.5, 1],
      scale: 0.05,
    }),
  });
};
export const activeRestaurantStyle = () => {
  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Icon({
      src: "public/restauranterpin.svg",
      anchor: [0.5, 1],
      scale: 0.05,
    }),
  });
};
