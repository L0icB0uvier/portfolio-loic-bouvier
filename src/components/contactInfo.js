import React from "react"
import * as ContactInfoStyles from "../css/contactInfo.module.css"

const ContactInfo = ({ title, value }) => {
  return (
    <div className={ContactInfoStyles.container}>
      <p className={ContactInfoStyles.text}>{title + " :"}</p>
      <p className={ContactInfoStyles.text}>{value}</p>
    </div>
  )
}

export default ContactInfo
