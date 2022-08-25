import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import TopNavLink from "./topNavLink"

import Header from "./header"
import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <TopNavLink showBelow={250} />
        <footer
          style={{
            marginTop: `10px`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <h3 style={{ textAlign: `center` }}>
            2022 L.BOUVIER - Tous droits réservés
          </h3>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
