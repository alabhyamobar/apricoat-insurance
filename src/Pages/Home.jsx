import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Home = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className='w-full  h-screen bg-[url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop")] bg-cover bg-center'
    >
      <div className="w-full h-full flex flex-col justify-center p-6 sm:p-10 md:p-20 bg-blue-500/60">
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-bold text-white pb-4 mt-10 sm:pb-5">
          <TypeAnimation
            sequence={["Apricoat Insurance", 3000, "", 2000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white pb-4 sm:pb-5">
          An Insurance for every possibility.
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-white pb-6 max-w-xl">
          Specialized insurance solutions for marine, fire, and more. Get peace
          of mind with Apricoat's comprehensive coverage options.
        </p>
        <Link to="/apricoat-insurance/quotes">
          <button className="w-40 h-12 bg-orange-500 text-white font-bold text-lg rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">
            Get Quotes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
