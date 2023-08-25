import React from "react";

const Card = ({ data }) => {
  return (
    <section className="w-full h-[200px] md:w-[318px] md:h-[350px] bg-slate-400 text-white rounded">
      {data.details} {data.capsule_serial}
    </section>
  );
};

export default Card;
