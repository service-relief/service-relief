import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import AirtableForm from '../components/airtable-form'

import Layout from "../components/layout";
import SEO from "../components/seo";

const SubmitPage = () => {
  const { site } = useStaticQuery(graphql`
    query SubmitQuery {
      site {
        siteMetadata {
          formId
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Submit a Fundraiser" />

      <p className="mb-10">
        <Link
          to="/"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          &larr; View All Fundraisers
        </Link>
      </p>
      <h1 className="text-xl font-bold mb-4">Hi there!</h1>
      <p>
        To submit a fundraiser to be published on the site, please fill out the
        form below. We will review them as they come in and let you know when
        your link has been added to the site.
      </p>
      <AirtableForm id={site.siteMetadata.formId} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SubmitPage;
