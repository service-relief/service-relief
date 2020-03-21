import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from '../components/layout'

const Index = ({ data }) => (
  <Layout>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .gatsby-readme {
          padding-bottom: 40px
        }
        img,
        .gatsby-resp-image-wrapper {
          margin: 40px 0;
        }
        .gatsby-resp-image-wrapper {
          margin: 40px 0!important;
          width: 100%!important;
          max-width: 100%!important;
        }
        .gatsby-readme a {
          color: #0768D7;
        }
      `,
      }}
    ></style>
    <div className="my-10">
      <Link
        to="/"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        &larr; View All Service Relief Sites
      </Link>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: data.readme.html }}
      className="gatsby-readme"
    />
  </Layout>
)

export const pageQuery = graphql`
  {
    readme: markdownRemark(fileAbsolutePath:{
      regex: "/starter\/README.md/"
    }) {
      html
    }
  }
`

export default Index
