import React from "react"
import { Link } from "gatsby"
import * as IntroductionStyles from "../css/introduction.module.css"

const Presentation = () => {
  return (
    <section id="prensentation" className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        <h1 className={IntroductionStyles.introductionText}>Bienvenu, je m'appelle</h1>
        <h1 className={IntroductionStyles.title}>Loïc Bouvier</h1>
        <h2 className={IntroductionStyles.subtitle}>
          Je suis dévelopeur de jeux vidéo sur <strong>Unity</strong>
        </h2>
        <p className={IntroductionStyles.description}>
          J'ai passé les 5 dernières années à créer un jeu vidéo indépendant
          nommé <strong>Synchron</strong> en collaboration avec Baptiste Janin.
        </p>
        <Link to="/#contact" className={IntroductionStyles.contactButton}>
          <h2 className={IntroductionStyles.contactButtonText}>Contact me!</h2>
        </Link>

        <p></p>
      </div>
    </section>
  )
}

export default Presentation
