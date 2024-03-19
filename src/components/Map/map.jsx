import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export const Map = ({ locations = [], selectedLocation = [] }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 139.753, lat: 35.6844 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = "hOkMSX6X5IQw98KmX2YA";

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.STREETS,
          center: [tokyo.lng, tokyo.lat],
          zoom: zoom
        });

        locations.forEach((location) => {
          new maptilersdk.Marker({ color: 'green' })
            .setLngLat(location)
            .addTo(map.current);
        });
      
      }, [tokyo.lng, tokyo.lat, zoom]);

      useEffect(() => {
        if (!map.current || selectedLocation.length === 0) return
        map.current.setCenter(selectedLocation)
      }, [selectedLocation])

      return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );
}