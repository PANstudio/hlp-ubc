import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/hellolamppost_logo.svg"
import SocialMedia from "./SocialMediaIcons"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <img src={Logo} alt="Hello Lamp Post"/>
    </div>
    <SocialMedia/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
