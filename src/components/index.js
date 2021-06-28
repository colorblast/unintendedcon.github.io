import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

import "./layout.css"

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900 layout-bg">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full z-40">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
