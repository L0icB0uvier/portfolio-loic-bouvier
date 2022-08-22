import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as HeaderStyles from "./header.module.css"
import { StaticImage } from "gatsby-plugin-image"

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
    this.handleResize();
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
        <div className={HeaderStyles.anchorContainer}>
          <Link to="/#about" className={HeaderStyles.text}>
            <h2 className={HeaderStyles.text}>A propos</h2>
          </Link>
          <Link to="/#portfolio" className={HeaderStyles.text}>
            <h2 className={HeaderStyles.text}>Portfolio</h2>
          </Link>
          <Link to="/#CV" className={HeaderStyles.text}>
            <h2 className={HeaderStyles.text}>CV</h2>
          </Link>
          <Link to="/#contact" className={HeaderStyles.text}>
            <h2 className={HeaderStyles.text}>Contact</h2>
          </Link>
        </div>
      )
    }

    let layout
    if (!isMobile) {
      layout = (
        <div className={HeaderStyles.mainContainer}>
          <Link to="/" className={HeaderStyles.homeButton}>
            <h2 className={HeaderStyles.homeText}>Loïc Bouvier</h2>
          </Link>
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
        <div><div className={HeaderStyles.mainContainer}>
        <Link to="/" className={HeaderStyles.homeButton}>
          <h2 className={HeaderStyles.homeText}>Loïc Bouvier</h2>
        </Link>
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
