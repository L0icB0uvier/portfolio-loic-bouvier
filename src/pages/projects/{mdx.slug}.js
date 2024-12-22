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
import ProjectLink from "../../components/projectLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import ArrowBackIosSharp from "@material-ui/icons/ArrowBackIosSharp"
import Seo from "../../components/seo"

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

function DisplayVideo ({videoURL, videoTitle}){
  if(videoURL != ""){
    return <Video
        videoSrcURL={videoURL}
        videoTitle={videoTitle}
    />
  }

  else return null;
}

function DisplayLinks({links}){
  if(links !== null){
    return <div className={ProjectPageStyles.linkContainer}>
              <div className={ProjectPageStyles.link}>
                {links.map(node => (
                  <div className={ProjectPageStyles.link} key={node.linkActionName}>
                    <svg
                      width="2"
                      height="20"
                      viewBox="0 0 2 20"
                      className={ProjectPageStyles.svgLine}
                    >
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="20"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                    <ProjectLink
                      url={node.url}
                      image={node.logo.childImageSharp.gatsbyImageData}
                      image_alt={node.logo.name}
                      linkActionName={node.linkActionName}
                    />
                  </div>
                ))}
                <svg
                  width="2"
                  height="100"
                  viewBox="0 0 2 100"
                  className={ProjectPageStyles.svgLine}
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100"
                    stroke="black"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>
  }

  else return null;
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
      <Seo title={data.mdx.frontmatter.name}/>
      <div className={ProjectPageStyles.wrapper}>
        <div className={ProjectPageStyles.portfolioLinkWrapper}>
          <div className={ProjectPageStyles.portfolioLinkContainer}>
            <ArrowBackIosSharp />
            <AnchorLink
              to="/#portfolio"
              className={ProjectPageStyles.portfolioLink}
              title="Revenir au Portfolio"
            />
          </div>
        </div>
        <DisplayLinks links={data.mdx.frontmatter.links}/>
        {/* <div className={ProjectPageStyles.linkContainer}>
          <div className={ProjectPageStyles.link}>
            {data.mdx.frontmatter.links.map(node => (
              <div className={ProjectPageStyles.link} key={node.linkActionName}>
                <svg
                  width="2"
                  height="20"
                  viewBox="0 0 2 20"
                  className={ProjectPageStyles.svgLine}
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="20"
                    stroke="black"
                    strokeWidth={2}
                  />
                </svg>
                <ProjectLink
                  url={node.url}
                  image={node.logo.childImageSharp.gatsbyImageData}
                  image_alt={node.logo.name}
                  linkActionName={node.linkActionName}
                />
              </div>
            ))}
            <svg
              width="2"
              height="100"
              viewBox="0 0 2 100"
              className={ProjectPageStyles.svgLine}
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="black"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div> */}

        <div className={ProjectPageStyles.mainContainer}>
          <h1 className={ProjectPageStyles.projectTitle}>
            {data.mdx.frontmatter.name}
          </h1>
          <h2>Présentation du projet</h2>
          <p>{data.mdx.frontmatter.longDescription}</p>
          
          <DisplayVideo videoURL={data.mdx.frontmatter.video} videoTitle={data.mdx.frontmatter.video_title} />
          
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
        links {
          logo {
            childImageSharp {
              gatsbyImageData(width: 32)
            }
            name
          }
          linkActionName
          url
        }
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
