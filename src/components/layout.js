import PropTypes from "prop-types";
import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "gatsby";

import Header from "./header";
import "./layout.css"

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />

      <svg className="absolute z-0 top-0 right-0" width="819" height="298" viewBox="0 0 819 298" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M283.935 267.374C160.221 283.924 46.5144 197.049 29.9651 73.3348C13.4158 -50.3796 100.29 -164.086 224.005 -180.635L892.054 -270L951.984 178.009L283.935 267.374Z" fill="url(#paint0_linear)"/>
        <defs>
        <linearGradient id="paint0_linear" x1="29.9651" y1="73.3348" x2="714" y2="-129" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C94B4B"/>
        <stop offset="0.86501" stop-color="#4B134F"/>
        </linearGradient>
        </defs>
      </svg>

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full z-40">
        {children}
      </main>

      <footer>
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            <Link
              className="font-bold no-underline text-white"
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
              className="font-bold no-underline text-white"
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
