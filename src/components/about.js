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
                {/* <p>
                  Passionné de jeux vidéo depuis mon plus jeune âge, j'ai appris le développement en autodidacte avec comme objectif de créer un studio de jeu vidéo.
                </p> */}

                <p>
                  Diplomé d'école de commerce en 2016, j'ai vécu 6 ans au Vietnam où j'ai acquis un niveau Bilingue en Anglais, découvert une autre culture de l'intérieur et appris le développement <strong>Unity</strong>.
                </p>

                <p>
                  D'un naturel curieux et solutionniste, j'ai instantanément été stimulé par le développement de jeux vidéo et la programmation et n'ai eu cesse d'améliorer mes compétences au point de devenir un développeur professionnel.
                </p>

                <p style={{ marginBottom: 0 }}>
                  Autonome, polyvalent et passionné, je cherche aujourd'hui à rejoindre une structure qui saura mettre à profit mon savoir-faire et me donnera l'opportunité des travailler sur des projets passionnants et formateurs.
                </p>

              </div>
              <a href="/resume.pdf" target="_blank" className={AboutStyles.downloadResumeButton}>
                <h2 className={AboutStyles.resumeButtonText}>
                  Télécharger mon CV
                </h2>
              </a>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
