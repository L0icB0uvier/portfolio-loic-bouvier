import * as React from "react"
import Prensentation from "../components/introduction"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

import CV from "../components/CV"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Prensentation />
    <About />
    <Projects />
    <CV />
    <Contact />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
