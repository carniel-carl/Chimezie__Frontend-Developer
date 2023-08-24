import React from "react";
import Card from "./UI/Card";

const arr = Array.from({ length: 12 });

const DataGrid = () => {
  return (
    <section className="bg-white text-black p-[10px] md:p-[48px] min-h-screen">
      <ul className="cards grid grid-cols-2 md:grid-cols-4  gap-3 md:gap-5 justify-center">
        {arr.map((_, i) => (
          <li key={i}>
            <Card />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DataGrid;
