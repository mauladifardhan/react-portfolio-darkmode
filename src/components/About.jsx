import React from "react";
import SectionTitle from "./SectionTitle";
import avatar from "../../public/img/fardhan.jpg";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit impedit quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat accusantium esse animi amet tempore nam impedit perspiciatis tenetur. In vel
          deleniti sint saepe quas nam obcaecati odio nulla nisi rem! Fugit, facere excepturi minima est id veniam a aspernatur. Quis.
        </p>
        <a href="mailto:fardhan16@gmail.com" className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500">
          fardhan16@gmail.com
        </a>
      </div>
      <img src={avatar} alt="fardhan mauladi" className="w-3/5 md:w-6/12 rounded-lg object-cover"></img>
    </div>
  );
}

export default About;
