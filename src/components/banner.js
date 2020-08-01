import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Programmer from '../images/programmer.svg'

const Banner = () => {
//     const data = useStaticQuery(graphql`
//     query {
//       bannerImage: file(relativePath: { eq: "banner-image.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

  return (
    //   <div className="banner">
    //       <div className="container">
    //         <Img fluid={data.bannerImage.childImageSharp.fluid} />
    //       </div>
    //   </div>
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="main-text">
                    Self Learning Software Engineering. I am into <b>minimalist</b> design.
                </div>
                <div className="main-image">
                    <Programmer/>
                </div>
            </div>
            <div className="scroll">
                <span>Scroll down</span>
                <span>__________</span>
            </div>
        </div>
    </div>
  )
}

export default Banner