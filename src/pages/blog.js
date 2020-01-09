import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

function BlogPage() {

    const data = useStaticQuery(graphql`
            query {
                allMarkdownRemark 
                (sort: { fields: [frontmatter___date], order: DESC}){
                    edges {
                        node {
                             frontmatter {
                                 title
                                 date
                             }
                             fields {
                                 slug
                             }
                        }
                    }
                }
            }
        `)

  return (
    <Layout>
      <SEO
        keywords={[`blog`, `jonathan wong`, `unintendedcon`, `reallyidk`, `suchcaptcha`]}
        title="Blog"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-white">
          <h2 className="text-3xl">
            Blog
          </h2>
          <p>
            These articles tend to concern CS, startups, life, and other things that remotely interest me.
          </p>
          <br />
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li>
                        <h2><Link to={"/articles/" + edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></h2>
                        <p>{edge.node.frontmatter.date}</p>
                    </li>
                )
            })}
        </ol>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
