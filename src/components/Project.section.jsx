import React from "react";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";

import img1 from "../img/project/etch_a_sketch.jpg";

const Project = () => {
  return (
    <section className="">
      <div className="mb-3">
        <h2 className="font-medium text-lg leading-4">My Projects</h2>
        <small className="italic text-gray-500">My past and currently work-in-progress experience...</small>
      </div>

      {/* Cards container */}
      <div>
        <Item
          image={img1}
          name="Etch-a-Sketch"
          desc="A miniature of etch-a-sketch game that lets user draw in a pixel-like layout"
          repo_link={"https://github.com/nevwizurai/Etch-a-Sketch"}
          live_link={"https://nevwizurai.github.io/Etch-a-Sketch"}
        />
      </div>
    </section>
  );
};

const Item = ({ image, name, desc, repo_link, live_link }) => {
  return (
    <div className="min-h-[200] rounded-xl shadow-mdoverflow-hidden p-1 bg-white border border-gray-200">
      <img className="object-cover object-top w-full h-48 rounded-xl" src={image} alt="project thumbnail" />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">{name}</h4>
        <p className="mb-2 leading-normal">{desc}</p>
        <div className="flex gap-x-3">
          <a href={repo_link} target="_blank" className="px-4 py-2 text-sm text-white bg-gray-800 rounded shadow">
            <AiOutlineGithub className="inline" /> View on Github
          </a>
          <a href={live_link} target="_blank" className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow">
            <AiOutlineEye className="inline" /> Live preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
