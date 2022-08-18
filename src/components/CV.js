import React from "react"
import SectionTitle from "./sectionTitle"
import Competences from "./competences"
import Experience from "./experience"
import Formation from "./formation"
import * as CVStyles from "./cv.module.css"

const CV = () => {
  return (
    <section id="CV" className={CVStyles.wrapper} >
      <SectionTitle title="CV" />
      <Competences />
      <Experience />
      <Formation />
    </section>
  )
}

export default CV
