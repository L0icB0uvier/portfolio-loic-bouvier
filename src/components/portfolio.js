import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionTitle from "./sectionTitle"
import * as PortfolioStyles from "../css/portfolio.module.css"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___order }) {
        nodes {
          frontmatter {
            name
            shortDescription
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
    <section id="portfolio" className={PortfolioStyles.sectionWrapper}>
      <svg
        className={PortfolioStyles.handleTop}
        width={200}
        height={32}
        viewBox="0 0 200 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 32 L 200 32 L 180 0 L 20 0z"></path>
      </svg>
      <div className={PortfolioStyles.containerWrapper}>
        <SectionTitle title="02 - Portfolio" />

        <div className={PortfolioStyles.mainContainer}>
          <div className={PortfolioStyles.projectsWrapper}>
            {data.allMdx.nodes.map(node => (
              <article
                className={PortfolioStyles.project}
                key={node.frontmatter.name}
              >
                <Link
                  className={PortfolioStyles.link}
                  to={`/projects/${node.slug}`}
                >
                  <div>
                    <GatsbyImage
                      image={
                        node.frontmatter.image.childImageSharp.gatsbyImageData
                      }
                      alt={node.frontmatter.image_alt}
                    />
                    <div className={PortfolioStyles.projectInfo}>
                      <h2 className={PortfolioStyles.projectTitle}>
                        {node.frontmatter.name}
                      </h2>
                      <p className={PortfolioStyles.projectDescription}>
                        {node.frontmatter.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <svg
          className={PortfolioStyles.handleBottom}
          width={200}
          height={32}
          viewBox="0 0 200 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L 200 0 L 180 32 L 20 32z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Portfolio
