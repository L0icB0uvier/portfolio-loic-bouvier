import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as ProjectsStyles from "./projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            name
            description
            project_image_alt
            project_image {
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
    <div>
      <h2>Projects</h2>
      <div className={ProjectsStyles.container}>
        {data.allMdx.nodes.map(node => (
          <article
            className={ProjectsStyles.project}
            key={node.frontmatter.name}
          >
            <Link className={ProjectsStyles.link} to={`/projects/${node.slug}`}>
              <div>
                <GatsbyImage
                  image={
                    node.frontmatter.project_image.childImageSharp
                      .gatsbyImageData
                  }
                  alt={node.frontmatter.project_image_alt}
                />
                <h2>{node.frontmatter.name}</h2>
                <p>{node.frontmatter.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
