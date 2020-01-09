import React from 'react'
import { graphql } from 'gatsby'
import Cheerio from 'cheerio'

import Layout from '../components/layout'

import './blogTemplate.css'
import { parse } from 'url';

export const query = graphql`
query($slug : String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date
        }
        html
    }
}
`

const BlogPost = (props) => {
    const $ = Cheerio.load(props.data.markdownRemark.html)
    $('h2').addClass("text-3xl mt-8")
    $('ol').addClass("list-decimal mt-8")
    $('ul').addClass("list-square")
    $('em').addClass("italics")
    $("p").addClass("mt-8")
    $("blockquote").addClass("border-l-4 border-gray-300 font-serif leading-loose pl-4 text-justify")
    $("a").addClass("text-gray-700 font-bold bg-red-400")
    $("code").addClass("bg-gray-900")

    return (
        <Layout>
            <section className="text-white">
            <h1 className="text-3xl">{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: $.html()}}>
                
            </div>
            </section>
        </Layout>
    )
}

export default BlogPost