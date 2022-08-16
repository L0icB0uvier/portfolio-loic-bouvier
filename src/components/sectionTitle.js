import React from "react"
import * as SectionTitleStyles from "./sectionTitle.module.css"

const SectionTitle = ({ title }) => {
  return (
    <div className={SectionTitleStyles.wrapper}>
      <div className={SectionTitleStyles.mainContainer}>
        <h1 className={SectionTitleStyles.title}>{title}</h1>
      </div>
    </div>
  )
}

export default SectionTitle
