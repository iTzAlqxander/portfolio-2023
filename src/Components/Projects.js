function Projects() {
    return (
      <div className="bg-black-700 h-screen lg:pl-48 lg:pr-48">

      <h1 id="Projects" className="text-2xl font-abc font-medium text-[#10D190] mt-8 mb-4 md:mb-8">01. Projects</h1>
      <div className="relative">
      {/* Box with image */}
      <div className="w-full md:w-3/4 md:h-auto bg-gray-200 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://source.unsplash.com/random/800x600"
          alt="Random"
        />
      </div>

      {/* Overlapping rectangle for text */}
      <div className="absolute top-1/3 right-0 transform md:w-1/3 md:h-1/3 bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Title of Text Box</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          gravida urna, id mattis lectus bibendum vitae. Nulla facilisi.
        </p>
      </div>
    </div>
      </div>
    );
  }
  
  export default Projects;
  