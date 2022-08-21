import React from "react"
import * as AboutStyles from "./about.module.css"

const About = () => {
  return (
    <section id="about" className={AboutStyles.sectionWrapper}>
      <div className={AboutStyles.containerWrapper}>
        <div className={AboutStyles.mainContainer}>
          <h2>Qui-suis je?</h2>
          <p>
            {" "}
            Je suis un développeur de jeux vidéo indépendant spécialisé dans le
            développement sous Unity. J'ai une grande expérience du
            développement de jeux 2D mais je maitrise également tous les aspects
            techniques liés au développement 3D.
          </p>
          <p>
            Autodidacte, je me suis formé au développement de jeux à la fin de
            mes études en International Business Development. J'ai vécu 5 ans au
            Vietnam, où j'ai trouvé le cadre idéal pour me réorienté tout en
            vivant une expérience incroyable. J'ai enseigné le Français afin de
            gagné ma vie et j'ai dédié tout mon temps libre à me former.
          </p>
          <p>
            J'ai fini par faire équipe avec un artiste et à nous deux, nous
            avons développé un jeu vidéo à ambition commerciale. Cette
            expérience m'a amener à développer une vaste connaissance de tous
            les aspects du développement d'un jeu.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About