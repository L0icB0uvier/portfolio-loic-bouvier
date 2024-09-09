import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from "./sectionTitle"
import * as PortfolioStyles from "../css/portfolio.module.css"
import ProjectButton from "./projectButton"

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
        <SectionTitle title="Portfolio" />

        <div className={PortfolioStyles.mainContainer}>
          <div className={PortfolioStyles.projectsWrapper}>
            {data.allMdx.nodes.map(node => (
              <ProjectButton
                path={`/projects/${node.slug}`}
                image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                imageAlt={node.frontmatter.image_alt}
                name={node.frontmatter.name}
                description={node.frontmatter.shortDescription}
              />
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
