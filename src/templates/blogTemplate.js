import React from 'react'
import { graphql } from 'gatsby'
import Cheerio from 'cheerio'
import moment from 'moment'
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

import Layout from '../components/layout'
import SEO from "../components/seo"

import './blogTemplate.css'
import '../prism/prism.css'
import '../prism/prism-theme.css'
// import 'highlight.js/styles/github.css'

export const query = graphql`
query($slug : String!) {
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

const BlogPost = (props) => {
    const $ = Cheerio.load(props.data.markdownRemark.html)
    $('h2').addClass("text-3xl mt-8")
    $('ol').addClass("list-decimal mt-8")
    $('ul').addClass("list-square mt-8")
    $('em').addClass("italics")
    $("p").addClass("mt-8 leading-loose text-lg text-gray-800")
    $("blockquote").addClass("border-l-4 border-gray-300 font-serif leading-loose pl-4 text-justify")
    $("a").addClass("text-gray-700 font-bold underline hover:text-gray-900")

    let postDate = moment(props.data.markdownRemark.frontmatter.date).isValid() ? moment(props.data.markdownRemark.frontmatter.date).format("MMMM Do YYYY, h:mm:ss a") : props.data.markdownRemark.frontmatter.date

    return (
        <Layout>
            <SEO
                keywords={[`unintendedcon`, `reallyidk`, `jonathan wong`, `suchcaptcha`]}
                title={props.data.markdownRemark.frontmatter.title}
                description={props.data.markdownRemark.frontmatter.description}
                keywords={props.data.markdownRemark.frontmatter.keywords}
            />
            <section className="text-gray-900">
            <h1 className="text-3xl">{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{postDate}</p>
            <div dangerouslySetInnerHTML={{ __html: $.html()}}>
                
            </div>
            </section>
        </Layout>
    )
}

export default BlogPost
