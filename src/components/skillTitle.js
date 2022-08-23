import React from "react"
import * as SkillTitleStyles from "../css/skillTitle.module.css"

const SkillTitle = ({ title }) => {
  return <h3 className={SkillTitleStyles.skillTitle}>{title}</h3>
}

export default SkillTitle
