import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      orange: file(relativePath: { eq: "orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glasses: file(relativePath: { eq: "glasses.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      red: file(relativePath: { eq: "red.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img
              fadeIn={true}
              durationFadeIn={1000}
              fluid={data.orange.childImageSharp.fluid}
            />
          </div>
          <div className="main-text">Oladimeji Odunsi</div>
          <div className="main-image">
            <Img
              fadeIn={true}
              durationFadeIn={1000}
              fluid={data.glasses.childImageSharp.fluid}
            />
          </div>
          <div className="side-image right">
            <Img
              fadeIn={true}
              durationFadeIn={1000}
              fluid={data.red.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Visual Artist and Photographer</div>
    </div>
  )
}

export default Banner
