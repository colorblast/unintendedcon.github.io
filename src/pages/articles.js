import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ArticlesPage() {
  const data = useStaticQuery(graphql`
    query {
      allArticlesJson {
        edges {
          node {
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
          `paradoxes`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Books"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Good Articles</h2>
          <br />
          <div>
            {data.allArticlesJson.edges.map(edge => {
              return (
                <div class="w-full py-5">
                  <h2 className="text-xl">
                    {edge.node.link}
                    &nbsp;
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

export default ArticlesPage
