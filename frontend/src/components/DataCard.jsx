import React from "react";
import Card from "./UI/Card";

const DataCard = ({ datas }) => {
  return (
    <ul className="cards grid sm:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 justify-center">
      {datas.map((data, i) => (
        <li key={i}>
          <Card data={data} />
        </li>
      ))}
    </ul>
  );
};

export default DataCard;
