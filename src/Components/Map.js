import React from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';

import '../Assets/css/layout.css';





// const Wrapper = styled.div`
//     width: ${props => props.width};
//     height: ${props => props.height};
// `;

export default class Map extends React.Component {

    componentDidMount(){
        this.map = L.map('map', {
            center: [12, 130],
            zoom: 5,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 30,
            maxNativeZoom: 20,
        }).addTo(this.map);

    }

//      constructor(props) {
//     super(props);
//     this.state = {
//       isSidebarOpen: true
//     };
//     this.togglesidebar = this.togglesidebar.bind(this);
//   }
//   togglesidebar() {
//     this.setState({isSidebarOpen: !this.state.isSidebarOpen});
//   }

    render(){

        return (


            <div id ="map" className ="body">

           </div>


        )

    }
}
