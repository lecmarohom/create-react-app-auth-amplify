import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'


export default class SensorDownload extends Component {

    state = {
        username: ""
        
      };

    render() {
        return (
            <React.Fragment>
            {/* <div>
                <Navigation />
            </div> */}
            <div>
                <h1>
                    Hello Partner Agency {this.props.username}!
                </h1>
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </React.Fragment>
        )
    }
}

