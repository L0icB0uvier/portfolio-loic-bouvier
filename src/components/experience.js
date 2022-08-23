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
          Passioné de jeux vidéo depuis mon plus jeune age, c'est tardivement
          que je me suis intéressé au développement de jeux. Je suis ainsi parti
          de zéro et j'ai appris par moi même à l'aide de cours en lignes, de
          livres et de tutoriel sur Youtube.
        </p>
        <p>
          J'ai commencé mon parcour de game developeur sur Unreal Engine en
          travaillant sur un projet 3D avec un artiste. Après avoir passé près
          d'un an à découvrir les différentes facettes du développement de jeux,
          nous avons décidé de changer de moteur et de nous lancer dans un
          projet avec un scope plus raisonable. C'est ainsi que j'ai attéri sur
          Unity.
        </p>
        <p>
          J'ai passé les 5 dernières années à développer un Puzzle/Aventure game
          en 2D trimetric appelé Synchron. Ce projet m'a permis de compléter ma
          formation en explorant tous les aspets du développement sous Unity.{" "}
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
