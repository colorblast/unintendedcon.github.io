import React from "react"

import { Link } from "gatsby"

import IndexLayout from "../components/index"
import SEO from "../components/seo"
import "../css/index.css"

function IndexPage() {
  const submitForm = () => {
    window.open(
      "https://tinyletter.com/reallyidk",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
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
            Hi! I'm Jonathan! I'm interested in the underlying abstractions and
            patterns in our lives. I'm particularly interested in theater,
            defaults, myths, emergence, clusters, paradoxes, loops, power
            dynamics, and serial entrepreneurs. I keep a running list of all of
            them.
          </h3>
          <h3 className="text-xl my-4">
            I saw someone on Design Twitter that really conveyed a sense of
            being warm. I should've saved it to are.na cause alas I have
            forgotten it. Anyways, I mostly do typescript + react and stuff
            nowadays but am looking to expand beyond that!
          </h3>
        </div>
        <div className="my-4">
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
