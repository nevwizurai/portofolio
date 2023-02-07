import React from "react";
import Home from "./components/Home.section";
import Skill from "./components/Skill.section";

const App = () => {
  return (
    <main className="flex flex-col gap-y-7">
      <Home />
      <Skill />
    </main>
  );
};

export default App;
