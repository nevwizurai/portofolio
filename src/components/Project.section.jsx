import React from "react";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../img/project/etch_a_sketch.jpg";
import img2 from "../img/project/rock_paper_scissor.jpg";
import img3 from "../img/project/landing_page.jpg";
import img4 from "../img/project/student_management.jpg";

const responsive = {
  "2xl": {
    breakpoint: { max: 2560, min: 1536 },
    items: 4,
  },
  xl: {
    breakpoint: { max: 1536, min: 1280 },
    items: 3,
  },
  lg: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 320 },
    items: 1,
  },
};

const Project = () => {
  return (
    <section className="px-2 md:px-7">
      <div className="xl:w-3/4 xl:mx-auto">
        <div className="mb-3">
          <h2 className="font-medium text-lg lg:text-2xl leading-4">My Projects</h2>
          <small className="italic text-gray-500 lg:text-lg">My past and currently work-in-progress projects...</small>
        </div>

        {/* Cards container */}
        <div className="px-5">
          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={6000} showDots={true}>
            <Item
              image={img1}
              name="Etch-a-Sketch"
              desc="A miniature of etch-a-sketch game that lets user draw in a pixel-like layout"
              repo_link={"https://github.com/nevwizurai/Etch-a-Sketch"}
              live_link={"https://nevwizurai.github.io/Etch-a-Sketch"}
              finished
            />
            <Item
              image={img2}
              name="Rock, Paper, Scissor"
              desc="Play rock paper scissor against computer with this Javascript-based game"
              repo_link={"https://github.com/nevwizurai/rock_paper_scissor"}
              live_link={"https://nevwizurai.github.io/rock_paper_scissor"}
              finished
            />
            <Item
              image={img3}
              name="Landing Page"
              desc="A landing page website made using plain HTML, and CSS"
              repo_link={"https://github.com/nevwizurai/landing_page"}
              live_link={"https://nevwizurai.github.io/landing_page"}
              finished
            />
            <Item
              image={img4}
              name="Student Management"
              desc="Crud application to manage students data using MERN stack"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const Item = ({ image, name, desc, repo_link, live_link, finished }) => {
  return (
    <div className="min-h-[200] w-full sm:w-2/3 lg:w-[95%] mx-auto rounded-xl shadow-mdoverflow-hidden p-1 bg-white border border-gray-200">
      <img className="object-cover object-top w-full h-48 rounded-xl" src={image} alt="project thumbnail" />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">{name}</h4>
        <p className="mb-2 leading-normal">{desc}</p>
        {finished ? (
          <div className="flex gap-x-3 justify-center">
            <a href={repo_link} target="_blank" className="px-4 py-2 text-sm text-white bg-gray-800 rounded shadow">
              <AiOutlineGithub className="inline" /> View on Github
            </a>
            <a href={live_link} target="_blank" className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow">
              <AiOutlineEye className="inline" /> Live preview
            </a>
          </div>
        ) : (
          <div>
            <span className="px-4 py-2 text-sm text-white bg-yellow-400 rounded shadow cursor-wait">
              <CgSandClock className="inline" /> Work in progress...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
