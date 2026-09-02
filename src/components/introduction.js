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
          Recherche Stage
        </h2>

        <p className={IntroductionStyles.description}>
          Suite à l'obtention de ma Licence 3 en 2026, je continue actuellement ma formation en Master parcours informatique générale à l'université Grenoble Alpes.
        </p>

        <p className={IntroductionStyles.description}>
          Je recherche actuellement un stage dans les métiers de Cloud, DevOps ou encore du développement logiciel avec dans l'optique de continuer sur une alternance pour l'année de Master 2.
        </p>

        <p className={IntroductionStyles.description}>
          Mes expériences professionnelles passées couplées à la formation rigoureuse que je suis actuellement à l'UGA me permettront de m'adapter rapidement à un environnement de travail professionnel et de contribuer efficacement aux projets de l'entreprise.
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
