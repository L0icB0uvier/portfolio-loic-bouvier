import React from "react"
import ResumeSectionTitle from "./resumeSectionTitle"
import * as ExperienceStyles from "../css/experience.module.css"

const Experience = () => {
  return (
    <div className={ExperienceStyles.wrapper}>
      <div className={ExperienceStyles.mainContainer}>
        <svg
          className={ExperienceStyles.handleTop}
          width={200}
          height={32}
          viewBox="0 0 200 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L 200 0 L 180 32 L 20 32z"></path>
        </svg>
        <ResumeSectionTitle title="Expérience" />
        <p>
          Après une courte expérience sur <strong>Unreal Engine</strong>, je
          suis passé sur <strong>Unity</strong> et, avec l’aide d’un artiste,
          j'ai développé entre 2017 et 2022 un jeu de
          Puzzle/Aventure en 2D trimétrique appelé <strong>Synchron</strong>.
        </p>
        <p>
          C’est à travers ce projet que je suis parvenu à maitriser le moteur de
          jeu Unity, que j’ai acquis mes nombreuses compétences, que j’ai mis à
          exécution mes connaissances en gestion de projet et surtout que j’ai
          appris à apprendre.
        </p>
        <p> 
            Faute d'avoir pu trouver des fincancements pour terminer ce projet, j'ai rejoint un studio de jeux mobile crée par <strong>Voodoo</strong> appelé <strong>Ripe Groove Lab</strong> ayant pour ambition de développer des jeux utilisant la technologie <strong>blockchain</strong>. 
            Après avoir travailler pendant 7 mois sur 3 jeux différents, le studio a fermé et je suis maintenant à la recherche de mon prochain emploi.  
        </p>

        <svg
          className={ExperienceStyles.handleBottom}
          width={200}
          height={32}
          viewBox="0 0 200 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 32 L 200 32 L 180 0 L 20 0z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Experience
