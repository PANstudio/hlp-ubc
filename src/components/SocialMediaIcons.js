import React, { Component } from 'react'

import FacebookIcon from "../images/social_media/facebook-icon.svg"
import InstagramIcon from "../images/social_media/instagram-icon.svg"
import LinkedInIcon from "../images/social_media/linkedin-icon.svg"
import TwitterIcon from "../images/social_media/twitter-icon.svg"

class SocialMediaIcons extends Component {
    render() {
        return (
            <ul id="social-media-icons">
                <li>
                    <a href="https://www.facebook.com/hellolamppost/" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/hellolamppost_/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/hello-lamp-post/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/hellolamppost_" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter"/>
                    </a>
                </li>
            </ul>
        )
    }
}


export default SocialMediaIcons