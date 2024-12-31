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
          j'ai développé entre 2016 et 2022 un jeu de
          Puzzle/Aventure en 2D trimétrique appelé <strong>Synchron</strong>.
        </p>
        <p>
          C’est à travers ce projet que je suis parvenu à maitriser le moteur de
          jeu Unity, que j’ai acquis mes nombreuses compétences, que j’ai mis à
          exécution mes connaissances en gestion de projet et surtout que j’ai
          appris à apprendre.
        </p>
        <p> 
          Faute d'avoir pu trouver des fincancements pour terminer ce projet, j'ai rejoint un studio de jeux mobile crée par <strong>Voodoo</strong> appelé <strong>Ripe Groove Labs</strong> ayant pour ambition de développer des jeux <strong>Web3</strong>. 
          Après avoir travaillé pendant 7 mois sur 3 jeux différents, le studio a fermé ses portes. 
        </p>

        <p>
          J'ai ensuite commencé mon activité de Freelance que je poursuis actuellement. Ma plus grosse mission a été la réalisation d'une démo pour le jeu {" "}
          <a
            href="https://store.steampowered.com/app/2144610/Kosmocean__The_Endless_Sea/?l=french"
            target="_blank"
            rel="noreferrer"
            className={ExperienceStyles.link}
          >
            Kosmocean
          </a>
          
          {" "} du studio {" "}
          <a
            href="https://warpzonecorp.com/"
            target="_blank"
            rel="noreferrer"
            className={ExperienceStyles.link}
          >
            Warp Zone Corporation
          </a> {""}  soutenu par le CNC. De plus, Je collabore régulièrement avec {" "} 
          <a
            href="https://snackinteractive.fr/"
            target="_blank"
            rel="noreferrer"
            className={ExperienceStyles.link}
          >
            Snack Interactive
          </a>{""} sur des projets d'applications intéractives pour différents clients.
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
