import React from "react"
import { Link } from "gatsby"
import * as IntroductionStyles from "../css/introduction.module.css"

const Presentation = () => {
  return (
    <section id="prensentation" className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        <h1 className={IntroductionStyles.title}>Bienvenue!</h1>
        <h1 className={IntroductionStyles.title}>Moi c'est Loïc</h1>
        <h3 className={IntroductionStyles.description}>
          Je suis dévelopeur de jeu sur Unity et je me passionne pour tous les
          aspects du développement de jeu, du Game Design à la programmation!
        </h3>
        <Link to="/#contact" className={IntroductionStyles.contactButton}>
          <h2 className={IntroductionStyles.contactButtonText}>Contact me!</h2>
        </Link>

        <p></p>
      </div>
    </section>
  )
}

export default Presentation
