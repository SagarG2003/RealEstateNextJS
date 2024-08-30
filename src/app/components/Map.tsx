'use client'
import { GoogleMap, MarkerF, Marker, Circle, InfoWindow } from "@react-google-maps/api";
import { color } from "framer-motion";
import React from "react";
import { useState } from "react";

interface location {
  lat: number;
  lng: number;
  name: string;
}

const defaultMapContainerStyle = {
  width: '100%',
  height: '70vh',
  borderRadius: '15px 15px 15px 15px',
};

const defaultMapCenter = {
  lat: 28.679079,
  lng: 77.069710
}

const locations = [
  { lat: 28.565609, lng: 77.096050, name: 'Agrawal Luxury Floors' },
  { lat: 28.480340, lng: 77.091320, name: 'DLF Limited' },
  { lat: 28.609110, lng: 77.080370, name: 'Emaar India' },
];

const defaultMapZoom = 10
const google = window.google;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: window.google ? window.google.maps.MapTypeId.HYBRID : undefined //google.maps.MapTypeId.HYBRID / satellite
};


const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState<location | null>(null);
  return (
    <div className="m-14">
      <GoogleMap mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}>
        {locations.map((location, index) => (
          <React.Fragment key={index}>
            <Circle
              center={{ lat: location.lat, lng: location.lng }}
              radius={1000}
              options={{
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.5
              }}
            />
            <Marker
              position={{ lat: location.lat, lng: location.lng }}
              onMouseOver={() => setSelectedLocation(location)}
            />
            {selectedLocation && selectedLocation.lat === location.lat && selectedLocation.lng === location.lng && (
              <InfoWindow
                position={{ lat: location.lat, lng: location.lng }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div className="text-black">{location.name}</div>
              </InfoWindow>
            )}
          </React.Fragment>
        ))}
        <MarkerF position={defaultMapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </div>
  )
};

export { MapComponent };
