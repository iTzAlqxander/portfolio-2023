function Projects() {
  return (
    <div className="bg-black-700 h-auto">
      <h1 id="Projects" className="text-2xl font-abc font-medium text-[#10D190] mb-16">01. Projects</h1>
      
      <div className="relative">
        {/* Box with image */}
        <div className="w-full md:w-1/2 md:h-auto bg-gray-200 rounded-lg overflow-hidden ml-32">
          <img
            className="w-full h-full object-cover object-center"
            src="../Project1.png"
            alt="Project 1"
          />
        </div>

        {/* Overlapping rectangle for text */}
        <div className="absolute top-1/3 right-0 transform md:w-1/3 md:h-1/3 bg-white rounded-lg p-4 shadow-lg mr-32 caption-box">
          <p className="text-gray-700">
            EasyMeal is an app that provides healthy recipes based off of what is available in your pantry.
          </p>
        </div>
      </div>

      {/*  Project 2 */}
      <div className="mb-16"></div>
      <div className="relative">
        {/* Box with image */}
        <div className="w-full md:w-1/2 md:h-auto ml-auto bg-gray-200 rounded-lg overflow-hidden mr-32">
          <img       
            className="w-full h-full object-cover object-center"
            src="/images/image2.jpg"
            alt="Project 2"
          />
        </div>

        {/* Overlapping rectangle for text */}
        <div className="absolute top-1/3 transform md:w-1/3 md:h-1/3 bg-white rounded-lg p-4 mr-auto shadow-lg ml-32 caption-box">
          <p className="text-gray-700">
            EasyMeal is an app that provides healthy recipes based off of what is available in your pantry.
          </p>
        </div>
      </div>
    
      {/*  Project 3 */}
      <div className="mb-16"></div>
      <div className="relative">
        {/* Box with image */}
        <div className="w-full md:w-1/2 md:h-auto bg-gray-200 rounded-lg overflow-hidden ml-32">
          <img
            className="w-full h-full object-cover object-center"
            src="/images/image3.jpg"
            alt="Project 3"
          />
        </div>

        {/* Overlapping rectangle for text */}
        <div className="absolute top-1/3 right-0 transform md:w-1/3 md:h-1/3 bg-white rounded-lg p-4 shadow-lg mr-32 caption-box">
          <p className="text-gray-700">
            EasyMeal is an app that provides healthy recipes based off of what is available in your pantry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
