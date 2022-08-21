import React from "react"
import ContactInfo from "./contactInfo"
import ContactButton from "./contactButton"
import { graphql, useStaticQuery } from "gatsby"

import * as ContactStyles from "./contact.module.css"

const Contact = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      mailImage: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "mail" }
      ) {
        name
        childImageSharp {
          gatsbyImageData
        }
      }

      githubImage: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "github" }
      ) {
        name
        childImageSharp {
          gatsbyImageData
        }
      }

      linkedinImage: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "linkedin" }
      ) {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <section id="contact" className={ContactStyles.wrapper}>
      <div className={ContactStyles.mainContainer}>
        <h1 className={ContactStyles.title}>Contact</h1>
        <p className={ContactStyles.text}>
          Je recherche actuellement du travail, n'hésitez pas à me contacter si
          mon profil correspond à ce que vous recherchez!
        </p>
        <div className={ContactStyles.infoContainer}>
          {" "}
          <ul>
            <ContactInfo title="Age" value="31 ans" />
            <ContactInfo title="Tél" value="+33 7.49.90.59.45" />
            <ContactInfo title="Lieu" value="Région parisienne, France" />
          </ul>
          <ul>
            <ContactButton
              url="mailto: loic.bouvier@protonmail.com"
              img={query.mailImage.childImageSharp.gatsbyImageData}
              image_alt="Mail logo"
              name="loic.bouvier@protonmail.com"
            />
            <ContactButton
              url="https://github.com/L0icB0uvier?tab=repositories"
              img={query.githubImage.childImageSharp.gatsbyImageData}
              image_alt="Github logo"
              name="github.com/L0icB0uvier"
            />
            <ContactButton
              url="https://www.linkedin.com/in/lo%C3%AFc-bouvier/"
              img={query.linkedinImage.childImageSharp.gatsbyImageData}
              image_alt="Linkedin logo"
              name="linkedin.com/in/loïc-bouvier/"
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
