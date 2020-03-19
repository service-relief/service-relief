import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteLocaleQuery {
      site {
        siteMetadata {
          city,
          state
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="mb-20">
        <p className="text-lg mb-8">
          A directory of fundraisers for {data.site.siteMetadata.city} bars,
          venues, restaurants, and service businesses that can use our help to
          support their staff during the state-mandated shutdown. A
          work-in-progress.
        </p>
        <p className="text-lg mb-8">
          Jump to:{" "}
          <Link to="#support" className="underline">
            {data.site.siteMetadata.city}
          </Link>
          ,{" "}
          <Link to="#restaurants" className="underline">
            restaurants
          </Link>
          ,{" "}
          <Link to="#bars" className="underline">
            bars &amp; venues
          </Link>
          ,{" "}
          <Link to="#services" className="underline">
            service businesses
          </Link>
        </p>
        <Link
          to="/submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Suggest an addition &rarr;
        </Link>
      </div>

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
        <h2 id="support" className="text-xl font-bold">
          Support Seattle
        </h2>

        <ul className="list-disc pl-6 mt-4">
          <li>
            <a
              className="underline"
              href="https://www.gofundme.com/f/seattle-hospitality-emergency-fund"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seattle Hospitality Emergency Fund
            </a>{" "}
            <p className="mt-2 italic">
              Team fundraiser by Jessica Tousignant and Candace Whitney Morris
              to help provide emergency relief to those workers whose hours have
              been curtailed because of this crisis and who are not being
              otherwise compensated.
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 id="restaurants" className="text-xl font-bold">
          Support restaurants
        </h2>

        <ul className="list-disc pl-6 mt-4">
          <li>
            <a
              className="underline"
              href="https://squareup.com/gift/PE1YXZ53M6WRW/order"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brother Joe
            </a>{" "}
            <span className="italic">(support by purchasing gift cards)</span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 id="bars" className="text-xl font-bold">
          Support bar &amp; event staff
        </h2>

        <ul className="list-disc pl-6 mt-4">
          <li>
            <a
              className="underline"
              href="https://www.gofundme.com/f/latona-staff-covid19-shutdown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Latona Pub
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://checkout.square.site/buy/NFAPA6E5MR2MKWRJ7LATPRAY"
              target="_blank"
              rel="noopener noreferrer"
            >
              WildRose
            </a>{" "}
            <span className="italic">(support by purchasing gift cards)</span>
          </li>
          <li>
            <a
              className="underline"
              href="https://republicofcider.com/online-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Republic of Cider
            </a>{" "}
            <span className="italic">(support by purchasing gift cards)</span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 id="services" className="text-xl font-bold">
          Support service businesses
        </h2>

        <ul className="list-disc pl-6 mt-4">
          <li>
            <a
              className="underline"
              href="https://www.gofundme.com/f/help-cth-pet-sittersdog-walkers-during-covid19"
              target="_blank"
              rel="noopener noreferrer"
            >
              Close to Home Pet Services
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://www.gofundme.com/f/savor-seattle-pike-place-market-COVID19"
              target="_blank"
              rel="noopener noreferrer"
            >
              Food Delivery by Savor Seattle
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
