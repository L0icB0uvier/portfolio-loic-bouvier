import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as AboutStyles from "../css/about.module.css"
import SectionTitle from "./sectionTitle"
import { Grid } from "@material-ui/core"

const About = () => {
  return (
    <section id="about" className={AboutStyles.sectionWrapper}>
      <div className={AboutStyles.containerWrapper}>
        <SectionTitle title="A Propos" />
        <div className={AboutStyles.mainContainer}>
          <div>
            <Grid className={AboutStyles.grid}>
              <h2 className={AboutStyles.title}>Qui suis-je?</h2>
              <StaticImage
                  src="../images/Portrait_5.jpg"
                  alt="Photo"
                  layout="constrained"
                  formats={["webp"]}
                  aspectRatio={2 / 3}
                  className={AboutStyles.photo}
                />
              <div className={AboutStyles.text}>
                <p>
                  Passionné de jeux vidéo depuis mon plus jeune âge, je suis
                  un développeur autodidacte avec 8 ans d'expérience sur <strong>Unity</strong>.
                </p>
                <p style={{ marginBottom: 0 }}>
                  J’aime par-dessus tout <strong>résoudre des problèmes</strong>
                  , ce qui m’a permis d’être instantanément stimulé par le{" "}
                  <strong>Game Design</strong> et la{" "}
                  <strong>Programmation</strong>. Aujourd’hui, rien ne
                  m’intéresse plus que de travailler sur un projet qui nécessite
                  d’apprendre constamment de nouvelles compétences.
                </p>
              </div>
              <a href="/resume.pdf" target="_blank" className={AboutStyles.downloadResumeButton}>
                <h2 className={AboutStyles.resumeButtonText}>
                  Télécharger mon CV
                </h2>
              </a>
            </Grid>

            {/* <div className={AboutStyles.flex}>
              <StaticImage
                src="../images/Portrait_2.jpg"
                alt="Photo"
                layout="constrained"
                formats={["webp"]}
                aspectRatio={2 / 3}
                className={AboutStyles.photo}
              />
              <div className={AboutStyles.text}>
                <p>
                  Passionné de jeux vidéo depuis mon plus jeune âge, je suis
                  un développeur autodidacte avec 8 ans d'expérience sur <strong>Unity</strong>.
                </p>
                <p style={{ marginBottom: 0 }}>
                  J’aime par-dessus tout <strong>résoudre des problèmes</strong>
                  , ce qui m’a permis d’être instantanément stimulé par le{" "}
                  <strong>Game Design</strong> et la{" "}
                  <strong>Programmation</strong>. Aujourd’hui, rien ne
                  m’intéresse plus que de travailler sur un projet qui nécessite
                  d’apprendre constamment de nouvelles compétences.
                </p>
              </div>
            </div> */}
            {/* <a
              href="/resume.pdf"
              target="_blank"
              className={AboutStyles.downloadResumeButton}
            >
              <h3 className={AboutStyles.resumeButtonText}>
                Télécharger mon CV
              </h3>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
