import "./styles.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup} from "react-leaflet";
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
const ActivityIcon = new Icon({
    iconUrl: require("./icons/aktiviteter pins.png"),
    iconSize:[38,38]});
const StoreIcon = new Icon({
    iconUrl: require("./icons/butikk-pins.png"),
    iconSize:[38,38]
});
const CafeIcon = new Icon({
    iconUrl: require("./icons/kafe-pin.png"),
    iconSize:[38,38]
});
const TripIcon = new Icon({
    iconUrl: require("./icons/turer- pin.png"),
    iconSize:[38,38]
});

// markers, copy var markers =[{geocode:[], popUp:""},{geocode:[],popUp:""},{geocode:[],popUp:""}];
var restaurantMarkers = [{geocode: [59.917644, 10.755655],   popUp: "Velochef",}, {geocode: [59.915852, 10.75083], popUp: "Oslo Streetfood",}, {geocode: [59.91217, 10.72673], popUp: "Via village",},];
var drinkMarkers = [{geocode:[59.910700,10.745920], popUp:"Posthallen"},{geocode: [59.913261,10.748660],popUp: "Brygg"},{geocode: [59.913750,10.739480], popUp: "Grand Takterrasse"}];
var activityMarkers =[{geocode:[59.920840,10.770660], popUp:"Naturhistorisk museum"},{geocode: [59.907370,10.722590],popUp: "Astrup Fearnley-museet"}]
var storeMarkers =[{geocode:[59.912160,10.742760],popUp:"Steen & Strøm"},{geocode:[59.912682,10.746080],popUp:"Glassmagasinet"},{geocode:[59.913410,10.754020],popUp:"Oslo City"}];
var cafeMarkers =[{geocode:[59.917697, 10.7540055],popUp:"Cafè Sara"},{geocode:[59.9116905,10.7479494],popUp:"Kaffebrenneriet, Arkaden"}];
var tripmarkers =[{geocode:[59.970163, 10.726211], popUp:"Sognsvann"},{geocode:[59.976417, 10.676161],popUp:"Frognerseteren"},{geocode:[59.894386, 10.765818],popUp:"Ekebergparken"}];

export default function App() {
  return (
    <MapContainer center={[59.9138688, 10.7522454]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topleft">
        <LayersControl.Overlay name="Restaurants" checked>
            <LayerGroup>
          {restaurantMarkers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={RestaurantIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
          ))}
            </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Drinks" checked>
            <LayerGroup>
          {drinkMarkers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={DrinkIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
          ))}
            </LayerGroup>
        </LayersControl.Overlay>
          <LayersControl.Overlay name="Activities" checked>
              <LayerGroup>
                  {activityMarkers.map((marker, index) => (
                      <Marker key={index} position={marker.geocode} icon={ActivityIcon}>
                          <Popup>{marker.popUp}</Popup>
                      </Marker>
                  ))}
              </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Stores" checked>
              <LayerGroup>
                  {storeMarkers.map((marker, index) => (
                      <Marker key={index} position={marker.geocode} icon={StoreIcon}>
                          <Popup>{marker.popUp}</Popup>
                      </Marker>
                  ))}
              </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cafès" checked>
              <LayerGroup>
                  {cafeMarkers.map((marker, index) => (
                      <Marker key={index} position={marker.geocode} icon={CafeIcon}>
                          <Popup>{marker.popUp}</Popup>
                      </Marker>
                  ))}
              </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Trips" checked>
              <LayerGroup>
                  {tripmarkers.map((marker, index) => (
                      <Marker key={index} position={marker.geocode} icon={TripIcon}>
                          <Popup>{marker.popUp}</Popup>
                      </Marker>
                  ))}
              </LayerGroup>
          </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
