import React from "react";
import Collapsible from 'react-collapsible';

import Layout from "../components/layout";
import SEO from "../components/seo";

function ListsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`lists`, `jonathan wong`, `unintendedcon`, `reallyidk`, `suchcaptcha`]}
        title="Lists"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-white">
          <h2 className="text-3xl">
            Lists
          </h2>
          <p>
            I consider lists to be the core data structure of life. Lists organize so many things and I highly recommend you maintain some of your own.
          </p>
          <br />
          <Collapsible trigger="Tech Blogs >">
            <li><a href="https://jvns.ca/">https://jvns.ca</a></li>
                <li><a href="http://www.paulgraham.com/articles.html">http://www.paulgraham.com/articles.html</a></li>
                <li><a href="https://blog.codinghorror.com">https://blog.codinghorror.com</a></li>
		<li><a href="https://idlewords.com/">https://idlewords.com/</a></li>
          </Collapsible>
          <Collapsible trigger="Life Blogs >">
              <li><a href="https://malharmali.com/category/essays-criticism/">https://malharmali.com/category/essays-criticism/</a></li>
		<li><a href="https://waitbutwhy.com/">https://waitbutwhy.com/</a></li>
          </Collapsible>
          <Collapsible trigger="Provocative Stuff >">
              <li><a href="https://www.maa.org/external_archive/devlin/LockhartsLament.pdf">Lockhart's Lament</a></li>
            <li><a href="https://medium.freecodecamp.org/inside-the-invisible-war-for-the-open-internet-dd31a29a3f08">Inside the invisible war for the open internet</a></li>
            <li><a href="http://humanetech.com">Humane Tech (Tristan Harris)</a></li>
            <li><a href="https://www.youtube.com/watch?v=ji5_MqicxSo">The Last Lecture</a></li>
            <li><a href="https://www.strike.coop/bullshit-jobs/">On The Phenomenon of Bullshit Jobs: A Work Rant</a></li>
          </Collapsible>
          <Collapsible trigger="Psychology and Freedom >">
            <li><a href="https://en.wikipedia.org/wiki/Big_Five_personality_traits">Big 5 Psychology Traits</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Maslow's_hierarchy_of_needs">Maslow's Hierarchy of Needs</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Dunning–Kruger_effect">Dunning-Kruger Effect</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Mr._Money_Mustache">Mr Money Mustache (FIRE)</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Municipal_broadband">Municipal-owned Broadband</a></li>
          </Collapsible>
        </div>
      </section>
    </Layout>
  );
}

export default ListsPage;
