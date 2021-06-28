import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function TenXPage() {
  const data = useStaticQuery(graphql`
    query {
      allTenxJson {
        edges {
          node {
            name
            author
            link
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        keywords={[
          `10x`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Books"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">10x</h2>
          <br />
          <div>
            {data.allTenxJson.edges.map(edge => {
              return (
                <div class="w-full py-5">
                  <h2 className="text-xl text-gray-700 hover:text-gray-800">
                    <a href={edge.node.link} target="_blank" className="inline">
                      {edge.node.name}
                    </a>
                    &nbsp;
                    <i>{edge.node.author}</i>
                  </h2>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TenXPage
