import "./styles.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup} from "react-leaflet";
import { Icon } from "leaflet";

// create custom icon
const RestaurantIcon = new Icon({
    iconUrl: require("./icons/restauranter pin.png"),
    iconSize: [38, 38], // size of the icon
});
const DrinkIcon = new Icon({
    iconUrl: require("./icons/Drink-pin-kopi.png"),
    iconSize: [38, 38],
});
const BarIcon = new Icon({
    iconUrl: require("./icons/øl-pins.png"),
    iconSize:[38,38]
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
let restaurantMarkers = [{geocode: [59.917644, 10.755655],   popUp: "Velochef",}, {geocode: [59.915852, 10.75083], popUp: "Oslo Streetfood",}, {geocode: [59.91217, 10.72673], popUp: "Via village",},];
let drinkMarkers = [{geocode:[59.910700,10.745920], popUp:"Posthallen"},{geocode: [59.913261,10.748660],popUp: "Brygg"},{geocode: [59.913750,10.739480], popUp: "Grand Takterrasse"}];
let activityMarkers =[{geocode:[59.920840,10.770660], popUp:"Naturhistorisk museum"},{geocode: [59.907370,10.722590],popUp: "Astrup Fearnley-museet"}]
let storeMarkers =[{geocode:[59.912160,10.742760],popUp:"Steen & Strøm"},{geocode:[59.912682,10.746080],popUp:"Glassmagasinet"},{geocode:[59.913410,10.754020],popUp:"Oslo City"}];
let cafeMarkers =[{geocode:[59.917697, 10.7540055],popUp:"Cafè Sara"},{geocode:[59.9116905,10.7479494],popUp:"Kaffebrenneriet, Arkaden"}];
let tripMarkers =[{geocode:[59.970163, 10.726211], popUp:"Sognsvann"},{geocode:[59.976417, 10.676161],popUp:"Frognerseteren"},{geocode:[59.894386, 10.765818],popUp:"Ekebergparken"}];
let barMarkers =[{geocode:[59.928699, 10.715786], popUp:"Den Gamle Major"},{geocode: [59.922155, 10.751544], popUp: "House of Nerds"}]
export default function Map(){

    return(
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
        <LayersControl.Overlay name="Drinks and Bars" checked>
            <LayerGroup>
                {drinkMarkers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={DrinkIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}

                {barMarkers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={BarIcon}>
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
                {tripMarkers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={TripIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}
            </LayerGroup>
        </LayersControl.Overlay>
    </LayersControl>
</MapContainer>)}