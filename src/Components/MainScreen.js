import { TypeAnimation } from 'react-type-animation';

function MainScreen() {
  return (
    <div className="bg-[#08071F] h-screen">
      <h1 className="text-2xl font-abc font-medium text-[#10D190] phone-mt-16 laptop:mt-32 tablet:mt-32 mt-16 md:mt-32 md:mb-8 tablet:mb-8 mb-8" >Hi, my name is</h1>
      <h1 className="text-4xl md:text-6xl font-abc font-bold text-[#BDD4E7] tablet:mb-8 mb-8 md:mb-8">Alexander Masztak</h1>
      <h1 className="text-3xl md:text-5xl font-abc font-bold text-[#919EB0] mb-8 md:mb-8">
        I create <span className=" font-bold">
          <TypeAnimation
            sequence={[
              "Websites",
              4000,
              "Mobile Apps",
              4000,

              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>
      </h1>

      <p className="text-base font-abc text-white text-[#919EB0]">
        Currently, I am a student at{' '}
        <span className="text-[#10D190]"> Illinois State University</span>
        <br /> majoring in Computer Science - General. I focus on creating
        <br /> websites and mobile applications.
      </p>
    </div>
  );
}


export default MainScreen;
