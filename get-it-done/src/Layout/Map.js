import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
export default props => {
  const { center, zoom, attributionControl, className } = props;
    console.log(props);
  return (
    <div className="map">
      <Map
        center={center}
        zoom={zoom}
        attributionControl={attributionControl}
        className={className}
      
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <Marker position={center}>
          <Popup>זקן במצוקה!!!</Popup>
        </Marker>
      </Map>
    </div>
  );
};
