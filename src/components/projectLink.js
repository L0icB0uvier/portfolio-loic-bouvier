import React from "react"
import * as ProjectLinkStyles from "../css/projectLink.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectLink = ({ url, image, image_alt, linkActionName }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={ProjectLinkStyles.projectLink}
    >
      <GatsbyImage image={image} alt={image_alt} key={image_alt} />
      <p className={ProjectLinkStyles.projectLinkText}>{linkActionName}</p>
    </a>
  )
}

export default ProjectLink
