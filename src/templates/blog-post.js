import React from "react"
import {Link} from "gatsby"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import '../styles/blog.scss';

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className="container">
        <div className="blog-post-container">
          <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <div className="heading">
              <h2>{post.frontmatter.title}</h2>
              <Link to="/blog"><p>CLOSE</p></Link>
              </div>
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`