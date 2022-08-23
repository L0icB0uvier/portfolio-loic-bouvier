import React from "react"
import * as ContactButtonStyles from "../css/contactButton.module.css"

const ContactButton = ({ url, img, image_alt, name, svg }) => {
  return (
    <a
      href={url}
      aria-label="Visit Facebook"
      className={ContactButtonStyles.container}
      target="_blank"
      rel="noreferrer"
    >
      {svg}
      <p className={ContactButtonStyles.contactText}>{name}</p>
    </a>
  )
}

export default ContactButton
