import React from 'react';

// Components
import MtDews from './MtDews/MtDews';


// Style
import classes from './Mapping.module.css';

// Leaflet
import L from 'leaflet';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ZoomGoTo from './MtDews/ZoomGoTo/zoomgoto';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;




const Mapping = (props) => {
  const position = [13, 122];

  const onViewportChanged = (viewport) => {
    props.onZoomChange(viewport.zoom);
  };


  let mtDews = null;
  if (props.sideBarValue.mtDews.show) {
    mtDews = (
      <MtDews
        zoomLevel={props.zoomLevel}
        baseStation={props.sideBarValue.mtDews.baseStation}
        sites={props.sideBarValue.mtDews.sites}
      />
    );
  }
  return (
    <Map
      center={position}
      zoom={props.zoomLevel}
      className={classes.Mapping}
      onViewportChanged={onViewportChanged}
    >
      {mtDews}
      <ZoomGoTo />

      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="&copy; Scarp - Mapúa"
      />
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="Esri.WorldImagery">
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Stamen.Terrain">
          <TileLayer
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="GeoportailFrance.orthos">
          <TileLayer
            attribution='<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>'
            url="https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </Map>
  );
};

export default Mapping;
