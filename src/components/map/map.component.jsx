import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './map.styles.css';

const Map = ({ coordinates }) => (
    <div>
        <MapContainer center={[coordinates.y, coordinates.x]} zoom={18}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>
    </div>
);


export { Map };