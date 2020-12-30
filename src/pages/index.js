import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup"></div>
      <h1>Welcome to my Real Estate Page</h1>
      <p>Introducing a novel approach to Real Estate.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
