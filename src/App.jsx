import React from "react";
import Contact from "./components/Contact.section";
import Home from "./components/Home.section";
import Project from "./components/Project.section";
import Skill from "./components/Skill.section";

const App = () => {
  return (
    <main className="flex flex-col gap-y-10 px-5">
      <Home />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
};

export default App;
