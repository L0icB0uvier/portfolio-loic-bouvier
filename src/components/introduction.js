import React from "react"
import * as IntroductionStyles from "./introduction.module.css"

const Introduction = () => {
  return (
    <div className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        <h1>Bienvenue! Je m'appelle Loïc.</h1>
        <p>
          Je suis dévelopeur de jeu sur Unity et je me passionne pour tous les
          aspects du développement de jeu, du Game Design à la programmation!
        </p>
      </div>
    </div>
  )
}

export default Introduction
