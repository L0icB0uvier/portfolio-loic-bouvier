import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as ProjectsStyles from "./projects.module.css"
import SectionTitle from "./sectionTitle"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___order }) {
        nodes {
          frontmatter {
            name
            description
            image_alt
            image {
              childImageSharp {
                gatsbyImageData(width: 512)
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
    <section id="portfolio" className={ProjectsStyles.sectionWrapper}>
      <div className={ProjectsStyles.containerWrapper}>
        <div className={ProjectsStyles.mainContainer}>
          <SectionTitle title="02 - Portfolio" />
          <p className={ProjectsStyles.text}>
            Voici les projets sur lesquels j'ai travaillé ces dernières années
            et qui m'ont permis d'apprendre le dévelopement de jeux sur Unity.
          </p>
          <div className={ProjectsStyles.projectsWrapper}>
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
                    <h2 className={ProjectsStyles.projectTitle}>
                      {node.frontmatter.name}
                    </h2>
                    <p className={ProjectsStyles.projectDescription}>
                      {node.frontmatter.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
