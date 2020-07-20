import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
  `);

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
          <p>
            These articles tend to concern CS, startups, life, and other things
            that remotely interest me.
          </p>
          <br />
          <div>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div class="w-full border border-gray-400 py-5">
                  <h2>
                    <Link
                      class="text-lg"
                      to={`/articles/` + edge.node.fields.slug}
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                    &nbsp;
                    <i>
                      {edge.node.timeToRead}{" "}
                      {edge.node.timeToRead == 1 ? `minute` : `minutes`}
                    </i>
                  </h2>

                  <p>
                    {moment(edge.node.frontmatter.date).isValid()
                      ? moment(edge.node.frontmatter.date).format(
                          `MMMM Do YYYY, h:mm:ss a`
                        )
                      : edge.node.frontmatter.date}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
