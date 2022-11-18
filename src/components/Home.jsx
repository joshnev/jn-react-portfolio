import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-400">
          <div className="inline sm:text-4xl ">👋</div> Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200">
          Joshua Nevard,
        </h1>
        <h2 className="text-4xl sm:text-7xl text-gray-400">
          who's a Developer.
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          I'm a front end Developer that focuses on building responsive web
          applications, with the latest code technology.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-[#004aad] hover:border-[#004aad] rounded">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              {/* <HiArrowRight className='ml-2' /> */}
              <div className="ml-2 mb-2">
                <Link to="work" smooth={true} duration={500}>
                  👉
                </Link>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
