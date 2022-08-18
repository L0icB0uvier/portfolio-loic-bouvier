import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Video from "../../components/video"
import * as ProjectPageStyles from "../../components/project.module.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "20px" }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "20px", zIndex: "20" }}
      onClick={onClick}
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
        <Video
          videoSrcURL={data.mdx.frontmatter.video}
          videoTitle={data.mdx.frontmatter.video_title}
        />
        <h1 className={ProjectPageStyles.projectTitle}>
          {data.mdx.frontmatter.name}
        </h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Slider {...settings}>
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
        description
        video
        video_title
        galery_images {
          image_alt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      body
    }
  }
`

export default ProjectPage
