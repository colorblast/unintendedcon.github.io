import React from "react";

import { Link } from "gatsby";

import IndexLayout from "../components/index";
import SEO from "../components/seo";
import "../css/index.css";

function IndexPage() {

  const submitForm = () => {
    window.open('https://tinyletter.com/reallyidk', 'popupwindow', 'scrollbars=yes,width=800,height=600')
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
        <h2 className="text-2xl font-extrabold underline inline-block logo">
          unintendedcon
        </h2>
        <div className="mr-8 my-2">
          <h3 className="text-xl">
            Where do we go from here?
          </h3>
        </div>
      </section>
      <section>
        <div className="leading-loose text-gray-900 mt-6">
          <div className="flex layout-left">
            <div className="w-1/2 p-4">
              <h3 className="text-xl">New here? Start here.</h3>
              <ul>
                <li>
                  <Link
                    className="link-cl"
                    to="/articles/free-speech-does-not-scale"
                  >
                    Free Speech Does Not Scale
                  </Link>
                </li>
                {/*<li>
                  <Link
                    className="link-cl"
                    to="/articles/2020-02-10-authenticity-is-more-efficient"
                  >
                    Authenticity is More Efficient
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-cl"
                    to="/articles/2020-01-30-saas-outline-from-the-beginning"
                  >
                    My Startup Timeline
                  </Link>
                </li>*/}
                {/*<li>
                  <Link to="/" className="link-cl">
                    How to Frame The World
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-cl">
                    Learned Optimism and Trajectory
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-cl">
                    The Case for Why It's Better To Build an Internet Business Now More Than Ever
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-cl">
                    Accountability, Branding, and the Extension of the Self
                  </Link>
                </li>*/}
              </ul>
            </div>
            <div className="layout-right flex-1 p-4">
              <h3 className="text-xl">Newsletter</h3>
              <form
                action="https://tinyletter.com/reallyidk"
                className="inline-block"
                method="post"
                onSubmit={submitForm}
                target="popupwindow"
              >
                <label className="inline-block" htmlFor="tlemail">
                  You get the blog + extra thoughts + my link roundup
                </label>
                <br />
                <input
                  className="inline-block focus:shadow-outline"
                  id="tlemail"
                  name="email"
                  placeholder="Your best email"
                  type="text"
                />
                <br />
                <input name="embed" type="hidden" value="1" />
                <input
                  className="my-2 px-2 bg-green-100 hover:bg-green-500"
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
          <div className="flex mt-8 text-center">
            <div className="flex-1 layout-overlay">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="flex-1 layout-overlay">
              <Link to="/books">Books</Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}

export default IndexPage;
