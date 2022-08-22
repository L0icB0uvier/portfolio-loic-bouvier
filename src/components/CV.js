import React from "react"

import Competences from "./competences"
import Experience from "./experience"
import Formation from "./formation"
import * as CVStyles from "./cv.module.css"
import ColoredLine from "./ColoredLine"

const CV = () => {
  return (
    <section id="CV" className={CVStyles.sectionWrapper}>
      <div>
        <Competences />
        <Experience />
        <Formation />
      </div>
    </section>
  )
}

export default CV
