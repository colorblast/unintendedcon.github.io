import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ParadoxesPage() {
  const data = useStaticQuery(graphql`
    query {
      allParadoxesJson {
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
          `paradoxes`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Paradoxes"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Paradoxes</h2>
          <br />
          <div>
            {data.allParadoxesJson.edges.map(edge => {
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

export default ParadoxesPage
