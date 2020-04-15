import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import GraphOne from "../../images/graphs/ubc_graph_1.png"
import GraphTwo from "../../images/graphs/ubc_graph_2.png"
import GraphThree from "../../images/graphs/ubc_graph_3.png"
import GraphFour from "../../images/graphs/ubc_graph_4.png"

export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={GraphOne} alt="UBC Data 1"/>
                </div>
                <div>
                    <img src={GraphTwo} alt="UBC Data 2"/>
                </div>
                <div>
                    <img src={GraphThree} alt="UBC Data 3"/>
                </div>
                <div>
                    <img src={GraphFour} alt="UBC Data 4"/>
                </div>
            </Carousel>
        )
    }
}
