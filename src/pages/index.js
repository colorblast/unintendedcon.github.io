import React from "react";
import ReactToolTip from "react-tooltip";

import { Link } from "gatsby";

import IndexLayout from "../components/index";
import SEO from "../components/seo";
import "../css/index.css";

function IndexPage() {
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
            <span
              className="link-cl inline-block"
              data-for="startups-tooltip"
              data-tip
            >
              startups
            </span>
            ,&nbsp;
            <span className="inline-block" data-for="cs-tooltip" data-tip>
              CS
            </span>
            ,&nbsp;
            <span
              className="inline-block"
              data-for="rationalism-tooltip"
              data-tip
            >
              rationalism
            </span>
            ,&nbsp;
            <span
              className="inline-block"
              data-for="philosophy-tooltip"
              data-tip
            >
              philosophy
            </span>
            ,&nbsp;
            <span className="inline-block" data-for="cogsci-tooltip" data-tip>
              cognitive&nbsp;psychology
            </span>
            ,&nbsp;
            <span className="inline-block" data-for="progress-tooltip" data-tip>
              progress
            </span>
            ,&nbsp;
            <span className="inline-block" data-for="longform-tooltip" data-tip>
              longform
            </span>
            ,&nbsp;
            <span
              className="inline-block"
              data-for="governance-tooltip"
              data-tip
            >
              governance
            </span>
            ,&nbsp;
            <span
              className="inline-block"
              data-for="productivity-tooltip"
              data-tip
            >
              productivity
            </span>
            ,&nbsp;
            <span className="inline-block" data-for="urbanism-tooltip" data-tip>
              urbanism
            </span>
            ,&nbsp; a.k.a. &nbsp;
            <span className="inline-block" data-for="me-tooltip" data-tip>
              Jon's blog
            </span>
          </h3>

          <ReactToolTip
            effect="float"
            id="startups-tooltip"
            place="top"
            type="dark"
          >
            <p>I'm trying to get one off the ground right now!</p>
          </ReactToolTip>
          <ReactToolTip effect="float" id="cs-tooltip" place="top" type="dark">
            <p>
              Technology should be a means to an end, rather than the end
              itself.
            </p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="rationalism-tooltip"
            place="top"
            type="dark"
          >
            <p>Trying to figure things out...</p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="philosophy-tooltip"
            place="top"
            type="dark"
          >
            <p>Are perception and reality entangled?</p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="cogsci-tooltip"
            place="top"
            type="dark"
          >
            <p>What are our cognitive biases and how do we correct them?</p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="progress-tooltip"
            place="top"
            type="dark"
          >
            <p>
              Progress has stagnated across the last decade. How can we
              encourage sustainable growth?
            </p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="longform-tooltip"
            place="top"
            type="dark"
          >
            <p>How do we discover knowledge with limited attention spans?</p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="governance-tooltip"
            place="top"
            type="dark"
          >
            <p>
              How do we effectively create a more equitable and sustainable
              society for all?
            </p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="productivity-tooltip"
            place="top"
            type="dark"
          >
            <p>How can we achieve flow?</p>
          </ReactToolTip>
          <ReactToolTip
            effect="float"
            id="urbanism-tooltip"
            place="top"
            type="dark"
          >
            <p>
              With cities being the epicenter of everything, how do we ensure
              and maintain livability?
            </p>
          </ReactToolTip>
          <ReactToolTip effect="float" id="me-tooltip" place="top" type="dark">
            <p>My home base, if you will.</p>
          </ReactToolTip>
        </div>
      </section>
      <section>
        <div className="leading-loose text-gray-900 mt-6">
          <div className="flex layout-overlay">
            <div className="w-1/2 p-4">
              <h3 className="text-xl">New here? Start here.</h3>
              <ul>
                <li>
                  <Link
                    className="link-cl"
                    to="articles/2020-02-13-when-metrics-replace-the-target"
                  >
                    When Metrics Replace The Target
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-cl"
                    to="articles/2020-02-10-authenticity-is-more-efficient"
                  >
                    Authenticity is More Efficient
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-cl"
                    to="articles/2020-01-30-saas-outline-from-the-beginning"
                  >
                    My Startup Timeline
                  </Link>
                </li>
                {/*<li>
                  <Link to="" className="link-cl">
                    How to Frame The World
                  </Link>
                </li>
                <li>
                  <Link to="" className="link-cl">
                    Learned Optimism and Trajectory
                  </Link>
                </li>
                <li>
                  <Link to="" className="link-cl">
                    The Case for Why It's Better To Build an Internet Business Now More Than Ever
                  </Link>
                </li>
                <li>
                  <Link to="" className="link-cl">
                    Accountability, Branding, and the Extension of the Self
                  </Link>
                </li>*/}
              </ul>
            </div>
            <div className="side-overlay flex-1 p-4">
              <h3 className="text-xl">Newsletter</h3>
              <form
                action="https://tinyletter.com/reallyidk"
                className="inline-block"
                method="post"
                onsubmit="window.open('https://tinyletter.com/reallyidk', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
                target="popupwindow"
              >
                <label className="inline-block" for="tlemail">
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
              <Link to="blog">Blog</Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="projects">Projects</Link>
            </div>
            <div className="flex-1 layout-overlay">
              <Link to="books">Books</Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="about">About</Link>
            </div>
          </div>
          <div className="flex mt-8 text-center">
            <div className="flex-1 layout-overlay">
              <Link to="lists">Lists</Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="goals">Goals</Link>
            </div>
            <div className="flex-1 layout-overlay">
              <Link to="contact">Socials</Link>
            </div>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}

export default IndexPage;
