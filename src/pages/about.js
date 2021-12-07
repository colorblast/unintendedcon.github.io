import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        title="About"
      />

      <section className="">
        <h1 className="text-4xl">👋 Hey there!</h1>
        <br />
        <p className="text-xl">
          I'm Jonathan! I work as a blockchain engineering intern at Nethermind.
          I'm primarily interested in contradictions, systems and their
          associated mechanisms, and other cool stuff for a more optimistic
          cooler future. You can ask me about symbolics, defi, governance,
          rationality, and typography. Stuff I like include{" "}
          <a href="https://www.jonstokes.com/" className="inline text-gray-600">
            Jon Stokes' Blog
          </a>
          ,{" "}
          <a
            href="https://vicki.substack.com/"
            className="inline text-gray-600"
          >
            Vicki Boykis's Blog
          </a>
          ,{" "}
          <a
            href="https://samoburja.com/essays/"
            className="inline text-gray-600"
          >
            Samo Burja's Essays
          </a>
          , and the Progress Studies crowd.
        </p>
      </section>
      <section>
        <div className="leading-loose text-gray-800 text-xl"></div>
      </section>
    </Layout>
  )
}

export default AboutPage
