import React from "react"
import SectionTitle from "./sectionTitle"
import Competences from "./competences"
import Experience from "./experience"
import Formation from "./formation"
import * as CVStyles from "../css/cv.module.css"

const CV = () => {
  return (
    <section id="resume" className={CVStyles.sectionWrapper}>
      <div className={CVStyles.containerWrapper}>
        <SectionTitle title="CV" />
        <div className={CVStyles.mainContainer}>
          <Competences />
          <Experience />
          <Formation />
        </div>
      </div>
    </section>
  )
}

export default CV
