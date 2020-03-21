import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from '../components/layout'

const Index = ({ data }) => (
  <Layout>
    <header>
      <h1 className="font-heading text-5xl py-16 leading-none">
        <Link to="/">
          <span>The</span>
          <br />
          <span>Service</span>
          <br />
          <span>Relief</span>
          <br />
          <span>Project</span>
        </Link>
      </h1>
    </header>
    <div className="mb-20">
      <p className="text-lg mb-8">
        This is a directory of the Service Relief projects from around the world. Each directory promotes local fundraisers to support bars, restaurants, service businesses and more affected by the COVID-19 health crisis around the world. Each site was created and is supported by a local advocate.
      </p>
      <Link
        to="/submit"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
      >
        Submit your local site &rarr;
      </Link>
      <Link
        to="/start"
        className="bg-transparent text-blue-700 hover:underline font-semibold py-2 px-4"
      >
        Build your own directory
      </Link>
    </div>
  </Layout>
)

export default Index
