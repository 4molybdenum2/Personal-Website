import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">molybdenum.</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header