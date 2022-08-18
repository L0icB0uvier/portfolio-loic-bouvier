import * as React from "react"
import Projects from "../components/projects"
import Contact from "../components/contact"
import About from "../components/introduction"
import CV from "../components/CV"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Projects />
    <CV />
    <Contact />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
