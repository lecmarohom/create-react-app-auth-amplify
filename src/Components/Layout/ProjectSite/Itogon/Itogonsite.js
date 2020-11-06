import React, { Fragment } from 'react';
import {  Row, Col, NavLink } from 'reactstrap';
import classes from './Itogon.module.css'



//components
import Navbar from '../../Navigation/Navigation'
import Footer from '../../Footer/Footer';


const items = [
    {
      src: require('../../../../Assets/images/projecsite/Itogon/pic1.jpg'),
      altText: 'Brgy. Ucab, Itogon, Benguet, Philippines (2019)',
     
    },
    {
      src: require('../../../../Assets/images/projecsite/Itogon/pic2.jpg'),
      altText: 'Itogon DEM',
    },
    {
      src: require('../../../../Assets/images/projecsite/Itogon/pic3.jpg'),
      altText: 'Quantify rates of sediment delivery by landslides and transport of sediment in rivers',
    },
    {
      src: require('../../../../Assets/images/projecsite/Itogon/pic4.jpg'),
      altText: 'Assess the impact of climate change on landslide and sedimentation in the Philippines',
    },
    {
      src: require('../../../../Assets/images/projecsite/Itogon/pic5.jpg'),
      altText: 'Identify multi-landslide events and their meteorological drivers and preconditioning factors over the Philippines',
    },
    {
      src: require('../../../../Assets/images/projecsite/Itogon/pic6.jpg'),
      altText: 'Develop and test models of landslides and downstream sedimentation over the Philippines',
    },
  ];

const Itogonsite = (props) => {
    return(
        <Fragment> 
            {/* <Navbar /> */}
            
                <Row>
                <div
                    style={{ backgroundImage: `url(${items[0].src})` }}
                    alt={items[0].altText}
                    className={classes.ImageContainer}
                >
                        {items[0].altText}
                </div>
                </Row>
             
                    <Row > 
                   
                        <Col className={classes.MiddleContainer}>
                       
                            <p className={classes.BridgeDescription}>
                              <h1> Bridge location:
                                <br /> 16.380761°, 120.698033° 
                              </h1> 
                            </p>
                           <p className={classes.SiteDescription}>
                           The Municipality of Itogon is located at a high elevation area characterized by high to medium steep slopes.
                            Various lithology are present in the area ranging from highly weathered volcanic rocks exposed at road sides
                             to tough and blocky diorite/quartz diorite. Soil prevalent in the area is mostly clay.
                            </p>

                            <NavLink className={classes.SeeMore} href='/Gallery' > See more &#62; &#62; &#62; </NavLink>
          
                        </Col>
                        <Col 
                          className={classes.MiddleMap}>
                            <img src={items[1].src} alt={items[1].altText} />
                        </Col>
                    </Row>

                    <Row>
                      <Col className={classes.ThirdContainer}>
                        <div
                            style={{ backgroundImage: `url(${items[2].src})` }}
                            alt={items[2].altText}
                            className={classes.thirdRow}
                        >
                                {items[2].altText}

                        <NavLink className={classes.SeeMore} href='/Gallery' > See more &#62; &#62; &#62; </NavLink>
                      </div>
                      </Col>

                      <Col className={classes.ThirdContainer}>
                      <div
                          style={{ backgroundImage: `url(${items[3].src})` }}
                          alt={items[3].altText}
                          className={classes.thirdRow}
                      >
                              {items[3].altText}

                              <NavLink className={classes.SeeMore} href='/Gallery' > See more &#62; &#62; &#62; </NavLink>
                      </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col className={classes.ThirdContainer}>
                      <div
                          style={{ backgroundImage: `url(${items[4].src})` }}
                          alt={items[4].altText}
                          className={classes.thirdRow}
                      >
                              {items[4].altText}

                              <NavLink className={classes.SeeMore} href='/Gallery' > See more &#62; &#62; &#62; </NavLink>
                      </div>
                      </Col>

                      <Col className={classes.ThirdContainer}>
                      <div
                          style={{ backgroundImage: `url(${items[5].src})` }}
                          alt={items[5].altText}
                          className={classes.thirdRow}
                      >
                              {items[5].altText}

                              <NavLink className={classes.SeeMore} href='/Gallery' > See more &#62; &#62; &#62; </NavLink>
                      </div>
                      </Col>
                    </Row>
            
            {/* <Footer /> */}
            
        </Fragment>
    )
}

export default Itogonsite;