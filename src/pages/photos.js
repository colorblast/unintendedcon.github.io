import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Gallery } from "gatsby-theme-gallery";

function PhotosPage() {
  return (
    <Layout>
      <SEO
        keywords={[`photos`, `jonathan wong`, `unintendedcon`, `reallyidk`, `suchcaptcha`]}
        title="Photos"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">
            Photos
          </h2>
          <p>
            I used to be against photography given that overdoing it often leads to the diminishing of the actual experience. I realize that pictorial representations are often better at telling a person's story however.
          </p>
          <br />
          <Gallery />
        </div>
      </section>
    </Layout>
  );
}

export default PhotosPage;
