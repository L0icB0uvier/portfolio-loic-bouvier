import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as HeaderStyles from "./header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const [showNav, setShowNav] = useState(false)

  function MenuItems() {
    if (showNav === true) {
      return (
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
  }

  return (
    <header className={HeaderStyles.wrapper}>
      <div className={HeaderStyles.mainContainer}>
        <Link to="/" className={HeaderStyles.homeButton}>
          <h2 className={HeaderStyles.homeText}>Loïc Bouvier</h2>
        </Link>
        <button
          onClick={() => setShowNav(!showNav)}
          className={HeaderStyles.menuButton}
        >
          {showNav === true ? (
            <StaticImage src="../images/close.svg" alt="menu Icon" width={32} />
          ) : (
            <StaticImage src="../images/menu.png" alt="menu Icon" width={32} />
          )}
        </button>
      </div>
      <MenuItems />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
