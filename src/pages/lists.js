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
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">
            Lists
          </h2>
          <p>
            Lists organize so many things. I highly recommend you maintain some of your own.
          </p>
          <br />
          <Collapsible trigger="Tech Blogs >">
            <li><a href="https://jvns.ca/">https://jvns.ca</a></li>
            <li><a href="http://www.paulgraham.com/articles.html">http://www.paulgraham.com/articles.html</a></li>
            <li><a href="https://blog.codinghorror.com">https://blog.codinghorror.com</a></li>
            <li><a href="https://www.kalzumeus.com/greatest-hits/">https://www.kalzumeus.com/greatest-hits/</a></li>
          </Collapsible>
          <Collapsible trigger="Life Blogs/Websites >">
		        <li><a href="https://waitbutwhy.com/">https://waitbutwhy.com/</a></li>
            <li><a href="https://palladiummag.com">https://palladiummag.com</a></li>
            <li><a href="https://idlewords.com/">https://idlewords.com/</a></li>
            <li><a href="https://malharmali.com/category/essays-criticism/">https://malharmali.com/category/essays-criticism/</a></li>
          </Collapsible>
          <Collapsible trigger="Provocative Stuff >">
            <li><a href="https://www.maa.org/external_archive/devlin/LockhartsLament.pdf">Lockhart's Lament</a></li>
            <li><a href="https://medium.freecodecamp.org/inside-the-invisible-war-for-the-open-internet-dd31a29a3f08">Inside the invisible war for the open internet</a></li>
            <li><a href="http://humanetech.com">Humane Tech (Tristan Harris)</a></li>
            <li><a href="https://www.youtube.com/watch?v=ji5_MqicxSo">The Last Lecture</a></li>
            <li><a href="https://www.strike.coop/bullshit-jobs/">On The Phenomenon of Bullshit Jobs: A Work Rant</a></li>
            <li><a href="https://www.youtube.com/watch?v=PUv66718DII">Inventing on Principle</a></li>
            <li><a href="https://www.youtube.com/watch?v=8pTEmbeENF4">The Future of Programming</a></li>
            <li><a href="https://medium.com/@sebmck/2015-in-review-51ac7035e272">Seb. Mckenzie ~2015 yr in review</a></li>
            <li><a href="https://medium.com/@jessicamleee/how-to-hack-international-conferences-hackathons-and-world-travel-in-college-ab59ebbcb32e">Hackathons, Conferences, and Traveling</a></li>
            <li><a href="https://patrickcollison.com/advice">Patrick Collison advice</a></li>
            <li><a href="https://www.youtube.com/watch?v=btVMA6SjShw">Ram Shriram talk</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Black_swan_theory">Black Swan Theory</a></li>
            <li><a href="https://palladiummag.com/2019/08/05/the-real-problem-at-yale-is-not-free-speech/">The Real Problem at Yale is Not Free Speech</a></li>
            <li><a href="https://yaledailynews.com/blog/2012/05/27/keegan-the-opposite-of-loneliness/">The Opposite of Loneliness</a></li>
            <li><a href="http://mindingourway.com/guilt/">Minding Your Way</a></li>
          </Collapsible>
          <Collapsible trigger="Startups >">
            <li><a href="https://thebootstrappedfounder.com/zero-to-sold/">Zero to Sold</a></li>
            <li><a href="https://www.fiveminutefounder.com">Five Minute Founder</a></li>
          </Collapsible>
          <Collapsible trigger="Psychology and Freedom >">
            <li><a href="https://en.wikipedia.org/wiki/Big_Five_personality_traits">Big 5 Psychology Traits</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Maslow's_hierarchy_of_needs">Maslow's Hierarchy of Needs</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Dunning–Kruger_effect">Dunning-Kruger Effect</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Mr._Money_Mustache">Mr Money Mustache (FIRE)</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Municipal_broadband">Municipal-owned Broadband</a></li>
          </Collapsible>
          <Collapsible trigger="Hackathons >">
            <li><a href="https://hacktech.io">Upcoming: HackTech, <span className="line-through">Pasadena, CA</span> Online due to COVID-19</a></li>
            <li><a href="https://flutterhackathon.com">Flutter Global Hackathon, NYC (compass hq), NY</a></li>
            <li><a href="https://www.bigredhacks.com">BigRedHacks x2, Ithaca, NY</a></li>
            <li><a href="https://hackdartmouth.io">HackDartmouth, Hanover, NH</a></li>
            <li><a href="https://yhack.org">YHack, New Haven, CT</a></li>
            <li><a href="https://treehacks.com">Treehacks, Palo Alto, CA</a></li>
            <li><a href="https://blog.scriptr.io/innovation-at-nasa-space-apps-hackathon-sponsored-by-scriptr-io/">Space Apps Next-Gen, NYC (ebay hq), NY</a></li>
            <li><a href="https://hackcooper.org">HackCooper x2, NYC, NY</a></li>
            <li><a href="https://medium.com/@aaronlafazan/lihacks-long-islands-first-high-school-hackathon-bf03d66dba7f">LIHacks, Old Westbury, NY</a></li>
            <li><a href="http://hackbu.org/2020s/">Hackbu x2, Binghamton, NY</a></li>
            <li>CSTUY defhacks(), NYC (facebook hq), NY</li>
            <li>Countless others...</li>
          </Collapsible>
          <Collapsible trigger="Podcasts >">
            <li><a href="https://www.indiehackers.com/podcast">Indie Hackers</a></li>
            <li><a href="https://twimlai.com">TWIML</a></li>
            <li><a href="https://deepmind.com/blog/article/welcome-to-the-deepmind-podcast">Deepmind</a></li>
            <li><a href="https://lexfridman.com/ai/">Artificial Intelligence</a></li>
            <li><a href="https://nav.al">Naval Ravikant's</a></li>
            <li><a href="http://www.fullstackradio.com">Full Stack Radio</a></li>
          </Collapsible>
          <Collapsible trigger="Books I've read and think have some utility (not neccesarily a full endorsement) >">
            <li>A Tree Grows in Brooklyn by Betty Smith (intrinsic value)</li>
            <li>Deep Work by Cal Newport (focus and intrinsic value)</li>
            <li>How to win friends and influence people by Dale Carnegie (how to increase impact)</li>
            <li>The Alchemist by Paulo Coelho (intrinsic value, no one knows what they're doing)</li>
            <li>The Republic by Plato (introduces concept of justice)</li>
            <li>On Liberty by John Stuart Mills (liberties and freedoms)</li>
            <li>Infinite Jest by David Foster Wallace (new sincerity)</li>
            <li>The Third Door by Alex Banayan (break social conditioning)</li>
            <li>The World is Flat by Thomas Friedman (globalism and remote work)</li>
            <li>The Mom Test by Rob Fitzpatrick (how to understand people and their problems)</li>
            <li>Zero To One (contrarianism, understanding tribalism, and startup building)</li>
            <li>Guns, Germs, and Steel by Jared Diamond (how we got to now)</li>
            <li>Never Let Me Go by Kazuo Ishiguro (bio and tech ethics)</li>
          </Collapsible>
          <Collapsible trigger="Books I need to get to >">
            <li>Thinking Fast and Slow by Daniel Kahneman (understanding cognition)</li>
            <li>To Have or to Be? by Erich Fromm (essentialism)</li>
            <li>Company of One by Paul Jarvis (is growth always good?)</li>
            <li>Rework by David Heinmeiner Hansson and Jason Fried (long hours is not productive)</li>
            <li>Leadership and Self-Deception by the Arbringer Institute (recommended by some guy in MicroConf Connect)</li>
            <li>Fooled by Randomness by Nassim Nicholas Taleb (the argument against the quant and statistical approach)</li>
            <li>Skin in the Game by Nassim Nicholas Taleb (incentive alignment)</li>
            <li>The Black Swan by Nassim Nicholas Taleb (with coronavirus, this is a must-read)</li>
            <li>Crossing the Chasm by Geoffrey Moore (understanding the stages of startups)</li>
            <li>Presence by Amy Cuddy (application of perception and reality are entangled)</li>
            <li>Learned Optimism by Martin Seligman (recommended by Laurie Santos, The Science of Well-Being)</li>
            <li>Who Rules the World by Noam Chomsky</li>
            <li>Manufacturing Consent by Noam Chomsky and Edward Herman (media is entangled with power)</li>
            <li>Bad Samaritans by Ha-Joon Chang (late-stage capitalism)</li>
            <li>Range by David Epstein (interdisciplinary is the future)</li>
            <li>2 Billion Under 20 by Stacey Ferreira and Jared Kleinert (we have ever-pressing challenges; we are rising to solve them)</li>
            <li>Bullshit Jobs: A Theory by David Graeber (with COVID-19 we really know which jobs are essential)</li>
            <li>Refactoring UI by Adam Wathan and Steve Schoger (technical book on design for devs)</li>
          </Collapsible>
        </div>
      </section>
    </Layout>
  );
}

export default ListsPage;
