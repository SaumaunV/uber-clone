import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Map() {

  const center = {
    lat: 41.89,
    lng: -87.63,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY!,
    libraries: ["places"]
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="flex-1">
      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Map);
