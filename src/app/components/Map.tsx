'use client'
import {  GoogleMap, MarkerF } from "@react-google-maps/api";

  const defaultMapContainerStyle = {
  width: '100%',
  height: '70vh',
  borderRadius: '15px 15px 15px 15px',
};

const defaultMapCenter = {
  lat: 28.679079,
  lng: 77.069710
}

const defaultMapZoom = 8
const google = window.google;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: google.maps.MapTypeId.HYBRID, //google.maps.MapTypeId.HYBRID
};

const MapComponent = () => {
  return (
    <div className="m-14">
      <GoogleMap mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}>
          <MarkerF position={defaultMapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </div>
  )
};

export { MapComponent };
