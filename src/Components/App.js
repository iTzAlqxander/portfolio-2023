import { Link } from 'react-scroll';

function App() {
  return (
    <div className="flex justify-end">
      <Link
        to="About"
        smooth={true}
        duration={500}
        className="font-abc font-light hover:text-[#10D190] text-white font-bold py-2 px-4 rounded"
      >
        <span className="text-[#10D190]">00.</span> About
      </Link>
      <Link
        to="Projects"
        smooth={true}
        duration={500}
        className="font-abc font-light hover:text-[#10D190] text-white font-bold py-2 px-4 rounded mx-2"
      >
        <span className="text-[#10D190]">01.</span> Projects
      </Link>
      <Link
        to="Experience"
        smooth={true}
        duration={500}
        className="font-abc font-light hover:text-[#10D190] text-white font-bold py-2 px-4 rounded"
      >
        <span className="text-[#10D190]">02.</span> Experience
      </Link>
      <Link
        to="Contact"
        smooth={true}
        duration={500}
        className="font-abc font-light hover:text-[#10D190] text-white font-bold py-2 px-4 rounded mx-2"
      >
        <span className="text-[#10D190]">03.</span> Contact
      </Link>
      
    </div>
  );
}

export default App;
