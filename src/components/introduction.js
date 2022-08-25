import React from "react"
import { Link } from "gatsby"
import * as IntroductionStyles from "../css/introduction.module.css"

const Presentation = () => {
  return (
    <section id="prensentation" className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        <h1 className={IntroductionStyles.title}>Bienvenue!</h1>
        <h2 className={IntroductionStyles.title}>
          Je m'appelle <strong>Loïc Bouvier</strong>
        </h2>
        <h3 className={IntroductionStyles.description}>
          Je suis dévelopeur de jeux et je possède une vision d'ensemble
          concernant le développement d'un jeu vidéo. J'aime par dessus tout
          résoudre des problèmes, ce qui d'acquérir de solides compétences en tant que{" "}
          <strong>Programmeur</strong> et <strong>Game Designer</strong>.
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
