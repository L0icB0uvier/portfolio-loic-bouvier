import React from "react"
import { Link } from "gatsby"
import * as IntroductionStyles from "../css/introduction.module.css"

const Presentation = () => {
  return (
    <section id="prensentation" className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        <h1 className={IntroductionStyles.title}>Loïc Bouvier</h1>
        <h2 className={IntroductionStyles.subtitle}>
          Développeur <strong>UNITY</strong>
        </h2>
        <p className={IntroductionStyles.description}>Le développement de jeux, un hobby devenu une véritable passion.</p>
        <p className={IntroductionStyles.description}>Je m'efforce constamment à me perfectionner en tant que programmeur et à explorer de nouvelles technologies en m'impliquant sur des projets stimulants autant sur le plan créatif que technique.
        </p>
        <p className={IntroductionStyles.description}>
          Je recherche un poste qui saura mettre à
          profit mes compétences.
        </p>

        <Link to="/#contact" className={IntroductionStyles.contactButton}>
          <h2 className={IntroductionStyles.contactButtonText}>Contactez-moi !</h2>
        </Link>

        <p></p>
      </div>
    </section>
  )
}

export default Presentation
