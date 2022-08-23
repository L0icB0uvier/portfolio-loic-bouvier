import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Video from "../../components/video"
import * as ProjectPageStyles from "../../css/project.module.css"
import "../../css/slick.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <button
      className={className}
      style={{ ...style, display: "block", right: "20px" }}
      onClick={onClick}
      aria-label="NextArrow"
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <button
      className={className}
      style={{ ...style, display: "block", left: "20px", zIndex: "20" }}
      onClick={onClick}
      aria-label="PrevArrow"
    />
  )
}

const ProjectPage = ({ data }) => {
  const settings = {
    autoPlay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Layout pageTitle="Project Page">
      <div className={ProjectPageStyles.mainContainer}>
        <h1 className={ProjectPageStyles.projectTitle}>
          {data.mdx.frontmatter.name}
        </h1>
        <h2>Présentation du projet</h2>
        <p>{data.mdx.frontmatter.longDescription}</p>
        <Video
          videoSrcURL={data.mdx.frontmatter.video}
          videoTitle={data.mdx.frontmatter.video_title}
        />

        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Slider {...settings} className={ProjectPageStyles.slider}>
          {data.mdx.frontmatter.galery_images.map(node => (
            <GatsbyImage
              image={node.image.childImageSharp.gatsbyImageData}
              alt={node.image_alt}
              key={node.image_alt}
            />
          ))}
        </Slider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        shortDescription
        longDescription
        video
        video_title
        galery_images {
          image_alt
          image {
            childImageSharp {
              gatsbyImageData(width: 1300)
            }
          }
        }
      }
      body
    }
  }
`

export default ProjectPage
