import React, { Component } from 'react'
import classes from './AboutProject.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default class AboutProject extends Component {
    render() {
        return (
            <div className={classes.Container}>
                 <ScrollAnimation animateIn="animate__jackInTheBox">
                    <h1> About SCaRP </h1>
                 </ScrollAnimation>
                
                 <ScrollAnimation animateIn="animate__zoomIn">
                <p className={classes.AboutParag}>The project entitled, “Simulating Cascading Rainfall-triggered Landslide Hazards in the Philippines (SCaRP)” 
                is funded by the Department of Science and Technology (DOST-PCIEERD) and UK NERC through Newton Agham. 
                The project aims to understand the relationship between landslide events, meteorological drivers, and 
                preconditioning landslide factors in the country in order to predict landslides and relate them to sediment 
                delivery rates to nearby river systems.</p>

                <p className={classes.AboutParag}>Engr. Fibor J. Tan is an Associate Professor of Mapua University in Manila, Philippines and a candidate in 
                PhD in Civil Engineering major in Water Resources Engineering. Dr. Georgina Bennett obtained her PhD at ETH Zurich in 
                2013 and is a previous lecturer in the Physical Geography of Natural Hazards at the University of East Anglia (UEA) 
                with expertise in hazards and earth-surface dynamics of steep mountain catchments; she currently teaches at 
                the University of Exeter (UOE). The members of the project are competent engineers and scientists from
                 United Kingdom (UEA/UOE Team) and the Philippines (Mapua Team) who will be working on pilot study areas such as 
                 Ilocos Norte, Benguet, Isabela, Quezon, Biliran, Bohol, and Bukidnon (and the most recent addition of Cebu) 
                 on its three-year duration, 2019 - 2022. The Mapua team is based at Yuchengco Innovation Center.
                 </p>
                 </ScrollAnimation>
            </div>
        )
    }
}
