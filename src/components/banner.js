import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      grimesfour: file(relativePath: { eq: "grimes4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grimestwo: file(relativePath: { eq: "grimes2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grimesfive: file(relativePath: { eq: "grimes5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='side-image left'>
            <Img fluid={data.grimestwo.childImageSharp.fluid} />
          </div>
          <div className='main-text'>Oladimeji Odunsi</div>
          <div className='main-image'>
            <Img fluid={data.grimesfive.childImageSharp.fluid} />
          </div>
          <div className='side-image right'>
            <Img fluid={data.grimesfour.childImageSharp.fluid} />
          </div>
        </div>
        <div className='scroll'>
          <span>Scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
