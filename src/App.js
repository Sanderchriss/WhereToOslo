import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: require("./icons/restauranter pin.png"),
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

export default function App() {
  return (
    <MapContainer center={[59.9138688, 10.7522454]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {restaurantMarkers.map((restaurantMarkers) => (
        <Marker position={restaurantMarkers.geocode} icon={customIcon}>
          <Popup>{restaurantMarkers.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
