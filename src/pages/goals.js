import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function GoalPage() {
  return (
    <Layout>
      <SEO
        keywords={[`goals`, `2020`, `#2020goals`, `jonathan wong`, `unintendedcon`, `reallyidk`]}
        title="Goals"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <blockquote className="border-l-4 border-gray-300 font-serif leading-loose pl-4 text-justify">
          There’s more honor in defeat than unused potential.
          </blockquote>

          <cite className="font-bold mt-4 text-xs uppercase block">
          <a href="https://en.wikipedia.org/wiki/The_Politician_(TV_series)">– River, The Politician</a>
          </cite>
          <hr className="opacity-25"/>
          <br />
          <h2 className="text-3xl">
            Goals for 2020
          </h2>
          <p>
            For the first time, I'm making my goals public in order to stay more accountable. Consider it an experiment, if you will.
          </p>
          <br />
          <ul className="list-disc">
            <li>Release 2 blog posts a month</li>
            <li>Establish a source of passive income by the end of March</li>
            <li>Attend at least two hackathons by end of year</li>
            <li>Attend at least one conference by end of year</li>
            <li>Give at least one talk by end of year</li>
            <li>Floss more often</li>
            <li>Build a <a className="text-gray-900" href="https://getmakerlog.com">makerlog</a> streak of at least 30 days</li>
            <li>Meet at least 3 new interesting people per month. (I'm an <a className="text-gray-900" href="https://en.wikipedia.org/wiki/Big_Five_personality_traits">INFP-T / INTP personality</a>, which means I'm an introvert).</li>
            <li>Bike twice a week, weather permitting</li>
            <li>Do something outside of my comfort zone before the semester ends</li>
        </ul>
        </div>
      </section>
    </Layout>
  );
}

export default GoalPage;
