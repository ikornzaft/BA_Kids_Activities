import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './map.styles.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ coordinates, text }) => (
    <div>
        <MapContainer center={[coordinates.y, coordinates.x]} zoom={18}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            <Marker position={[coordinates.y, coordinates.x]}> 
                <Popup className="popup">
                 {text}
                 </Popup>
            </ Marker>
        </ MapContainer>
    </div>
);

export { MapComponent };