import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`unintendedcon`, `reallyidk`, `jonathan wong`, `contact`, `suchcaptcha`]}
        title="Contact"
      />
      <section>
        <h2 class="leading-loose text-3xl text-white">
          Contact
        </h2>
        <p class="leading-loose text-white">
          The best way to reach me is through keybase or email.
          <br />
          Keybase: <a className="no-underline text-gray-600" href="https://keybase.io/reallyidk">reallyidk</a>
          <br />
          Linkedin: <a className="no-underline text-gray-600" href="https://linkedin.com/in/unintendedcon">unintendedcon</a>
          <br />
          Twitter: <a className="no-underline text-gray-600" href="https://twitter.com/suchcaptcha">suchcaptcha</a>
          <br />
	        Product Hunt: <a className="no-underline text-gray-600" href="https://www.producthunt.com/suchcaptcha">suchcaptcha</a>
          <br />
          Email: <a className="no-underline text-gray-600" href="mailto:jcw@vivaldi.net">jcw [at] vivaldi.net</a>
        </p>
      </section>
    </Layout>
  );
}

export default ContactPage;
