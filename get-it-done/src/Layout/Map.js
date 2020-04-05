import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {mapMarkers} from '../services/mapService';
export default props => {
  const { center, zoom, attributionControl, className } = props;
  return (
    <div className="map">
      <Map
        center={center}
        zoom={zoom}
        attributionControl={attributionControl}
        className={className}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        {mapMarkers.map((mark,i)=> <Marker key={i}position={mark.position}>
  <Popup>{mark.title}</Popup>
        </Marker>)}
       
      </Map>
    </div>
  );
};
