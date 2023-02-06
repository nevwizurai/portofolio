import React from "react";
import ImgMe from "../img/me.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Home = () => {
  return (
    <section className="min-h-screen">
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

      {/* Greeting */}
      <div className="my-5">
        {/* Text */}
        <div className="text-center mb-5">
          <small className="text-sm text-gray-500 italic">Hello, my name is</small>
          <h2 className="text-xl font-bold leading-7">Nevir Wizurai Sabilillah</h2>
          <p className="text-sm text-gray-500">Frontend developer</p>
        </div>

        {/* Picture */}
        <div className="w-5/6 mx-auto my-10 bg-gradient-to-br from-green-400 rounded-full overflow-hidden">
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
    </section>
  );
};

export default Home;
