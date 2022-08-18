import React from "react"
import * as IntroductionStyles from "./introduction.module.css"

const About = () => {
  return (
    <section id="about" className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        <h1>Bienvenue! Je m'appelle Loïc.</h1>
        <p>
          Je suis dévelopeur de jeu sur Unity et je me passionne pour tous les
          aspects du développement de jeu, du Game Design à la programmation!
        </p>
        <h2>Qui suis-je?</h2>
        <p></p>
      </div>
    </section>
  )
}

export default About
