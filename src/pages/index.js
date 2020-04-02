import React from "react"
import ReactToolTip from 'react-tooltip'

import { Link } from "gatsby"

import IndexLayout from "../components/index"
import SEO from "../components/seo"
import '../css/index.css'

function IndexPage() {
  return (
    <IndexLayout>
      <SEO
        keywords={[`unintendedcon`, `reallyidk`, `jonathan wong`, `suchcaptcha`]}
        title="Home"
      />

      <section className="">

        <h2 className="text-2xl font-extrabold underline inline-block">
          unintendedcon
        </h2>
        <div className="mr-8 my-2">
          <h3 className="text-xl">
            <span data-tip data-for="startups-tooltip" className="link-cl inline-block">startups</span>,&nbsp;
            <span data-tip data-for="cs-tooltip" className="inline-block">CS</span>,&nbsp;
            <span data-tip data-for="rationalism-tooltip" className="inline-block">rationalism</span>,&nbsp;
            <span data-tip data-for="philosophy-tooltip" className="inline-block">philosophy</span>,&nbsp;
            <span data-tip data-for="cogsci-tooltip" className="inline-block">cognitive&nbsp;psychology</span>,&nbsp;
            <span data-tip data-for="progress-tooltip" className="inline-block">progress</span>,&nbsp;
            <span data-tip data-for="longform-tooltip" className="inline-block">longform</span>,&nbsp;
            <span data-tip data-for="governance-tooltip" className="inline-block">governance</span>,&nbsp;
            <span data-tip data-for="productivity-tooltip" className="inline-block">productivity</span>,&nbsp;
            <span data-tip data-for="urbanism-tooltip" className="inline-block">urbanism</span>,&nbsp;
                  a.k.a. &nbsp;
            <span data-tip data-for="me-tooltip" className="inline-block">Jon's blog</span>
          </h3>

          <ReactToolTip id="startups-tooltip" place="top" type="dark" effect="float">
            <p>I'm trying to get one off the ground right now!</p>
          </ReactToolTip>
          <ReactToolTip id="cs-tooltip" place="top" type="dark" effect="float">
            <p>Technology should be a means to an end, rather than the end itself.</p>
          </ReactToolTip>
          <ReactToolTip id="rationalism-tooltip" place="top" type="dark" effect="float">
            <p>Trying to figure things out...</p>
          </ReactToolTip>
          <ReactToolTip id="philosophy-tooltip" place="top" type="dark" effect="float">
            <p>Are perception and reality entangled?</p>
          </ReactToolTip>
          <ReactToolTip id="cogsci-tooltip" place="top" type="dark" effect="float">
            <p>What are our cognitive biases and how do we correct them?</p>
          </ReactToolTip>
          <ReactToolTip id="progress-tooltip" place="top" type="dark" effect="float">
            <p>Progress has stagnated across the last decade. How can we encourage sustainable growth?</p>
          </ReactToolTip>
          <ReactToolTip id="longform-tooltip" place="top" type="dark" effect="float">
            <p>How do we discover knowledge with limited attention spans?</p>
          </ReactToolTip>
          <ReactToolTip id="governance-tooltip" place="top" type="dark" effect="float">
            <p>How do we effectively create a more equitable and sustainable society for all?</p>
          </ReactToolTip>
          <ReactToolTip id="productivity-tooltip" place="top" type="dark" effect="float">
            <p>How can we achieve flow?</p>
          </ReactToolTip>
          <ReactToolTip id="urbanism-tooltip" place="top" type="dark" effect="float">
            <p>With cities being the epicenter of everything, how do we ensure and maintain livability?</p>
          </ReactToolTip>
          <ReactToolTip id="me-tooltip" place="top" type="dark" effect="float">
            <p>My home base, if you will.</p>
          </ReactToolTip>
        </div>


      </section>
      <section>
        <div className="leading-loose text-gray-900 mt-6">
          <div className="flex layout-overlay">
            <div className="w-1/2 p-4">
              <h3 className="text-xl">
                New here? Start here.
              </h3>
              <ul>
                <li>
                  <Link to="articles/2020-02-13-when-metrics-replace-the-target" className="link-cl">
                    When Metrics Replace The Target
                  </Link>
                </li>
                <li>
                  <Link to="articles/2020-02-10-authenticity-is-more-efficient" className="link-cl">
                    Authenticity is More Efficient
                  </Link>
                </li>
                <li>
                  <Link to="articles/2020-01-30-saas-outline-from-the-beginning" className='link-cl'>
                    My Startup Timeline
                  </Link>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
            <div className="side-overlay flex-1 p-4">
              <h3 className="text-xl">
                Newsletter
              </h3>
              <form>

              </form>
            </div>
          </div>
          <div className="flex mt-8 text-center">
            <div className="flex-1 layout-overlay">
              <Link to="blog">
                Blog
              </Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="projects">
                Projects
              </Link>
            </div>
            <div className="flex-1 layout-overlay">
              <Link to="books">
                Books
              </Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="about">
                About
              </Link>
            </div>
          </div>
          <div className="flex mt-8 text-center">
            <div className="flex-1 layout-overlay">
              <Link to="lists">
                Lists
              </Link>
            </div>
            <div className="flex-1 side-overlay">
              <Link to="goals">
                Goals
              </Link>
            </div>
            <div className="flex-1 layout-overlay">
              <Link to="contact">
                Socials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}

export default IndexPage;
