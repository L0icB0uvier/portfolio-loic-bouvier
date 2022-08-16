import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as ProjectsStyles from "./projects.module.css"
import SectionTitle from "./sectionTitle"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
        nodes {
          frontmatter {
            name
            description
            image_alt
            image {
              childImageSharp {
                gatsbyImageData(width: 256)
              }
            }
          }
          id
          slug
        }
      }
    }
  `)

  return (
    <div className={ProjectsStyles.wrapper}>
      <SectionTitle title="Portfolio" />
      <div className={ProjectsStyles.mainContainer}>
        <p>
          Voici les projets sur lesquels j'ai travaillé ces dernières années et
          qui m'ont permis d'apprendre le dévelopement de jeux sur Unity.
        </p>
        <div className={ProjectsStyles.projectsContainer}>
          {data.allMdx.nodes.map(node => (
            <article
              className={ProjectsStyles.project}
              key={node.frontmatter.name}
            >
              <Link
                className={ProjectsStyles.link}
                to={`/projects/${node.slug}`}
              >
                <div>
                  <GatsbyImage
                    image={
                      node.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    alt={node.frontmatter.image_alt}
                  />
                  <h2>{node.frontmatter.name}</h2>
                  <p>{node.frontmatter.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
