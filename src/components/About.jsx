import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl inline border-b-4 border-yellow-500 text-gray-300">
              ❮ About ❯
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold">
            <p className="text-gray-200">
              Hey, my name is Joshua.
              <br /> Please feel free to explore my website.
            </p>
          </div>
          <div>
            <p className="text-gray-400">
              I am obsessed with all things code, more specifically web
              development code.
              <br></br>
              My interests and expertise lies in problem solving clients and
              indivuals web application needs.
              <br></br> Check out my work below.<br></br>
              My favourite stack to use is React/Next js and Tailwind.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
