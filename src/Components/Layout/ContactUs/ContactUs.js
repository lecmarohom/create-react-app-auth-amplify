import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import classes from './ContactUs.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

export default class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
            {/* <div>
                <Navigation />
            </div> */}
            <div className={classes.CardImage}>
                <Card className={classes.Cardbody}>
                    <CardBody>
                        <CardTitle className={classes.textTitle}>
                            Engr. Fibor J. Tan
                        </CardTitle>
                        <CardSubtitle className={classes.textSubTitle}>
                            Project Leader, SCaRP Philippines Team
                        </CardSubtitle>
                        <CardBody className={classes.textAddress}>
                            RRm1 Yuchengco Innovation Center, Mapúa University, <br />
                            658 Muralla St. Intramuros Manila Philippines 1002
                        </CardBody>
                        <CardBody className={classes.textInfo1}>
                            Phone:
                            <div className={classes.textinfo2}>
                             (02) 8247 5000
                            </div>
                        </CardBody>
                        <CardBody className={classes.textInfo1}>
                            Email address: 
                            <div className={classes.textinfo2}>
                            fjtan@mapua.edu.ph
                            </div>
                        </CardBody>
                    </CardBody>
                </Card>
            </div>
            {/* <Footer /> */}
            </React.Fragment>
        )
    }
}
