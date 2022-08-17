import React from "react"
import * as ExperienceStyles from "./experience.module.css"

const Experience = () => {
  return (
    <section className={ExperienceStyles.wrapper}>
      <div className={ExperienceStyles.mainContainer}>
        <h1>Expérience</h1>
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
      </div>
    </section>
  )
}

export default Experience
