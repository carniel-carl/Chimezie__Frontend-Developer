import React from "react";
import capsule from "./../assets/images/capsule-image.jpeg";

const Banner = () => {
  return (
    <section className="w-full md:h-[690px] text-white md:pl-[48px] flex flex-col-reverse md:flex-row gap-10 md:items-center text-center md:text-left mt-[80px] md:mt-10 pb-10 md:pb-0">
      <article className="flex-1  px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl leading-[50px] md:leading-[84px] mb-40">
          Launching Innovation, Propelling the Future 🚀
        </h1>
        <p className="leading-[30px] md:leading-[38px] w-full md:w-2/3 mb-40">
          We design, manufacture, and launch advanced rockets and spacecraft
          that redefine the boundaries of exploration.
        </p>
        <a
          href="#main"
          aria-label="explore"
          className="relative px-4 py-3 border border-solid border-white w-[204px] h-[48px] text-center inline-block transition-all hover:text-black overflow-hidden before:absolute before:bg-white before:inset-0 before:w-full before:h-full before:-translate-x-full  before:transition-all before:-z-10 hover:before:translate-x-0"
        >
          Explore
        </a>
      </article>
      <article className="md:flex-1 ">
        <img
          src={capsule}
          alt="capsule"
          aria-label="capsule image"
          className="w-full scale-90 md:scale-[135%]"
        />
      </article>
    </section>
  );
};

export default Banner;
