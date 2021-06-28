import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useState } from "react"
import "./header.css"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="z-40">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline header-logo" to="/">
          <span className="font-black text-2xl tracking-tight logo">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/blog`,
              title: `BLOG`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline font-bold text-sm hover:text-gray-800"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div class="flex">
        <hr className="lg:w-1/4 md:w-1/12 invisible" />
        <hr className="sm:w-full md:w-5/6 lg:w-2/4" />
      </div>
    </header>
  )
}

export default Header
