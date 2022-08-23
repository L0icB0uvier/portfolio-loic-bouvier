import React from "react"
import * as SectionTitleStyles from "../css/sectionTitle.module.css"

const SectionTitle = ({ title }) => {
  return (
    <div className={SectionTitleStyles.wrapper}>
      <h1 className={SectionTitleStyles.title}>{title}</h1>
    </div>
  )
}

export default SectionTitle
