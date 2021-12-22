import { Link } from 'react-router-dom'
import Container from '../components/Container'

function About(){
  return (
    <Container message="Travis is cool">
        <h1 className="font-inter px-10 pt-20 pb-8 lg:text-7xl text-4xl font-semibold from-green-900 via-green-700 to-yellow-300 text-transparent bg-clip-text caret-pink-600 bg-gradient-to-br dark:from-purple-500 dark:via-purple-400 dark:to-fuchsia-100">Who am I?</h1>

        <div className="bg-gray-50 px-10 py-8 space-y-12 rounded-2xl shadow-md">
          <p className="prose prose-xl font-medium dark:text-gray-50">Hello, my name is Nathan Truong. I am a full-stack software engineer, but my joy is the front-end and visuals. I currently at <a href="https://resilientcoders.org" target="_blank" rel="noreferrer" aria-label="Resilient Coders"><span className="text-red-600 font-semibold">Resilient Coders</span></a> as a Software Engineer, but I'm looking for new opportunities in the field! I've worked design gigs in the past, like at MDA Let's Play being a freelance graphic designer. So naturally, when learning to be a developer I stumbled upon a treasure trove once I understood CSS. I also play a lot of Minecraft. If you or you know someone who has open positions for a front-end engineer or full-stack engineer, send them my way via the form on my <Link to="/contact">Contact</Link> page.</p>
          
          {/* TECH STACK */}
          <div>
            <h2 className="font-semibold lg:text-4xl text-green-600 dark:text-indigo-200 my-8">My Tech Stack</h2>
            <div className="lg:text-2xl dark:text-gray-50">
              <section>
                <section>
                  <span className="font-medium text-green-900">Front-end: </span>
                  <span className="text-gray-800">React, Tailwind CSS, CSS3, and HTML5.</span>
                </section>
                <p className="prose prose-xl">All of what you're seeing right now.</p>
              </section>
              <p className="leading-relaxed pb-4"><span className="font-medium text-green-900">Back-end:</span> EJS, Node.js, Express, MongoDB. <p className="prose prose-xl">What powers what's going behind the scenes.</p></p>
            </div>

            {/* MINECRAFT MODS */}
            <div>
              <h2 className="lg:text-4xl text-green-600 dark:text-indigo-200 font-semibold my-8">The Minecraft Mods I Use</h2>
              <p className="lg:text-3xl dark:text-gray-50 font-medium pb-6">Just to name a few:</p>
              <ul className="lg:text-2xl space-y-2">
                <li>Auto Switch</li>
                <li>Camera Overhaul</li>
                <li>Extra Sounds</li>
                <li>Mouse Wheelie</li>
                <li>Ok Zoomer</li>
                <li>...and many more!</li>
              </ul>
            </div>

            {/* SOFTWARE/GEAR */}
            <div>
              <h2 className="lg:text-4xl text-green-600 dark:text-indigo-200 font-semibold my-8">The Software And Gear That I Use</h2>
              <p className="lg:text-2xl dark:text-gray-50 pb-6">Logseq and Anki. That's the tweet.</p>
              <p className="lg:text-sm text-gray-600">More will be added later.</p>
            </div>
          </div>
        </div>
    </Container>
  );
}

export default About;
