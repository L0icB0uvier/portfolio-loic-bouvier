import React from "react"
import SkillBar from "./skillBar"
import * as CompetenceStyles from "../css/competences.module.css"
import ResumeSectionTitle from "./resumeSectionTitle"
import SkillTitle from "./skillTitle"

const Competences = () => {
  return (
    <div className={CompetenceStyles.wrapper}>
      <div className={CompetenceStyles.mainContainer}>
        <ResumeSectionTitle title="Compétences" />
        <p>
          Mon expérience en tant que dévelopeur indépendant m'a apporté un grand
          nombre de compétences mais m'a surtout appris à apprendre. Mon périple
          de dévelopeur sur Unity a été semé d'embuche, mais j'ai toujours su
          surmonter les challenges grâce à ma rigueur et ma curiosité naturelle.{" "}
        </p>
        <SkillTitle title="Game Engine" />
        <div className={CompetenceStyles.skillsContainer}>
          <SkillBar skillName="Unity" skillProcifiency={100} />
          <SkillBar skillName="Unreal Engine" skillProcifiency={60} />
        </div>
        <SkillTitle title="Game Development" />
        <div className={CompetenceStyles.skillsContainer}>
          <SkillBar skillName="Game Design" skillProcifiency={100} />
          <SkillBar skillName="Level Design" skillProcifiency={80} />
          <SkillBar skillName="Prototyping" skillProcifiency={80} />
          <SkillBar skillName="UI Design" skillProcifiency={60} />
          <SkillBar skillName="QA" skillProcifiency={80} />
        </div>
        <SkillTitle title="Informatique" />
        <div className={CompetenceStyles.skillsContainer}>
          <SkillBar skillName="C#" skillProcifiency={80} />
          <SkillBar skillName="C++" skillProcifiency={60} />
          <SkillBar skillName="Javascript" skillProcifiency={60} />
          <SkillBar skillName="HLSL" skillProcifiency={60} />
          <SkillBar skillName="Git" skillProcifiency={80} />
          <SkillBar skillName="Python" skillProcifiency={40} />
          <SkillBar skillName="React" skillProcifiency={60} />
          <SkillBar skillName="CSS/HTML" skillProcifiency={80} />
        </div>
        <SkillTitle title="3D" />
        <div className={CompetenceStyles.skillsContainer}>
          <SkillBar skillName="Blender" skillProcifiency={80} />
          <SkillBar skillName="Substance Designer" skillProcifiency={60} />
          <SkillBar skillName="Substance Painter" skillProcifiency={60} />
          <SkillBar skillName="ZBrush" skillProcifiency={40} />
          <SkillBar skillName="Photoshop" skillProcifiency={60} />
          <SkillBar skillName="Inkscape" skillProcifiency={40} />
        </div>
        <SkillTitle title="Gestion de projet" />
        <div className={CompetenceStyles.skillsContainer}>
          <SkillBar skillName="Trello, Jira" skillProcifiency={80} />
          <SkillBar skillName="Méthode AGILE" skillProcifiency={80} />
          <SkillBar skillName="Mindmapping tools" skillProcifiency={100} />
          <SkillBar skillName="Diagram de Gant" skillProcifiency={100} />
        </div>
      </div>
    </div>
  )
}

export default Competences
