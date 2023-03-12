function About() {
  return (
    <div className="bg-[#08071F] h-screen">
      <h1 id="About" className="text-2xl font-abc font-medium text-[#10D190] ml-4 md:ml-48 mt-8 mb-4 md:mb-8">00. About</h1>
      <div className="flex flex-row items-center justify-between ml-4 md:ml-48 mr-4 md:mr-48 mt-8 md:mt-32 mb-4 md:mb-8">
        <p className="text-lg font-abc font-light text-[#919EB0]">
          Hi! My name is Alexander Masztak and I love creating websites, mobile applications, and various other things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>
        <img src="me.png" className="ml-8 w-32 md:w-48 lg:w-64" alt="your-image-description-here" />
      </div>
    </div>
  );
}

export default About;
