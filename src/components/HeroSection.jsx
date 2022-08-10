import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 ml:text-red-400 text-indigo-600 dark:text-indigo-500">Hi, This is Fardhan</h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti a ratione repudiandae blanditiis facilis consectetur autem, reprehenderit nihil labore possimus aut, cum delectus impedit cumque iure? Quos, fugit
          accusamus?
        </p>
        <a href="#works" className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 md:text-md">
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
