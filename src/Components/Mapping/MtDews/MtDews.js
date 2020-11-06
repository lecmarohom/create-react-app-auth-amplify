import React from 'react';
import { Popup, Marker, GeoJSON } from 'react-leaflet';

import Payload from './Payload/Payload';
import awsJson from './SampleData.json';

const MtDews = (props) => {
  let plots = awsJson.map((baseStation, index) => {
    let plot = null;
    let sites = null;

    if (props.baseStation) {
      plot = (
        <GeoJSON key={baseStation.baseStation} data={baseStation.geoJson} />
      );
    }

    if (props.sites && props.zoomLevel >= 10) {
      sites = baseStation.sites.map((site, index) => {
        return (
          <Marker key={site.id} position={site.point}>
            <Popup>
              <h5>Site: {site.id}</h5>
              <Payload value={site.payLoad} threshold={site.threshold} />
            </Popup>
          </Marker>
        );
      });
    }

    return [plot, sites];
  });
  return plots;
};

export default MtDews;
