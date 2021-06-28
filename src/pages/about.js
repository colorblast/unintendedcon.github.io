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
        title="Home"
      />

      <section className="">
        <h1 className="text-lg inline-block my-8 leading-loose">
          Hi, it's Jonathan. I'm trying to get better at documenting stuff (if
          no one hears a tree fall, did it really fall?). I've created a bunch
          of projects, most of them web-appy. Previously, I've built a web
          pastebin with php (that was like ~5yrs ago), a steganography service
          (lost to the c9 acquisition), hosted owncloud for a year or so on RHEL
          (before they rebranded openshift), built a hackathon schedule parser
          using flask + selenium, built a web LaTeX hoster using python, built a
          markdown processor using codemirror + pandoc, automated spanish hw,
          built a terribly insecure discord server maintenance bot, built a
          webapp that attempts to track airline sentiment on a week by week
          basis (its not very good), built a really inappropriate chatbot,
          created a wifi hotspot finder app, released an applescript dmg that
          helped with some common utilities, attempted to bypass Apple licensing
          restrictions (like an idiot, I thought I could just upload it and and
          redownload it), and technically got a triple-boot (it wasn't
          sustainable and pretty much broke after a day or so).
        </h1>
        <p style={{ textIndent: 0 }} className="leading-loose">
          Whew, did you read all that? Don't worry, most of that stuff was
          really shitty code. It was fun, though, and it sorta worked. I'm now
          more interested in how the tools we use create incentives towards
          certain behaviors. I'm a big fan of things like programmable money and
          how we can create incentives where there previously were none. I'm
          also really interested in patterns, how things work (logistics,
          aerospace, coordination problems, orgs, mechanism design, biology) and
          how tech can apply to them. I'm also a strong believer in people being
          humans and that we should bias towards kindness, connection, and
          understanding. We've got one life and everyone's fighting their own
          battles. It's much easier to be negative because that's the default,
          most things fail. And yet, (here comes the I love science part) the
          probability that you and I exist in this world are so shockingly low
          given all that had to occur. A huge explosion had to happen, the Earth
          had to form, so many events had to happen to conspire towards where we
          are today. But here we are.
        </p>
      </section>
      <section>
        <div className="leading-loose text-gray-800 text-xl"></div>
      </section>
    </Layout>
  )
}

export default AboutPage
