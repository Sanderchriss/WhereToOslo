import "./styles.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup, LayersControl} from "react-leaflet";
import { Icon } from "leaflet";
import React from "react";


// create custom icon
const RestaurantIcon = new Icon({
  iconUrl: require("./icons/restauranter pin.png"),
  iconSize: [38, 38], // size of the icon
});
const DrinkIcon = new Icon({
  iconUrl: require("./icons/Drink-pin-kopi.png"),
  iconSize: [38, 38], // size of the icon
});

// markers
var restaurantMarkers = [
  {
    geocode: [59.917644, 10.755655],
    popUp: "Velochef",
  },
  {
    geocode: [59.915852, 10.75083],
    popUp: "Oslo Streetfood",
  },
  {
    geocode: [59.91217, 10.72673],
    popUp: "Via village",
  },
];

var drinkMarkers = [{geocode:[59.910700,10.745920], popUp:"Posthallen"},{geocode: [59.913261,10.748660],popUp: "Brygg"},{geocode: [59.913750,10.739480], popUp: "Grand Takterrasse"}];





export default function App() {
  return (
    <MapContainer center={[59.9138688, 10.7522454]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topleft">
        <LayersControl.Overlay name="Restaurants" checked>
          {restaurantMarkers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={RestaurantIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
          ))}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Drinks" checked>
          {drinkMarkers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={DrinkIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
          ))}
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
