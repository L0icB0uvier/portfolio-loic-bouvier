import * as React from "react"
import Prensentation from "../components/introduction"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

import Resume from "../components/CV"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Prensentation />
    <About />
    <Portfolio />
    <Resume />
    <Contact />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
