import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

import "../styles/blog-page.scss"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <div className="container">
        <div className="heading">
          <h1>LATEST ARTICLES</h1>
          <Link to="/"><p>CLOSE</p></Link>
        </div>
        <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              
                <div className="blog-post-preview" key={post.id}>
                  <h1 className="title">
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h1>
                  <h2 className="date">{post.frontmatter.date}</h2>
                  <p className="content-matter">{post.excerpt}</p>
                  <br></br>
                </div>
              
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`