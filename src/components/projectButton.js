import React from "react"
import * as ProjectButtonStyle from "../css/projectButtonStyle.module.css"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import NavigateNext from "@material-ui/icons/NavigateNext"

const ProjectButton = ({ path, image, imageAlt, name, description }) => {
  return (
    <article className={ProjectButtonStyle.project} key={name}>
      <Link className={ProjectButtonStyle.link} to={path}>
        <div>
          <GatsbyImage image={image} alt={imageAlt} />
          <div className={ProjectButtonStyle.projectText}>
            <h2 className={ProjectButtonStyle.projectTitle}>{name}</h2>
            <p className={ProjectButtonStyle.projectDescription}>
              {description}
            </p>
            <NavigateNext className={ProjectButtonStyle.arrow} />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProjectButton
