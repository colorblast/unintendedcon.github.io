import React from "react";
import Collapsible from "react-collapsible";
import ReactToolTip from "react-tooltip";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ListsPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `lists`,
          `jonathan wong`,
          `unintendedcon`,
          `reallyidk`,
          `suchcaptcha`
        ]}
        title="Lists"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full text-gray-900">
          <h2 className="text-3xl">Lists</h2>
          <p>
            Lists organize so many things. I highly recommend you maintain some
            of your own. A * means I highly recommend it.
          </p>
          <br />
          <Collapsible
            className="cursor-pointer"
            trigger="Tech Blogs >"
            triggerOpenedClassName="cursor-pointer font-bold text-xl"
            triggerWhenOpen="Tech Blogs"
          >
            <li>
              <a href="https://jvns.ca/">https://jvns.ca *</a>
            </li>
            <li>
              <a href="http://www.paulgraham.com/articles.html">
                http://www.paulgraham.com/articles.html *
              </a>
            </li>
            <li>
              <a href="https://blog.codinghorror.com">
                https://blog.codinghorror.com
              </a>
            </li>
            <li>
              <a href="https://www.kalzumeus.com/greatest-hits/">
                https://www.kalzumeus.com/greatest-hits/
              </a>
            </li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Life Blogs/Websites >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Other Cool Blogs"
          >
            <li>
              <a href="https://waitbutwhy.com/">waitbutwhy *</a>
            </li>
            <li>
              <a href="https://slatestarcodex.com/">slatestarcodex</a>
            </li>
            <li>
              <a href="https://palladiummag.com">https://palladiummag.com</a>
            </li>
            <li>
              <a href="https://idlewords.com/">https://idlewords.com/</a>
            </li>
            <li>
              <a href="https://malharmali.com/category/essays-criticism/">
                https://malharmali.com/category/essays-criticism/
              </a>
            </li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Provocative Stuff >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Intriguing Stuff"
          >
            <li>
              <a href="https://www.maa.org/external_archive/devlin/LockhartsLament.pdf">
                Lockhart's Lament
              </a>
            </li>
            <li>
              <a href="https://medium.freecodecamp.org/inside-the-invisible-war-for-the-open-internet-dd31a29a3f08">
                Inside the invisible war for the open internet
              </a>
            </li>
            <li>
              <a href="http://humanetech.com">Humane Tech (Tristan Harris)</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=ji5_MqicxSo">
                The Last Lecture *
              </a>
            </li>
            <li>
              <a href="https://www.strike.coop/bullshit-jobs/">
                On The Phenomenon of Bullshit Jobs: A Work Rant
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=PUv66718DII">
                Inventing on Principle *
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8pTEmbeENF4">
                The Future of Programming
              </a>
            </li>
            <li>
              <a href="https://medium.com/@sebmck/2015-in-review-51ac7035e272">
                Seb. Mckenzie ~2015 yr in review
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jessicamleee/how-to-hack-international-conferences-hackathons-and-world-travel-in-college-ab59ebbcb32e">
                Hackathons, Conferences, and Traveling
              </a>
            </li>
            <li>
              <a href="https://patrickcollison.com/advice">
                Patrick Collison advice *
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=btVMA6SjShw">
                Ram Shriram talk
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Black_swan_theory">
                Black Swan Theory
              </a>
            </li>
            <li>
              <a href="https://palladiummag.com/2019/08/05/the-real-problem-at-yale-is-not-free-speech/">
                The Real Problem at Yale is Not Free Speech *
              </a>
            </li>
            <li>
              <a href="https://yaledailynews.com/blog/2012/05/27/keegan-the-opposite-of-loneliness/">
                The Opposite of Loneliness
              </a>
            </li>
            <li>
              <a href="http://mindingourway.com/guilt/">Minding Our Way</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8CrOL-ydFMI">
                This Is Water *
              </a>
            </li>
            <li>
              <a href="https://theamericanscholar.org/the-disadvantages-of-an-elite-education/">
                The Disadvantages of an Elite Education
              </a>
            </li>
            <li>
              <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/">
                Meditations on Moloch
              </a>
            </li>
            <li>
              <a href="https://blog.samaltman.com/how-to-be-successful">
                How to Be Successful
              </a>
            </li>
            <li>
              <a href="https://www.perell.com/blog/news-in-the-age-of-abundance">
                News in the Age of Abundance
              </a>
            </li>
            <li>
              <a href="https://humaninformationprocessing.com/teaching/">
                How to Build a Brain from Scratch
              </a>
            </li>
            <li>
              <a href="https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/">
                Don't Call Yourself a Programmer, And Other Career Advice *
              </a>
            </li>
            <li>
              <a href="https://haseebq.com/how-not-to-bomb-your-offer-negotiation/">
                How Not To Bomb Your Offer Negotiation
              </a>
            </li>
            <li>
              <a
                data-for="cummings-tooltip"
                data-tip
                href="https://static.guim.co.uk/ni/1381763590219/-Some-thoughts-on-education.pdf"
              >
                Some Thoughts on Educational and Political Priorities *
              </a>
            </li>
            <li>
              <a href="https://liora.substack.com/p/how-citizen-journalism-and-education">
                How Citizen Journalism & Education Reform Can Save Us From Bad
                Science *
              </a>
            </li>
            <li>
              <a href="https://fredrikdeboer.com/2020/07/10/the-irresistible-force-vs-the-ironized-object/">
                The irresistible force vs the ironized object * (principles vs
                postmodernism)
              </a>
            </li>
          </Collapsible>
          <ReactToolTip id="cummings-tooltip" type="dark">
            <p>
              The author of this paper states disbelief in climate change (as of
              2013), a view I do not share.
              <br /> His primary reason for this is shoddiness of climate
              research, and research in general, which has proved correct with
              the ongoing{" "}
              <a className="link-cl" href="">
                replication crisis
              </a>
              .
            </p>
          </ReactToolTip>
          <Collapsible
            className="cursor-pointer"
            trigger="Startups >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Helpful Startup Things"
          >
            <li>
              <a href="https://thebootstrappedfounder.com/zero-to-sold/">
                Zero to Sold *
              </a>
            </li>
            <li>
              <a href="https://www.fiveminutefounder.com">
                Five Minute Founder
              </a>
            </li>
            <li>
              <a href="https://nathanbarry.com/wealth-creation/">
                The Ladders of Wealth Creation *
              </a>
            </li>
            <li>
              <a href="https://lauraroeder.com/why-i-quit-trying-to-make-it-work-f905ec5a2eaa">
                Why I Quit Trying to Make It Work *
              </a>
            </li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Psychology and Freedom >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Psychology and Freedom"
          >
            <li>
              <a href="https://en.wikipedia.org/wiki/Big_Five_personality_traits">
                Big 5 Psychology Traits
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Maslow's_hierarchy_of_needs">
                Maslow's Hierarchy of Needs *
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Dunning–Kruger_effect">
                Dunning-Kruger Effect
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Mr._Money_Mustache">
                Mr Money Mustache (FIRE)
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Municipal_broadband">
                Municipal-owned Broadband
              </a>
            </li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Hackathons >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="my ego list"
          >
            <li>
              <a href="https://hacktech.io">
                Upcoming: HackTech,{" "}
                <span className="line-through">Pasadena, CA</span> Online due to
                COVID-19
              </a>
            </li>
            <li>
              <a href="https://flutterhackathon.com">
                Flutter Global Hackathon, NYC (compass hq), NY
              </a>
            </li>
            <li>
              <a href="https://www.bigredhacks.com">
                BigRedHacks x2, Ithaca, NY
              </a>
            </li>
            <li>
              <a href="https://hackdartmouth.io">HackDartmouth, Hanover, NH</a>
            </li>
            <li>
              <a href="https://yhack.org">YHack, New Haven, CT</a>
            </li>
            <li>
              <a href="https://treehacks.com">Treehacks, Palo Alto, CA</a>
            </li>
            <li>
              <a href="https://blog.scriptr.io/innovation-at-nasa-space-apps-hackathon-sponsored-by-scriptr-io/">
                Space Apps Next-Gen, NYC (ebay hq), NY
              </a>
            </li>
            <li>
              <a href="https://hackcooper.org">HackCooper x2, NYC, NY</a>
            </li>
            <li>
              <a href="https://medium.com/@aaronlafazan/lihacks-long-islands-first-high-school-hackathon-bf03d66dba7f">
                LIHacks, Old Westbury, NY
              </a>
            </li>
            <li>
              <a href="http://hackbu.org/2020s/">Hackbu x2, Binghamton, NY</a>
            </li>
            <li>CSTUY defhacks(), NYC (facebook hq), NY</li>
            <li>Countless others...</li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Podcasts >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Podcasts"
          >
            <li>
              <a href="https://www.indiehackers.com/podcast">Indie Hackers *</a>
            </li>
            <li>
              <a href="https://twimlai.com">TWIML</a>
            </li>
            <li>
              <a href="https://deepmind.com/blog/article/welcome-to-the-deepmind-podcast">
                Deepmind
              </a>
            </li>
            <li>
              <a href="https://lexfridman.com/ai/">Artificial Intelligence</a>
            </li>
            <li>
              <a href="https://nav.al">Naval Ravikant's</a>
            </li>
            <li>
              <a href="http://www.fullstackradio.com">Full Stack Radio</a>
            </li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Books I've read and think have some utility (not neccesarily a full endorsement) >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Books I've read (and think have some sort of value or lesson)"
          >
            <li>A Tree Grows in Brooklyn by Betty Smith (intrinsic value)</li>
            <li>Deep Work by Cal Newport (focus and intrinsic value)</li>
            <li>
              How to win friends and influence people by Dale Carnegie (how to
              increase impact)
            </li>
            <li>
              The Alchemist by Paulo Coelho (intrinsic value, no one knows what
              they're doing)
            </li>
            <li>The Republic by Plato (introduces concept of justice)</li>
            <li>On Liberty by John Stuart Mills (liberties and freedoms)</li>
            <li>Infinite Jest by David Foster Wallace (new sincerity)</li>
            <li>The Third Door by Alex Banayan (break social conditioning)</li>
            <li>
              The World is Flat by Thomas Friedman (globalism and remote work)
            </li>
            <li>
              The Mom Test by Rob Fitzpatrick (how to understand people and
              their problems)
            </li>
            <li>
              Zero To One (contrarianism, understanding tribalism, and startup
              building; master's online notes are much better though)
            </li>
            <li>Guns, Germs, and Steel by Jared Diamond (how we got to now)</li>
            <li>Never Let Me Go by Kazuo Ishiguro (bio and tech ethics)</li>
            <li>Company of One by Paul Jarvis (is growth always good?)</li>
            <li>
              Rework by David Heinmeiner Hansson and Jason Fried (long hours is
              not productive)
            </li>
            <li>
              Manufacturing Consent by Noam Chomsky and Edward Herman (media is
              entangled with power)
            </li>
            <li>
              Fooled by Randomness by Nassim Nicholas Taleb (the argument
              against the quant and statistical approach)
            </li>
            <li>
              The Black Swan by Nassim Nicholas Taleb (with coronavirus, this is
              a must-read)
            </li>
          </Collapsible>
          <Collapsible
            className="cursor-pointer"
            trigger="Books I need to get to >"
            triggerOpenedClassName="font-bold text-xl"
            triggerWhenOpen="Books I've been meaning to read"
          >
            <li>
              Thinking Fast and Slow by Daniel Kahneman (understanding
              cognition)
            </li>
            <li>To Have or to Be? by Erich Fromm (essentialism)</li>
            <li>
              Leadership and Self-Deception by the Arbringer Institute
              (recommended by some guy in MicroConf Connect)
            </li>
            <li>
              Skin in the Game by Nassim Nicholas Taleb (incentive alignment)
            </li>
            <li>
              Crossing the Chasm by Geoffrey Moore (understanding the stages of
              startups)
            </li>
            <li>
              Presence by Amy Cuddy (application of perception and reality are
              entangled)
            </li>
            <li>
              Learned Optimism by Martin Seligman (recommended by Laurie Santos,
              The Science of Well-Being)
            </li>
            <li>Who Rules the World by Noam Chomsky</li>
            <li>Bad Samaritans by Ha-Joon Chang (late-stage capitalism)</li>
            <li>Range by David Epstein (interdisciplinary is the future)</li>
            <li>
              2 Billion Under 20 by Stacey Ferreira and Jared Kleinert (we have
              ever-pressing challenges; we are rising to solve them)
            </li>
            <li>
              Bullshit Jobs: A Theory by David Graeber (with COVID-19 we really
              know which jobs are essential)
            </li>
            <li>
              Refactoring UI by Adam Wathan and Steve Schoger (technical book on
              design for devs)
            </li>
            <li>Utopia for Realists by Rutger Bregman</li>
            <li>Transcend by Scott Barry Kaufman (humanism + growth)</li>
            <li>
              The Art of Doing Science and Engineering by Richard Hamming
              (collison's book shelf + recommended everywhere)
            </li>
            <li>The Innovator's Dilemma by Clayton M Christensen</li>
            <li>Weird by Olga Kazan (neurodivergence)</li>
            <li>
              Antifragile by Nassim Nicholas Taleb (what do with black swan
              situations)
            </li>
            <li>
              Models of My Life by Herbert Simon (Simon is an interdisciplinary
              guy)
            </li>
            <li>
              Letters to a Young Contrarian by Christopher Hitchens (on patrick
              collison's bookshelf)
            </li>
            <li>
              Discrimination and Disparities by Thomas Sowell (disparities don't
              necessarily mean discrimination)
            </li>
            <li>
              Austerity: The History of a Dangerous Idea by Mark Blyth
              (austerity doesn't work)
            </li>
            <li>
              The Case Against Education by Bryan Caplan (universities are
              economically unfeasible)
            </li>
            <li>
              The Coddling of the American Mind by Greg Lukianoff and Jonathan
              Haidt
            </li>
            <li>Hate Inc by Matt Taibbi (why polarization happens)</li>
            <li>
              Capital in the Twenty-First Century by Thomas Piketty (why wealth
              inequality happens)
            </li>
            <li>The Power Broker by Robert Caro ()</li>
            <li>The Fountainhead by Ayn Rand (individualism)</li>
            <li>Traction by Gabriel Weinberg (startup growth)</li>
          </Collapsible>
        </div>
      </section>
    </Layout>
  );
}

export default ListsPage;
