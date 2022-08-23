import React from "react"
import * as FormationStyles from "../css/formation.module.css"
import ResumeSectionTitle from "./resumeSectionTitle"

const Formation = () => {
  return (
    <div className={FormationStyles.wrapper}>
      <div className={FormationStyles.mainContainer}>
        <ResumeSectionTitle title="Formation" />
        <p>
          Diplomé en 2016 de la Business school ICD Paris en en International
          Business Development, je voulais tenter l'entreprenariat. L'industrie
          du jeu vidéo m'intéressant énormément, j'ai fais le pari (fou)
          d'apprendre le développement en autodidacte.{" "}
        </p>
        <p>
          J'ai tout d'abord suivi des cours en ligne sur Udemy pour apprendre le
          bases de la 3D et du C++. Pour l'apprentissage du Game Design, des
          chaines youtube tel que Extra Credits, Game Maker Tool Kit ou encore
          Game Next Door, m'ont apporté des bases que j'ai ensuite complété en
          lisant des ouvrages tels que "The Theory of Fun", "The Art of Game
          Design", "An Architectural Approach to Level Design" and "A Game
          Design Vocabulary".{" "}
        </p>
        <p>
          J'ai appris le programmation principalement par la pratique mais
          cherchant constamment à m'amélioré j'ai suivi des youtuber spécialisé
          dans la programmation tel que The Cherno pour C++, Tim Correy, Jason
          Weimann et Infallible Code pour le C#. J'ai regardé toutes les
          conférences Unity sur le sujets d'architectures de codes et de bonnes
          pratiques. Finalement j'ai lu le livre "C# in a nutshell"{" "}
        </p>
        <p>
          Finalement pour compléter ma compréhension et mes lacunes en
          mathématiques, j'ai lut la seconde édition de "Essential Mathematics
          for Games and Interactive Application" de Jame M.Van Verth et "Game
          Engine Architecture" de Jason Gregory.
        </p>
      </div>
    </div>
  )
}

export default Formation
