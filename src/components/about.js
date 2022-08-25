import React from "react"
import * as AboutStyles from "../css/about.module.css"
import SectionTitle from "./sectionTitle"

const About = () => {
  return (
    <section id="about" className={AboutStyles.sectionWrapper}>
      <div className={AboutStyles.containerWrapper}>
        <SectionTitle title="01 - A Propos" />
        <div className={AboutStyles.mainContainer}>
          <div>
            <h2>Qui-suis je?</h2>
            <p>
              Étant passionné de jeux vidéo, j'ai décidé suite à mes étude de
              suivre un rêve d’enfant et de développer un jeu vidéo.
            </p>
            <p>
              J’aime par-dessus tout <strong>résoudre des problèmes</strong>, ce
              qui m’a permis d’être instantanément stimulé par le{" "}
              <strong>Game Design</strong> et la <strong>Programmation</strong>.
              Aujourd’hui, rien ne m’intéresse plus que de travailler sur un
              projet de jeu vidéo sur lequel j’ai une vision d’ensemble et qui
              nécessite d’apprendre constamment de nouvelles compétences.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              className={AboutStyles.downloadResumeButton}
            >
              <h3 className={AboutStyles.resumeButtonText}>
                Télécharger mon CV
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
