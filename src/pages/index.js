import React from "react"

import { Link } from "gatsby"

import IndexLayout from "../components/index"
import SEO from "../components/seo"
import "../css/index.css"

function IndexPage() {
  const submitForm = () => {
    window.open(
      `https://tinyletter.com/reallyidk`,
      `popupwindow`,
      `scrollbars=yes,width=800,height=600`
    )
    return true
  }

  return (
    <IndexLayout>
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
        <h2 className="text-4xl uppercase font-extrabold inline-block logo">
          unintendedcon
        </h2>
        <div className="">
          <h3 className="text-xl">
            Sup. This is Jonathan and you're on my personal site, unintendedcon.
          </h3>
          <h3 className="text-xl my-4">
            I'm a junior blockchain engineer at Nethermind where I work on infrastructure. Outside of this, I'm interested in progress studies, patterns, myths, and things that give me competitive advantage. If you're new here, I also write.
          </h3>
        </div>
        <div className="my-4">
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              to="/articles"
            >
              Articles
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              to="/books"
            >
              Books
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              to="/paradoxes"
            >
              Paradoxes
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              to="/myths"
            >
              Myths
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              href="/10x"
            >
              10x
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              to="/blog"
            >
              Thoughts
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-gray-800 hover:underline inline"
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </IndexLayout>
  )
}

export default IndexPage
