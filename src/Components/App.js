import { Link } from 'react-scroll';
import React, { useState } from 'react';

function App() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => setShowLinks(!showLinks);
  return (
    <div>
       <nav className="flex items-center flex-wrap bg-[#08071F] p-6">
      <div className="block lg:hidden justify-end">
        <button
          className="flex  items-center px-3 py-2 border rounded text-white border-white hover:text-[#10D190] hover:border-[#10D190]"
          onClick={handleToggle}
        >
          <svg
            className="fill-current h-3 w-3 justify-end ml-auto"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showLinks ? 'block' : 'hidden'
        } w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-start`}
      >
        <div className="text-sm lg:flex-grow lg:text-right">
          <Link
            to="About"
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#10D190] font-abc font-light mr-4"
            onClick={() => setShowLinks(false)}
          >
            <span className="text-[#10D190]">00.</span> About
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#10D190] font-abc font-light mr-4"
            onClick={() => setShowLinks(false)}
          >
            <span className="text-[#10D190]">01.</span> Projects
          </Link>
          <Link
            to="Experience"
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#10D190] font-abc font-light mr-4"
            onClick={() => setShowLinks(false)}
          >
            <span className="text-[#10D190]">02.</span> Experience
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#10D190] font-abc font-light mr-4"
            onClick={() => setShowLinks(false)}
          >
            <span className="text-[#10D190]">03.</span> Contact
          </Link>
        </div>
      </div>
    </nav>
    </div>
   
  );
}

export default App;
