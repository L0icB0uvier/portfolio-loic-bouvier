import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionTitle from "./sectionTitle"
import * as ProjectsStyles from "../css/projects.module.css"

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
          <svg
            className={ProjectsStyles.handleTop}
            width={200}
            height={32}
            viewBox="0 0 200 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 32 L 200 32 L 180 0 L 20 0z"></path>
          </svg>
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
          <svg
            className={ProjectsStyles.handleBottom}
            width={200}
            height={32}
            viewBox="0 0 200 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0 L 200 0 L 180 32 L 20 32z"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Projects
