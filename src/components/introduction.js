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
        <p className={IntroductionStyles.description}>J'ai commencé le développement de jeux comme un hobby, et c'est aujourd'hui devenu une véritable passion.</p>
        <p className={IntroductionStyles.description}>Je cherche constamment à me perfectionner en tant que programmeur et à explorer de nouvelles technologies. 
        C'est pourquoi je cherche à m'impliquer sur des projets intéressants autant sur le plan créatif que technique.</p>
        <Link to="/#contact" className={IntroductionStyles.contactButton}>
          <h2 className={IntroductionStyles.contactButtonText}>Contactez-moi !</h2>
        </Link>

        <p></p>
      </div>
    </section>
  )
}

export default Presentation
