import React from "react"
import { Link } from "gatsby"
import * as IntroductionStyles from "../css/introduction.module.css"

const Presentation = () => {
  return (
    <section id="prensentation" className={IntroductionStyles.wrapper}>
      <div className={IntroductionStyles.mainContainer}>
        
        <h1 className={IntroductionStyles.title}>
          Loïc Bouvier
        </h1>
        
        <h2 className={IntroductionStyles.subtitle}>
          Développeur <strong>UNITY</strong>
        </h2>

        <h3 className={IntroductionStyles.platforms}>
          PC / Console / Mobile / VR / AR
        </h3>

        <p className={IntroductionStyles.description}>
          Véritable couteau suisse avec plus de <strong>8 ans d'expérience sur Unity</strong>, je peux prendre en charge le développement d'une grande variété de projets.
        </p>

        <p className={IntroductionStyles.description}>
          Je propose mes services en Freelance pour le développement de jeux vidéo ou d'applications intéractives et suis également intéressé par des offres d'emploi en région <strong>Rhône-Alpes</strong> ou <strong>full-remote</strong>.
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
