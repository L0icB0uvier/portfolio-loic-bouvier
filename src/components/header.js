import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import * as HeaderStyles from "../css/header.module.css"
import Scrollspy from "react-scrollspy"
import { AnchorLink } from "gatsby-plugin-anchor-links"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false,
      isMobile: false,
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleResize() {
    this.setState({
      isMobile: window.matchMedia("(max-width: 700px)").matches,
    })
  }

  handleToggleClick() {
    this.setState(state => ({
      showNav: !state.showNav,
    }))
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    const isMobile = this.state.isMobile
    const showNav = this.state.showNav

    let menuButtons
    if (isMobile === false || showNav) {
      menuButtons = (
        <Scrollspy
          className={HeaderStyles.anchorContainer}
          offset={isMobile ? -200 : -64}
          items={["about", "portfolio", "resume", "contact"]}
          currentClassName={HeaderStyles.active}
        >
          <AnchorLink
            to="/#about"
            className={HeaderStyles.sectionLink}
            title="A Propos"
          />
          <AnchorLink
            to="/#portfolio"
            className={HeaderStyles.sectionLink}
            title="Portfolio"
          />
          <AnchorLink
            to="/#resume"
            className={HeaderStyles.sectionLink}
            title="CV"
          />
          <AnchorLink
            to="/#contact"
            className={HeaderStyles.sectionLink}
            title="Contact"
          />
        </Scrollspy>
      )
    }

    let layout
    if (!isMobile) {
      layout = (
        <div className={HeaderStyles.mainContainer}>
          <AnchorLink
            to="/"
            className={HeaderStyles.sectionLink}
            title="Loïc Bouvier"
          />
          {menuButtons}
        </div>
      )
    } else {
      let navButton

      if (showNav) {
        navButton = (
          <StaticImage src="../images/close.svg" alt="menu Icon" width={32} />
        )
      } else {
        navButton = (
          <StaticImage src="../images/menu.svg" alt="menu Icon" width={32} />
        )
      }

      layout = (
        <div>
          <div className={HeaderStyles.mainContainer}>
            <AnchorLink
              to="/"
              className={HeaderStyles.sectionLink}
              title="Loïc Bouvier"
            />
            <button
              onClick={this.handleToggleClick}
              className={HeaderStyles.menuButton}
            >
              {navButton}
            </button>
          </div>
          {menuButtons}
        </div>
      )
    }

    return <header className={HeaderStyles.wrapper}>{layout}</header>
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
