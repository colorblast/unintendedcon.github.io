import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function BookPage() {
  const data = useStaticQuery(graphql`
    query {
      allBooksJson {
        edges {
          node {
            name
            author
            description
            value
            imageURL
            notes
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        keywords={[
          `books`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Books"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Books</h2>
          <p>
            I haven't read all of them.
          </p>
          <br />
          <div>
            {data.allBooksJson.edges.map(edge => {
              return (
                <div class="w-full border border-gray-400 py-5">
                    <h2 className="text-xl">
                        {edge.node.name}
                        &nbsp;
                    </h2>
                    <h3 className="text-lg">
                        {edge.node.author}
                    </h3>
                    
                    {edge.node.description} &nbsp;
                    {
                        edge.node.notes != "" && 
                        <Link
                            className="text-gray-700 font-bold underline hover:text-gray-900"
                            to={`/articles/` + edge.node.notes}
                            >
                            Notes
                        </Link>
                    }
                    
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BookPage;
