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
            name
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
          `articles`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Articles"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Good Articles</h2>
          <br />
          <div>
            {data.allArticlesJson.edges.map(edge => {
              return (
                <div class="w-full py-2">
                  <h2 className="text-xl block">
                    <a
                      href={edge.node.link}
                      target="_blank"
                      className="text-gray-700 hover:text-gray-800"
                    >
                      {edge.node.name}
                    </a>
                  </h2>
                  <small>
                    From <i>{edge.node.link}</i>
                  </small>
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
