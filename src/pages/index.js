import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import UBCLogo from "../images/UBC_Logo.png"
import ParkingMeter from "../images/parking-meter-image.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello UBC" />

    {/* Above Fold */}
    <div className="above-fold">
      <div className="center-center">
        <div className="content">
          <div className="image-holder">
            <img src={UBCLogo} alt="Hello UBC Logo"/>
          </div>
          <div className="text-holder">
            <h1>Objects are coming to life!</h1>
            <div className="learn-more-btn blue-btn">
              <span>Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Inital Context */}
    <div className="row split-column">
      <div className="left-column">
        <img src={ParkingMeter} alt ="Parking Meter Illustration"/>
      </div>
      <div className="right-column">
        <h1>What is Hello Lamp Post & 'Hello UBC'</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan ipsum vel lacinia laoreet. Sed non ultricies mi, nec pellentesque nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam neque nisl, commodo ut sem consectetur, auctor sodales massa. Phasellus sit amet efficitur augue. </p>
      </div>
    </div>


    {/* Data & Vanity Figures */}

    <div className="row">
      <div>
        <div className="vanity-figures">
          <ul>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
