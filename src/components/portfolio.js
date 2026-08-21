import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from "./sectionTitle"
import * as PortfolioStyles from "../css/portfolio.module.css"
import ProjectButton from "./projectButton"

const CATEGORY_ORDER = ["Indépendant", "Voodoo", "Projet d'études", "Freelance"]

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { order: ASC } }) {
        nodes {
          frontmatter {
            name
            shortDescription
            image_alt
            slug
            category
            image {
              childImageSharp {
                gatsbyImageData(width: 512)
              }
            }
          }
          id
          gatsbyPath(filePath: "/projects/{mdx.frontmatter__slug}")
        }
      }
    }
  `)

  // 1. Groupement des projets par catégorie
  const projectsByCategory = data.allMdx.nodes.reduce((acc, node) => {
    // Si la catégorie n'est pas renseignée dans le MDX, on lui donne une valeur par défaut
    const category = node.frontmatter.category || "Autres"
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(node)
    return acc
  }, {})

  // 2. Tri des clés de catégories selon l'ordre défini dans CATEGORY_ORDER
  const sortedCategories = Object.keys(projectsByCategory).sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a)
    const indexB = CATEGORY_ORDER.indexOf(b)

    // Si une catégorie n'est pas trouvée dans CATEGORY_ORDER, on la place à la fin
    if (indexA === -1 && indexB === -1) return a.localeCompare(b)
    if (indexA === -1) return 1
    if (indexB === -1) return -1

    return indexA - indexB
  })
  
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

          {/* Iteration sur les catégories triées */}
          {sortedCategories.map(category => (
            <div key={category} className={PortfolioStyles.categoryWrapper}>
              <h2 className={PortfolioStyles.categoryTitle}>{category}</h2>
              <div className={PortfolioStyles.projectsWrapper}>
                {projectsByCategory[category].map(node => (
                  <ProjectButton
                    key={node.id}
                    path={node.gatsbyPath}
                    image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                    imageAlt={node.frontmatter.image_alt}
                    name={node.frontmatter.name}
                    description={node.frontmatter.shortDescription}
                  />
                ))}
              </div>
            </div>
          ))}
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
