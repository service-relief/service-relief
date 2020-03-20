import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Index = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.readme.html }} />
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
