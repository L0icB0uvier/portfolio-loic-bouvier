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
        </p>
        <p>
          J'ai tout d'abord suivi des cours en ligne sur <strong>Udemy</strong>{" "}
          pour apprendre les bases de la 3D et du C++. Pour l'apprentissage du
          Game Design, des chaines YouTube telles que{" "}
          <a
            href="https://www.youtube.com/extracredits"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            Extra-Credits
          </a>{" "}
          ,{" "}
          <a
            href="https://www.youtube.com/c/MarkBrownGMT"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            Game Maker’s Tool Kit
          </a>{" "}
          ou encore{" "}
          <a
            href="https://www.youtube.com/c/GameNextDoor01"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            Game Next Door
          </a>
          , m'ont apporté des bases que j'ai ensuite complété en lisant les ouvrages{" "}
          <a
            href="https://www.theoryoffun.com/"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            "A Theory Of Fun"{" "}
          </a>
          ,{" "}
          <a
            href="https://www.theoryoffun.com/"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            "The Art of Game Design"
          </a>
          ,{" "}
          <a
            href="https://www.routledge.com/Architectural-Approach-to-Level-Design-Second-edition/Totten/p/book/9780815361367"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            "An Architectural Approach to Level Design"{" "}
          </a>
          and{" "}
          <a
            href="https://www.goodreads.com/book/show/16269919-a-game-design-vocabulary"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            "A Game Design Vocabulary"
          </a>
          .
        </p>
        <p>
          J'ai appris la programmation principalement par la pratique. Cherchant
          constamment à m'améliorer, j'ai suivi des Youtubers spécialisés dans
          la programmation tels que{" "}
          <a
            href="https://www.youtube.com/c/TheChernoProject"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            The Cherno
          </a>{" "}
          pour C++,{" "}
          <a
            href="https://www.youtube.com/user/IAmTimCorey"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            Tim Correy
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/c/Unity3dCollege"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            Jason Weimann
          </a>{" "}
          et{" "}
          <a
            href="https://www.youtube.com/c/InfallibleCode"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
          >
            Infallible Code
          </a>{" "}
          pour le C#. Je suis constamment l'évolution des tech et des pratiques de l'industrie à travers les conférences Unity et GDC. Finalement, j'ai
          perfectionné ma compréhension du langage C# à l’aide de l’ouvrage{" "}
          <a
            href="https://www.albahari.com/nutshell/"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
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
            className={FormationStyles.link}
          >
            "Game Engine Architecture"
          </a>{" "}
          de Jason Gregory. Et j’ai comblé mes lacunes en mathématiques en
          lisant la seconde édition de {" "}
          <a
            href="https://www.essentialmath.com/book.htm"
            target="_blank"
            rel="noreferrer"
            className={FormationStyles.link}
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
