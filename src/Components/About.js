function About() {
  return (
    <div className="bg-[#08071F] h-screen lg:pl-48 lg:pr-48">
      <h1 id="About" className="text-2xl font-abc font-medium text-[#10D190] mt-8 mb-4 md:mb-8">00. About</h1>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-32 mb-4 md:mb-8">
        <img src="me.png" className="w-32 md:w-48 lg:w-64 mb-8 md:mb-0 md:order-last" alt="your-image-description-here" />
        <p className="text-base md:text-lg font-abc font-light text-[#919EB0]">
          Hi! My name is Alexander Masztak and I love creating websites, mobile applications, and various other things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>
      </div>
    </div>
  );
}

export default About;