import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as HeaderStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.wrapper}>
    <Link to="/" className={HeaderStyles.text}>
      <h2 className={HeaderStyles.text}>Loïc Bouvier</h2>
    </Link>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
