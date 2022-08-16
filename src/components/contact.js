import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import ContactInfo from "./contactInfo"
import ContactButton from "./contactButton"

import * as ContactStyles from "./contact.module.css"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(filter: { frontmatter: { type: { eq: "contact" } } }) {
        nodes {
          frontmatter {
            url
            name
            image_alt
            image {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1)
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className={ContactStyles.wrapper}>
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
            {data.allMdx.nodes.map(node => (
              <ContactButton
                url={node.frontmatter.url}
                img={getImage(
                  node.frontmatter.image.childImageSharp.gatsbyImageData
                )}
                name={node.frontmatter.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
