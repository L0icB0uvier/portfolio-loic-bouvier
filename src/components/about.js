import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as AboutStyles from "../css/about.module.css"
import SectionTitle from "./sectionTitle"

const About = () => {
  return (
    <section id="about" className={AboutStyles.sectionWrapper}>
      <div className={AboutStyles.containerWrapper}>
        <SectionTitle title="A Propos" />
        <div className={AboutStyles.mainContainer}>
          <div>
            <div className={AboutStyles.grid}>
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
                  Actuellement en reprise d'études en informatique générale à l'université Grenoble Alpes, j'ai eu un parcours qui bien qu'atypique a été extrêmement enrichissant sur le plan personnel. 
                </p>
                <p>
                  De formation commerciale, j'ai eu l'occasion de passer les premières années de ma vie professionnelle au Vietnam où suite à l'obtention de mon diplôme j'ai voulu tenté 
                  l'aventure entreprenarial en créant ma propre entreprise de développement de jeux vidéo. 
                  Bien que celà n'est pas eu le dénoument escompté, cette expérience a éveillé chez moi une véritable passion pour le monde de l'informatique et du développement logiciel.
                </p>

                <p>
                  Je m'oriente donc aujourd'hui vers une carrière dans le développement logiciel et le Cloud Computing, avec l'objectif de mettre à profit mes compétences et mon expérience pour contribuer à des projets innovants et stimulants.
                </p>
              </div>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={AboutStyles.downloadResumeButton}>
                <h2 className={AboutStyles.resumeButtonText}>
                  Télécharger mon CV
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About