import React from "react";
import ImgMe from "../img/me.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Home = () => {
  return (
    <section className="px-2">
      {/* Navbar */}
      <nav>
        <div className="flex justify-between items-center py-3">
          <h1 className="font-caveat text-3xl font-bold">nevwizurai</h1>
          <a
            className="transition hover:scale-110 ease-linear bg-gradient-to-r hover:from-blue-700 from-cyan-500 to-yellow-300 px-2 py-1 rounded-lg text-white font-medium"
            href="#"
          >
            My CV
          </a>
        </div>
      </nav>

      {/* Main Container */}
      <div className="lg:flex lg:justify-center">
        {/* Greeting */}
        <div className="my-5 px-2 lg:w-1/2">
          {/* Text */}
          <div className="text-center mb-5">
            <small className="text-sm text-gray-500 italic">Hello, my name is</small>
            <h2 className="text-xl font-bold leading-7">Nevir Wizurai Sabilillah</h2>
            <p className="text-sm text-gray-500">Frontend developer</p>
          </div>

          {/* Picture */}
          <div className="w-2/3 sm:w-1/2 mx-auto my-10 bg-gradient-to-br from-green-400 rounded-full overflow-hidden">
            <img src={ImgMe} alt="my picture" className="max-w-full h-auto" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-10 text-4xl text-gray-500">
            <a className=" hover:text-gray-800" href="https://github.com/nevwizurai" target={"_blank"}>
              <FaGithubSquare />
            </a>
            <a className=" hover:text-gray-800" href="https://www.linkedin.com/in/nevwizurai" target={"_blank"}>
              <AiFillLinkedin />
            </a>
            <a
              className=" hover:text-gray-800"
              href="https://www.facebook.com/profile.php?id=100082502372381"
              target={"_blank"}
            >
              <AiFillFacebook />
            </a>
          </div>
        </div>

        <div className="flex  flex-col gap-y-5 mt-10 px-3 sm:w-3/4 sm:mx-auto lg:w-1/2">
          <h2 className="font-semibold text-lg lg:text-xl bg-green-500 rounded-lg text-white text-center">
            A Little Bit About Myself
          </h2>
          <p className="leading-6 lg:text-lg text-justify tracking-tight italic">
            My name is Nevir Wizurai Sabilillah, I am a frontend developer{" "}
            <span className="underline">mostly proficient</span> in{" "}
            <span className="bg-blue-600 px-1 rounded py-0 text-white">React</span> and{" "}
            <span className="bg-green-600 px-1 rounded py-0 text-white">Tailwind</span>, but I do have a little
            experience with the backend as well.
          </p>
          <p className="leading-6 lg:text-lg text-justify tracking-tight italic">
            I am a <span className="font-semibold">passionate</span> person when it comes to programming. I also
            consider myself a <span className="font-semibold">goal-oriented</span> person, doing the best I can to
            ensure the completion effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
