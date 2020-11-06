import React from 'react';
import awsJson from '../SampleData.json';
import { Row } from 'reactstrap';
import ReactLeafletSearch from "react-leaflet-search";



const ZoomGoTo = (props) => {


  let customProvider = {
    search: async (searchText) => {
     const regex = new RegExp(`^${searchText}`, 'gi');
     let matches = awsJson.map((site) => {
      let base = new Promise ((matched) => {
        let sitenum = site.sites.find((siteid) => {
          if (siteid.id.match(regex)){
            return matched (siteid, siteid.point);
          }
          if (site.baseStation.match(regex)){
            return matched (site);
          }
         else {
            return matched (' no data found');
          }
        })
         return sitenum;
      })
      return base;
      })
     console.log(matches);
     return matches;
    }
   }
  




    return(
        <Row>
            <ReactLeafletSearch 
                position="topleft"
                inputPlaceholder="Search Site"
                showMarker={true}
                zoom={7}
                closeResultsOnClick={true}
                openSearchOnLoad={false}
                customProvider={customProvider}
                // mapStateModifier={mapStateModifier}
            >
          
            </ReactLeafletSearch>
        </Row>
    )

};

export default ZoomGoTo;