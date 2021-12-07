import React from "react"
import { graphql } from "gatsby"
import Cheerio from "cheerio"
import moment from "moment"
// import hljs from 'highlight.js'
// import javascript from 'highlight.js/lib/languages/javascript'
// import python from 'highlight.js/lib/languages/python'
// import bash from 'highlight.js/lib/languages/bash'
// import rust from 'highlight.js/lib/languages/rust'
// import dart from 'highlight.js/lib/languages/dart'

// hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('python', python)
// hljs.registerLanguage('bash', bash)
// hljs.registerLanguage('rust', rust)
// hljs.registerLanguage('dart', dart)

import "prismjs"
import "prismjs/components/prism-python"
import "prismjs/components/prism-bash"
import "prism-svelte"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blogTemplate.css"
import "../prism/prism.css"
import "../prism/prism-theme.css"
// import 'highlight.js/styles/github.css'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
        keywords
      }
      html
    }
  }
`

const BlogPost = props => {
  const $ = Cheerio.load(props.data.markdownRemark.html)
  $(`h2`).addClass(`text-3xl mt-8`)
  $(`h3`).addClass(`text-2xl mt-8`)
  $(`li`).addClass(`text-lg`)
  $(`ul > li`).addClass(`mt-2`)
  $(`ul > li`).addClass(`ml-8`)
  $(`ol`).addClass(`list-decimal mt-8`)
  $(`ul`).addClass(`list-square mt-8`)
  $(`em`).addClass(`italics`)
  $(`p`).addClass(`leading-loose text-lg text-gray-800 mt-8 text-2xl`)
  $(`blockquote`).addClass(
    `border-l-4 border-gray-300 font-serif leading-loose pl-4 text-justify`
  )
  $(`a`).addClass(
    `text-gray-700 font-bold underline hover:text-gray-900 inline`
  )
  $("iframe").addClass(`inline`)
  $("table").addClass(`mt-10 ml-auto mr-auto`)
  $("th").addClass(`bg-green-600 text-left p-2`)
  $("td").addClass(`p-2`)

  let postDate = moment(props.data.markdownRemark.frontmatter.date).isValid()
    ? moment(props.data.markdownRemark.frontmatter.date).format(`MMMM Do YYYY`)
    : props.data.markdownRemark.frontmatter.date

  return (
    <Layout>
      <SEO
        description={props.data.markdownRemark.frontmatter.description}
        keywords={[
          `unintendedcon`,
          `reallyidk`,
          `jonathan wong`,
          `suchcaptcha`
        ]}
        keywords={props.data.markdownRemark.frontmatter.keywords}
        title={props.data.markdownRemark.frontmatter.title}
      />
      <section className="text-gray-900">
        <h1 className="text-4xl font-bold">
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <small className="text-xl font-thin">{postDate}</small>
        <div
          class="poppins"
          dangerouslySetInnerHTML={{ __html: $.html() }}
        ></div>
      </section>
    </Layout>
  )
}

export default BlogPost
