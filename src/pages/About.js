function About(){
  return (
    <div className="max-w-5xl pb-64 mx-auto animate-fade-in-down">
      <h1 className="lg:text-6xl text-4xl font-semibold from-green-900 via-green-700 to-yellow-300 text-transparent bg-clip-text caret-pink-600 bg-gradient-to-br dark:from-purple-500 dark:via-purple-400 dark:to-fuchsia-100 pt-20 pb-10">Who am I?</h1>
      <p className="text-2xl font-medium text-gray-800 dark:text-gray-50 leading-relaxed">I play a lot of Minecraft and also do full-stack software development. I have been working at <a href="https://resilientcoders.org" target="_blank" rel="noreferrer" aria-label="Resilient Coders"><span className="text-red-600 font-semibold">Resilient Coders</span></a> for the past couple of months as a Software Engineer. I've worked design gigs in the past like at MDA Let's Play being a freelance graphic designer. So naturally, when learning to be a developer I stumbled upon a treasure trove once I understood CSS.</p>
      
      {/* TECH STACK */}
      <div class="my-16">
        <h2 className="lg:text-4xl text-green-600 dark:text-indigo-200 font-semibold my-8">My Tech Stack</h2>
        <div className="lg:text-2xl dark:text-gray-50 font-light">
          <p className="leading-relaxed pb-4">
            <span class="font-medium text-green-900">Front-end: </span>
            React, TailwindCSS, CSS3, and HTML5.
            <p class="font-normal text-xl text-gray-800">All of what you're seeing right now.</p>
          </p>
          <p className="leading-relaxed pb-4"><span class="font-medium text-green-900">Back-end:</span> EJS, Node.js, Express, MongoDB. <p className="font-normal text-xl text-gray-800">What powers what's going behind the scenes.</p></p>
        </div>
      </div>

      {/* MINECRAFT MODS */}
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

      {/* SOFTWARE/GEAR */}
      <h2 className="lg:text-4xl text-green-600 dark:text-indigo-200 font-semibold my-8">The Software And Gear That I Use</h2>
      <p className="lg:text-2xl dark:text-gray-50 pb-6">Logseq and Anki. That's the tweet.</p>
      <p className="lg:text-sm text-gray-600">More will be added later.</p>


    </div>
  );
}

export default About;