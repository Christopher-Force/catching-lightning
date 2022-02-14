import ReactPlayer from "react-player"

export default function Content () {
    return (
        <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-green-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Featured Work</h1>
        <p class="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">Give 1-3 quick sentences here.</p>
      </div>
    </div>
    <div>
        <h1 className="text-white">Latest Releases</h1>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/2 w-full sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
            
                <ReactPlayer
                url="https://youtu.be/g7sepC_X8fU"
                controls
                height="100%"
                width="100%"
                />
           
        </div>
        <h2 class="text-xl font-medium title-font text-white mt-5">Catching Lightning - Nobody</h2>
        <p class="text-white leading-relaxed mt-2">Description here</p>
        <a href="/" class="text-green-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/2 w-full sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
        
                <ReactPlayer
                url="https://youtu.be/vnWXIbuH9mc"
                controls
                height="100%"
                width="100%"
                />
        
        </div>
        <h2 class="text-xl font-medium title-font text-white mt-5">Zedd, Kesha - True Colors (Catching Lightning Remix)</h2>
        <p class="text-white leading-relaxed mt-2">Description Here</p>
        <a href="/" class="text-green-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        
      </div>
      <div>
        
    </div>
      <div className="w-full px-4">
      <h1 className="text-white">Live Mix Demo</h1>
        <ReactPlayer
                url="https://www.mixcloud.com/catchinglightning/club-mix-jan-9-2022-live-on-jetstream-radio/"
                controls
                height="100%"
                width="100%"
        />
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
