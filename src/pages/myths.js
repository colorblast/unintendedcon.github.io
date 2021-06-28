import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function MythsPage() {
  const data = useStaticQuery(graphql`
    query {
      allMythsJson {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        keywords={[
          `myths`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Books"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Myths</h2>
          <br />
          <div>
            {data.allMythsJson.edges.map(edge => {
              return (
                <div class="w-full py-5">
                  <h2 className="text-xl">
                    {edge.node.name}
                    &nbsp;
                  </h2>
                  {edge.node.description} &nbsp;
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MythsPage
