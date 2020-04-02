import PropTypes from "prop-types";
import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "gatsby";

import "./layout.css"

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900 layout-bg">
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full z-40">
        {children}
      </main>

      <footer>
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:pl-0 md:pr-8 md:py-8 text-sm">
          <p className="text-white">
            <Link
              className="font-bold no-underline text-gray-800"
              href="/"
            >
              Jonathan Wong
            </Link> -
            <a className="font-bold text-blue-300" href="https://twitter.com/suchcaptcha">
              @suchcaptcha
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline text-gray-800"
              href="https://github.com/unintendedcon"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
