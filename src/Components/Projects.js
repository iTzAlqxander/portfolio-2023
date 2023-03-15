function Projects() {
    return (
      <div className="bg-black-700 h-screen">

      <h1 id="Projects" className="text-2xl font-abc font-medium text-[#10D190] mt-8 mb-4 md:mb-8">01. Projects</h1>
      <div className="relative">
      {/* Box with image */}
      <div className="w-full md:w-1/2 md:h-auto bg-gray-200 rounded-lg overflow-hidden ml-32">
        <img
          className="w-full h-full object-cover object-center"
          src="https://source.unsplash.com/random/1080x600"
          alt="Random"
        />
      </div>

      {/* Overlapping rectangle for text */}
      <div className="absolute top-1/3 right-0 transform md:w-1/3 md:h-1/3 bg-white rounded-lg p-4 shadow-lg mr-32">
        <p className="text-gray-700">
          EasyMeal is an app that provides healthy recipes based off of what is available in your pantry.
        </p>
      </div>
      
    </div>
    <div className="mb-16"></div>
    <div className="relative">
      {/* Box with image */}
      <div className="w-full md:w-1/2 md:h-auto bg-gray-200 rounded-lg overflow-hidden ml-32">
        <img       
          className="w-full h-full object-cover object-center"
          src="https://source.unsplash.com/random/1080x600"
          alt="Random"
        />
      </div>

      {/* Overlapping rectangle for text */}
      <div className="absolute top-1/3 right-0 transform md:w-1/3 md:h-1/3 bg-white rounded-lg p-4 shadow-lg mr-32">
        <p className="text-gray-700">
          EasyMeal is an app that provides healthy recipes based off of what is available in your pantry.
        </p>
      </div>
      
    </div>
    
      </div>
    );
  }
  
  export default Projects;
  