import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`unintendedcon`, `reallyidk`, `jonathan wong`, `suchcaptcha`]}
        title="Home"
      />

      <section className="">

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hiya, I'm Jonathan. I'm a 19yr old maker and CS student.
        </h2>
      </section>
      <section>
        <div className="leading-loose text-white">
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
          I have over 60 different directories inside one central folder with incomplete or failed projects. An event listing platform, Haxsource, is one such example.
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

export default IndexPage;
