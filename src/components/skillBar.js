import React from "react"
import * as SkillBarStyles from "./skillBar.module.css"

function SetFillBar(fillPercent) {
  switch (fillPercent) {
    case 100:
      return SkillBarStyles.barFill_master
    case 80:
      return SkillBarStyles.barFill_very_good
    case 60:
      return SkillBarStyles.barFill_good
    case 40:
      return SkillBarStyles.barFill_medium
    case 20:
      return SkillBarStyles.barFill_beginer
    default:
      return SkillBarStyles.barFill_beginer
  }
}

const SkillBar = ({ skillName, skillProcifiency }) => {
  return (
    <div className={SkillBarStyles.barContainer}>
      <div className={`${SkillBarStyles.barFill} ${SetFillBar(skillProcifiency)}`}>
        <p className={SkillBarStyles.title}>{skillName}</p>
      </div>
    </div>
  )
}

export default SkillBar
