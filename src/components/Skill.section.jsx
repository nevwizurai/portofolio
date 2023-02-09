import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillHtml5, AiFillApi, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiPhotoshop } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiExpress, SiJsonwebtokens, SiMongodb, SiAdobexd } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skill = () => {
  return (
    <section className="px-2 py-5 md:px-7">
      <div className="xl:w-3/4 xl:mx-auto">
        <div className="mb-3">
          <h2 className="font-medium text-lg lg:text-2xl leading-4">My Skills</h2>
          <small className="italic text-gray-500 lg:text-lg">Here's a brief lists of technologies I've used...</small>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2 w-full">
          {/* Frontend */}
          <div className="border border-black p-2 rounded-lg sm:w-1/2 lg:w-1/4">
            <div className="px-2 pb-1 font-medium text-lg">Frontend</div>
            <div className="flex flex-wrap w-full justify-center mt-2">
              <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <FaReact className="inline" /> ReactJS
              </span>
              <span className="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <AiFillHtml5 className="inline" /> HTML
              </span>
              <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <DiCss3 className="inline" /> CSS
              </span>
              <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <SiJavascript className="inline" /> Javascript
              </span>
              <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <SiTailwindcss className="inline" /> Tailwind
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="border border-black p-2 rounded-lg sm:w-1/2 lg:w-1/4">
            <div className="px-2 pb-1 font-medium text-lg">Backend</div>
            <div className="flex flex-wrap w-full justify-center mt-2">
              <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <FaNodeJs className="inline align-middle" /> NodeJS
              </span>
              <span className="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <SiExpress className="inline" /> Express
              </span>
              <span className="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <SiJsonwebtokens className="inline" /> JWT
              </span>
              <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <AiFillApi className="inline" /> REST Api
              </span>
            </div>
          </div>

          {/* Database */}
          <div className="border border-black p-2 rounded-lg sm:w-1/2 lg:w-1/4">
            <div className="px-2 pb-1 font-medium text-lg">Database</div>
            <div className="flex flex-wrap w-full justify-center mt-2">
              <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <SiMongodb className="inline align-middle" /> MongoDB
              </span>
              <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <GrMysql className="inline" /> MySQL
              </span>
            </div>
          </div>

          {/* Misc */}
          <div className="border border-black p-1 rounded-lg sm:w-1/2 lg:w-1/4">
            <div className="px-2 pb-1 font-medium text-lg">Other...</div>
            <div className="flex flex-wrap w-full justify-center mt-2">
              <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <AiFillGithub className="inline align-middle" /> Git / Github
              </span>
              <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <DiPhotoshop className="inline" /> Photoshop
              </span>
              <span className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                <SiAdobexd className="inline" /> Adobe Xd
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
