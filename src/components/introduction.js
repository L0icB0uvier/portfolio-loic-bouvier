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
        <p className={IntroductionStyles.description}>J'ai commencé le développement de jeux comme un hobbit, et c'est aujourd'hui devenu une véritable passion.</p>
        <p className={IntroductionStyles.description}>Je cherche constamment à me perfectionner en tant que programmeur et à continuer d'explorer les possibilités du médium jeux vidéo. 
        C'est pourquoi je cherche à m'impliquer sur des projets de jeux intéressants autant sur le plan créatif que technique.</p>
        <Link to="/#contact" className={IntroductionStyles.contactButton}>
          <h2 className={IntroductionStyles.contactButtonText}>Contactez-moi !</h2>
        </Link>

        <p></p>
      </div>
    </section>
  )
}

export default Presentation
