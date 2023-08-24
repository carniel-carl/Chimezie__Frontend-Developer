import React from "react";

const Card = ({ data }) => {
  return (
    <section className="w-full h-[200px] md:w-[318px] md:h-[350px] bg-pink-300">
      {data.title} {data.id}
    </section>
  );
};

export default Card;
