function Featured(){
  return (
    <div className="mt-28 pb-52 lg:px-40 animate-fade-in-down">
      <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-4xl bg-gradient-to-br from-green-900 via-green-700 to-yellow-300 text-transparent bg-clip-text caret-pink-600 dark:from-purple-500 dark:via-purple-400 dark:to-fuchsia-100 font-bold mb-20">Featured: <span className="bg-gradient-to-br from-yellow-600 to-yellow-400 text-transparent bg-clip-text">Cook Deck</span></h1>
      <div className="text-green-800 text-2xl leading-relaxed font-medium">
        <p className="my-8 text-3xl px-20">Cook Deck is a global community where immigrants can share their recipes and <em className="italic">uncover</em> what they grew up with.</p>

        <p>You can check out it out <a href="https://cookdeck.herokuapp.com/" target="_blank" rel="noreferrer" className="font-semibold text-yellow-500">here</a>!</p>
        <p className="my-8">It is my own full-stack application built with <span className="font-semibold">Node.js/Express/Mongoose </span> for the back-end and <span className="font-semibold">TailwindCSS/EJS/JavaScript ES6+</span> for the front-end. There were many challenges and new functionality I learned through this process, and I hope to be able to share them with you!</p>

        <p className="my-8"> It also was my demo day project for Resilient Coders! We presented this project on the momentous day of <span className="font-semibold text-green-900 underline">December 2nd</span>. My demo day projects, as with my coworkers, are the culmination of the knowledge and experience we've gained for the past couple months at our company.</p>

        <p className="my-8">Many, if not all of these apps were built to aid the local community in some way, like mine with helping immigrants find their culture's food.</p>

        <p className="my-8">And we're proud to show it and our ideas to the world.</p>
        <p className="text-sm">This page will contain more information in the future about the project: challenges, tech stack, the file structure, etc.</p>
      </div>
    </div>
  )
}

export default Featured