import React from "react";

const Intro = () => {
  return (
    <section className="px-2 mt-10">
      <div className="flex  flex-col gap-y-5">
        <h2 className="font-semibold text-xl underline text-center">A Little Bit About Myself</h2>
        <p className="leading-5 text-justify tracking-tight italic">
          My name is Nevir Wizurai Sabilillah, I am a frontend developer mostly proficient in React and tailwind, but I
          do have a little experience with the backend as well.
        </p>
        <p className="leading-5 text-justify tracking-tight italic">
          I am a passionate person when it comes to programming. I also consider myself a goal-oriented person, being
          able to focus on one thing at a time, improving my overall effectiveness.
        </p>
      </div>
    </section>
  );
};

export default Intro;
