import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectPage = ({data}) => {
  return (
    <Layout pageTitle="Project Page">
      <h1>{data.mdx.frontmatter.name}</h1>
      <h3>{data.mdx.frontmatter.description}</h3>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        description
      }
      body
    }
  }
`

export default ProjectPage
