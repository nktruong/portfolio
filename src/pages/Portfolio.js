function Portfolio() {
  return (
    <>
      <div className="grid place-items-center min-h-screen mb-36 animate-fade-in-down">
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
          <h1 className="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
            <span className="md:col-span-2 bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-transparent bg-clip-text caret-pink-600">My Projects</span>
          </h1>
          <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg lg:text-xl text-green-800">
            A delightful mix of front-end and full-stack apps: ranging from a
            coffee shop POS system, a quackular (duck bachelor) app, and more!
          </p>
          <div className="h-16 bg-blue-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1  p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
            <a href="/" target="_blank" rel="noreferrer">
              Java House (coming soon)
            </a>
            </h3>
          </div>
          <div className="h-16 bg-purple-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
              <a href="https://cookdeck.herokuapp.com" target="_blank" rel="noreferrer">
              - FEATURED - Cook Deck
              </a>
            </h3>
            
          </div>
          <div className="h-16 bg-pink-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
            <a href="https://jeon-feed-nktruong.netlify.app/" target="_blank" rel="noreferrer">
              Jeon's News Feed
            </a>
            </h3>
          </div>
          <div className="h-16 bg-blue-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 md:col-start-2 p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
            <a href="/" target="_blank" rel="noreferrer">
              Starducks(coming soon)
            </a>
            </h3>
          </div>
          <div className="h-16 bg-pink-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
            <a href="https://lvl-ground-nktruong.netlify.app/" target="_blank" rel="noreferrer">
              Level Ground Replica
            </a>
            </h3>
          </div>
          <div className="h-16 bg-blue-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 p-3">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
              ... and many more to come!
            </h3>
          </div>
          <div className="h-16 bg-blue-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
            <a href="https://fizzbuzz-nktruong.netlify.app/" target="_blank" rel="noreferrer">
              Fizzbuzz: Animated Edition
            </a>
            </h3>
          </div>
          <div className="h-16 bg-pink-500 xs:h-auto xs:aspect-w-1 xs:aspect-h-1 p-3 transform hover:scale-105 transition ease-in duration-150">
            <h3 className="flex justify-center items-center text-center min-h-full text-gray-50 text-2xl font-semibold">
            <a href="https://nathantruong.netlify.app/" target="_blank" rel="noreferrer">
              My Portfolio (you're on it!)
            </a>
            </h3>
          </div>
          <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4 text-green-800">
            <em className="italic">Hover</em> over a box to see how it was built with. <em className="italic">Click</em> on one to go
            to their respective demo site.
          </p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;