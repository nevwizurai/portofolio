import React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
    <section className="px-5">
      <div className="mb-3">
        <h2 className="font-medium text-lg leading-4">My Skills</h2>
        <small className="italic text-gray-500">Here's a brief lists of technologies I've used...</small>
      </div>

      <div className="border border-black p-2 rounded-lg">
        <div className="px-2 py-1 font-medium text-lg">Frontend</div>
        <div className="flex flex-wrap w-full justify-center mt-2">
          <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            <FaReact className="inline" /> ReactJS
          </span>
          <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            <AiFillHtml5 className="inline" /> HTML
          </span>
          <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
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
    </section>
  );
};

export default Skill;
