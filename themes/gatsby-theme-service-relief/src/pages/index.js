import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data: { site, allAirtable: { nodes: entities }}}) => {
  const categories = [
    ...new Set(
      entities.map(entity => entity.data.Category[0] || `Uncategorized`)
    )
  ];

  const slugsByCategory = entities.reduce((categories, entity) => {
    let category = entity.data.Category[0];
    if (!categories[category]) {
      categories[category] = entity.fields.slug;
    }
    return categories;
  }, {});

  const entitiesByCategory = entities.reduce((acc, entity) => {
    let category = entity.data.Category[0];
    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(entity);
    return acc;
  }, {});

  return (
    <Layout>
      <SEO title="Home" />
      <div className="mb-20">
        <p className="text-lg mb-8">
          A directory of fundraisers for {site.siteMetadata.city} bars, venues,
          restaurants, and service businesses that can use our help to support
          their staff during the state-mandated shutdown. A work-in-progress.
        </p>
        <p className="text-lg mb-8">
          Jump to:{" "}
          {categories.map(category => (
            <React.Fragment key={slugsByCategory[category]}>
              <a href={`#${slugsByCategory[category]}`} className="underline">
                {category}
              </a>
              {" | "}
            </React.Fragment>
          ))}
        </p>
        <Link
          to="/submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Suggest an addition &rarr;
        </Link>
      </div>

      {/* @TODO Make this a shadowable component */}
      <div className="mb-10 border shadow p-6">
        <h2 className="text-xl font-bold">
          Featured: COVID-19 Solidarity Response Fund for WHO
        </h2>

        <p className="mt-4">
          Donations support WHO’s work to track and understand the spread of the
          virus; to ensure patients get the care they need and frontline workers
          get essential supplies and information; and to accelerate efforts to
          develop vaccines, tests, and treatments.
        </p>

        <p className="mt-4">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
            target="_blank"
          >
            Donate Here
          </a>
        </p>
      </div>

      <div className="mb-10">
        {categories.map(category => (
          <React.Fragment key={slugsByCategory[category]}>
            <h2 id={slugsByCategory[category]} className="text-xl font-bold">
              {category}
            </h2>
            <ul className="list-disc pl-6 mt-4">
              {entitiesByCategory[category].map(entity => (
                <li key={entity.data.BusinessName}>
                  <a
                    className="underline"
                    href={entity.data.BusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entity.data.BusinessName}
                  </a>{" "}
                  {entity.data.FundraiserDescription && (
                    <p className="mt-2 italic">
                      {entity.data.FundraiserDescription}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        city
        state
      }
    }
    allAirtable {
      nodes {
        data {
          Approved
          BusinessName
          BusinessUrl
          Category
          FundraiserDescription
          FundraiserTitle
          FundraiserUrl
        }
        fields {
          slug
        }
      }
    }
  }
`

export default IndexPage;
