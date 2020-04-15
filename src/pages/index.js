import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import VanityFigure from "../components/VanityFigure"
import Slider from "../components/slider/Slider"
import Ticker from "../components/ticker/Ticker"
import GoogleMap from "../components/GoogleMap"

import UBCLogo from "../images/UBC_Logo.png"
import ParkingMeter from "../images/parking-meter-image.png"
import Bench from  "../images/bench-illustration.png"

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
            <h1>Your campus is coming to life, and wants to chat!</h1>
            <div className="learn-more-btn blue-btn">
              <AnchorLink href='#whatif'><span>Learn More</span></AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Inital Context */}
    <div className="container what-is" id="whatif">
      <div className="row split-column">
        <div className="left-column illustration">
          <div>
            <img src={ParkingMeter} alt ="Parking Meter Illustration"/>
          </div>
        </div>
        <div className="right-column">
          <h1>What is Hello UBC</h1>
          <p>Have you ever spoken to a parking meter? Probably not (unless of course you were really angry).</p>
          <p>However, previously silent objects are waking up and looking for someone to chat to! Across UBC’s Campus, parking meters, elevators and more in and around parkades and parking lots are coming to life and ready to have unique conversations with you! To join the conversation all you need is your mobile phone.</p>
          <p>Conversations will take the form of interactive questions. Find out what each object has to say!</p>
        </div>
      </div>
    </div>


    {/* Data & Vanity Figures */}
    <div className="light-bg">
      <div className="container">
        <div className="row data-section">
            <div className="vanity-figures">
              <VanityFigure figureType="Conversations"/>
              <VanityFigure figureType="Interactions"/>
              <VanityFigure figureType="Players"/>
            </div>

            <div className="data-vis">
              <Slider/>
            </div>
        </div>
      </div>
    </div>


    {/* Impact */}
    <div className="container">
      <div className="row split-column project-impact">
        <div className="left-column">
        <h1>What's in it for me?</h1>
          <p>
            <ul>
              <li>Learn the stories of UBC Campus & its residents.</li>
              <li>Keep informed on changes to campus.</li>
              <li>Provide feedback & opinions on your campus.</li>
            </ul>
          </p>

          <h2>How to play</h2>
          <p>All you need to chat with the Objects, is a basic mobile phone! It’s free to play (standard text messaging rates apply) and suitable for all ages. Just look out for the yellow signs on objects across campus</p>
        </div>
        <div className="right-column illustration">
          <div>
            <img src={Bench} alt="Bench Illustration"/>
          </div>
        </div>
      </div>
    </div>


    {/* Ticker */}
    <div className="container">
      <Ticker/>
    </div>

    {/* Google Map */}
    <GoogleMap/>

    {/* Testimonial */}
    <div className="testimonial">
      <div className="container">
      {/* <h2>Quote from UBC</h2> */}
      <div class="quote">
        <p>“By turning everyday objects into beacons for conversation, we’ve shown that we can engage the campus through specific and personal interactions. The real-time data we’ve received has given us insight into the pain points and wants of our commuters, allowing us to make informed strategic decisions.”</p>
        <h3>University Community Services | Parking and Access Services</h3>
      </div>
      </div>
    </div>

    {/* Get In Tocuh */}
    <div className="container contact">
      <div className="text-holder">
        <h1>Get In Touch</h1>
        <p>We are always happy to hear from you whether you’re looking for more info or to collaborate with us. Don't hesitate to drop us a message!</p>
        <div className="blue-btn">
          <span>Email Us</span>
        </div>
      </div>
    </div>  
  </Layout>
)

export default IndexPage
