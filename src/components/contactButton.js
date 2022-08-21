import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as ContactButtonStyles from "./contactButton.module.css"

const ContactButton = ({ url, img, image_alt, name }) => {

  
  return (
    <a
      href={url}
      aria-label="Visit Facebook"
      className={ContactButtonStyles.container}
      target="_blank"
      rel="noreferrer"
    >
      <GatsbyImage image={img} alt={image_alt} />
      <p className={ContactButtonStyles.contactText}>{name}</p>
    </a>
  )
}

export default ContactButton
