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
          >
            {" "}
            ICD Paris
          </a>
          , j'ai entamé l’apprentissage du développement de jeux vidéo en
          autodidacte.
        </p>
        <p>
          J'ai tout d'abord suivi des cours en ligne sur <strong>Udemy</strong>{" "}
          pour apprendre les bases de la 3D et du C++. Pour l'apprentissage du
          Game Design, des chaines YouTube tel que{" "}
          <a
            href="https://www.youtube.com/extracredits"
            target="_blank"
            rel="noreferrer"
          >
            Extra-Credits
          </a>{" "}
          ,{" "}
          <a
            href="https://www.youtube.com/c/MarkBrownGMT"
            target="_blank"
            rel="noreferrer"
          >
            Game Maker’s Tool Kit
          </a>{" "}
          ou encore{" "}
          <a
            href="https://www.youtube.com/c/GameNextDoor01"
            target="_blank"
            rel="noreferrer"
          >
            Game Next Door
          </a>
          , m'ont apporté des bases que j'ai ensuite complété en lisant des
          ouvrages tels que{" "}
          <a
            href="https://www.theoryoffun.com/"
            target="_blank"
            rel="noreferrer"
          >
            <em>"A Theory Of Fun"</em>{" "}
          </a>
          ,{" "}
          <a
            href="https://www.theoryoffun.com/"
            target="_blank"
            rel="noreferrer"
          >
            <em>"The Art of Game Design"</em>
          </a>
          ,{" "}
          <a
            href="https://www.routledge.com/Architectural-Approach-to-Level-Design-Second-edition/Totten/p/book/9780815361367"
            target="_blank"
            rel="noreferrer"
          >
            <em>"An Architectural Approach to Level Design"</em>{" "}
          </a>
          and{" "}
          <a
            href="https://www.goodreads.com/book/show/16269919-a-game-design-vocabulary"
            target="_blank"
            rel="noreferrer"
          >
            <em>"A Game Design Vocabulary"</em>
          </a>
          .
        </p>
        <p>
          J'ai appris la programmation principalement par la pratique. Cherchant
          constamment à m'améliorer, j'ai suivi des Youtubers spécialisés dans
          la programmation tel que{" "}
          <a
            href="https://www.youtube.com/c/TheChernoProject"
            target="_blank"
            rel="noreferrer"
          >
            The Cherno
          </a>{" "}
          pour C++,{" "}
          <a
            href="https://www.youtube.com/user/IAmTimCorey"
            target="_blank"
            rel="noreferrer"
          >
            Tim Correy
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/c/Unity3dCollege"
            target="_blank"
            rel="noreferrer"
          >
            Jason Weimann
          </a>{" "}
          et{" "}
          <a
            href="https://www.youtube.com/c/InfallibleCode"
            target="_blank"
            rel="noreferrer"
          >
            Infallible Code
          </a>{" "}
          pour le C#. J'ai regardé toutes les conférences Unity sur les sujets
          d'architecture de codes et de bonnes pratiques. Finalement, j'ai
          perfectionné ma compréhension du langage C# à l’aide de l’ouvrage
          <a
            href="https://www.albahari.com/nutshell/"
            target="_blank"
            rel="noreferrer"
          >
            "C# in a nutshell"
          </a>
          .
        </p>
        <p>
          Pour finir, afin de compléter ma compréhension du fonctionnement d’un
          moteur de jeu, j’ai lu{" "}
          <a
            href="https://www.gameenginebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            "Game Engine Architecture"
          </a>{" "}
          de Jason Gregory. Et j’ai comblé mes lacunes en mathématiques en
          lisant la seconde édition de {" "}
          <a
            href="https://www.essentialmath.com/book.htm"
            target="_blank"
            rel="noreferrer"
          >
            "Essential Mathematics for Games and Interactive Application"
          </a>{" "}
          de James M.Van Verth.
        </p>
      </div>
    </div>
  )
}

export default Formation
