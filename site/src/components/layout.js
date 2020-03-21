/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../css/global.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
          authorName
          authorLink
        }
      }
    }
  `)

  return (
    <>
      <div className="container mx-auto max-w-3xl">
        <main>{children}</main>
        <footer className="text-sm pt-10">
          Built with
          {` `}
          <a
            className="text-blue-600"
            href="https://www.gatsbyjs.org"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{" "}
          by members of {" "}
          <a
            className="text-blue-600"
            href={data.site.siteMetadata.authorLink}
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.authorName}
          </a>{" "}
          and inspired by{" "}
          <a
            className="text-blue-600"
            href="https://twitter.com/spencertweedy"
            rel="noopener noreferrer"
          >
            Spencer Tweedy
          </a>
          .
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
