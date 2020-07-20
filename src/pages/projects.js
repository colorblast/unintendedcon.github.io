import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ProjectPage() {
  return (
    <Layout>
      <SEO
        keywords={[`projects`, `jonathan wong`, `unintendedcon`, `reallyidk`]}
        title="Projects"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h3 className="text-3xl">Projects</h3>
          <div className="flex">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mr-6">
              <a href="/writeups">
                {/*<img className="w-full" src="/img/card-top.jpg" alt="" />*/}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">CTF Writeups</div>
                  <p className="text-gray-700 text-base">
                    As a high schooler, I was semi-obsessed with subverting
                    systems. I had this fantasy that I could discover a zero-day
                    exploit in a top tech company (missed on the firebase one!)
                    and get an offer. I would bypass the entire interviewing
                    system.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #cybersecurity
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #redteam
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #capturetheflag
                  </span>
                </div>
              </a>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              {/*<a href="/writeups">*/}
              {/*<img className="w-full" src="/img/card-top.jpg" alt="" />*/}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Triple Boot (Asus FX503VD)
                </div>
                <p className="text-gray-700 text-base">
                  I can boot up Fedora, Windows, and macOS Sierra from my
                  computer (+ elementaryOS). I effectively hackintoshed my
                  computer, however poor that job was. I didn't get WiFi
                  working, but it was pretty cool!
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #hackintosh
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #unibeast
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #tonymac
                </span>
              </div>
              {/*</a>*/}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectPage;
