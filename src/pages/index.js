import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Projects from "../components/projects"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>
        Bienvenue! Je m'appelle Loïc.
      </h1>
      <p>Je suis dévelopeur de jeu sur Unity et je me passionne pour tous les aspects du développement de jeu, du Game Design à la programmation!</p>
      <Projects/>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
