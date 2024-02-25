"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React from "react";

const MapsLeaflet = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        // className="w-1/2 min-h-10 max-h-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.opensteetmap.org/copyright">OpenstreetMap</a> Contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, 0.09]}>
          <Popup>test</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapsLeaflet;
