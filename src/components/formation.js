import React from "react"
import * as FormationStyles from "../css/formation.module.css"
import ResumeSectionTitle from "./resumeSectionTitle"

const Formation = () => {
  return (
    <div className={FormationStyles.wrapper}>
      <div className={FormationStyles.mainContainer}>
        <ResumeSectionTitle title="Formation" />
        <p>
          Suite à l'obtention de mon diplôme en{" "}
          <strong>International Business Development</strong> de l'école de
          commerce{" "}
          <a
            href="https://www.icd-ecoles.com/ecole-commerce-paris"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            {" "}
            ICD Paris
          </a>
          , j'ai entamé l’apprentissage du développement de jeux vidéo en
          autodidacte.
          En utilisant des ressources en ligne tel que Udemy, Youtube, des livres spécialisés/forums, et surtout grâce à la pratique liée au développement de mon jeu, 
          j'ai pu acquérir les compétences nécessaires pour créer des jeux vidéo de qualité professionnelle.
        </p>
        <p>
          Cherchant à me diversifier et à approfondir mes connaissances en informatique, j'ai décidé de reprendre mes études en 2025 en intégrant la 
          L3 Informatique générale à l'université Grenoble Alpes. Cette formation a été pour moi l'occasion de compléter mes connaissances avancées en programmation avec les principes fondamentaux 
          des systèmes d'exploitation, des bases de données, des réseaux, de l'algorithmie et de la théorie des langages.
        </p>
        <p>
          Suite à l'obtention de ma Licence 3 en 2026, je continue actuellement ma formation en Master 1 parcours informatique générale à l'université Grenoble Alpes pendant 
          laquelle je compte me spécialiser dans le développement logiciel et le Cloud Computing.
        </p>
      </div>
    </div>
  )
}

export default Formation
