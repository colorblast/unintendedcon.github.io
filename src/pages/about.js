import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`unintendedcon`, `reallyidk`, `jonathan wong`, `suchcaptcha`]}
        title="Home"
      />

      <section className="">

        <h2 className="text-2xl font-extrabold inline-block my-8 p-3">
          Hiya, I'm Jonathan. I'm a 20 yr old maker and CS student.
        </h2>
      </section>
      <section>
        <div className="leading-loose text-gray-800">
          <p>
          I’m currently devoting most of my time to {` `}
          <a className="font-bold no-underline text-gray-900" href="https://banh.app">
            Banh
          </a>, a smart calendar.
          </p>
          <p>
          Before I worked on Banh, I spent a decent chunk of my time doing <a className="font-bold no-underline text-gray-900" href="http://zerorobotics.mit.edu">space robotics</a> stuff.
          </p>
          <p>
          My broad interests are productivity, urbanism, transit systems, and increased innovation potential. My more niche research interests are in cognition and category learning (self-supervised).  
          </p>
          <p>
          Besides CS and making, I enjoy biking, long walks, longform, and practical philosophy.
          You can hit me up on{` `}
            <a
              className="font-bold no-underline text-gray-900"
              href="https://keybase.io/reallyidk"
            >
              keybase
            </a>.{` `}
            <u>I’m eager to find and work with other makers.</u>
          </p>
          <br />
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
