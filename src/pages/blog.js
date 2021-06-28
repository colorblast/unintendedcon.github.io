import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        keywords={[
          `blog`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Blog"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Blog</h2>
          <br />
          <div>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div class="w-full py-2">
                  <Link
                    class="hover:text-gray-700"
                    to={`/articles/` + edge.node.fields.slug}
                  >
                    <h2>
                      <span class="text-lg">{edge.node.frontmatter.title}</span>
                      &nbsp;
                      {moment(edge.node.frontmatter.date).isValid()
                        ? moment(edge.node.frontmatter.date).format(`MMMM YYYY`)
                        : edge.node.frontmatter.date}
                      &nbsp;
                      <i>
                        {edge.node.timeToRead}{" "}
                        {edge.node.timeToRead == 1 ? `minute` : `minutes`}
                      </i>
                    </h2>
                  </Link>
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
