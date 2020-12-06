import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `unintendedcon`,
          `reallyidk`,
          `jonathan wong`,
          `suchcaptcha`
        ]}
        title="Home"
      />

      <section className="">
        <h1 className="text-2xl font-extrabold inline-block my-8">
          Hi, it's Jonathan. I run this blog.
        </h1>
      </section>
      <section>
        <div className="leading-loose text-gray-800 text-xl">
        I’m interested in the intersection between tech, philosophy, psychology, and economics. This blog delves into statecraft, systems, policy decisions, and our  changing society.<br /><br />

The world’s changing at an incredibly breakneck pace. The results are wildly incomprehensible, and we are more often than not, left flailing about. The name, unintendedcon, comes from this, as we look towards policy-makers and experts for the answers they don’t have.
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
