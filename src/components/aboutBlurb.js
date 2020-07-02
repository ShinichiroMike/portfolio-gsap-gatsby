import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flower: file(relativePath: { eq: "flower.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              Bacon ipsum dolor amet ribeye turkey venison shank t-bone sausage
              corned beef. Andouille leberkas beef, salami ground round meatloaf
              biltong frankfurter picanha chicken sirloin sausage burgdoggen
              turkey pork. Salami burgdoggen ball tip shank beef. Picanha
              alcatra tri-tip pork chop doner pastrami. Meatloaf fatback tri-tip
              chicken ham. Chicken chuck burgdoggen swine, corned beef picanha
              short ribs ribeye. Ham hock burgdoggen corned beef, chislic beef
              ribs chuck andouille spare ribs swine alcatra prosciutto
              frankfurter capicola leberkas tail.
            </p>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div class="images">
            <div className="top-right">
              <Img
                fadeIn={true}
                durationFadeIn={2000}
                fluid={data.fist.childImageSharp.fluid}
              />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
