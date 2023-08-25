import React, { useState } from "react";
import Card from "./UI/Card";
import Modal from "./UI/Modal";

const DataCard = ({ datas }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ul className="cards grid sm:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 justify-center">
      {datas.map((data, i) => (
        <li key={i} onClick={() => setShowModal(true)}>
          <Card data={data} />
        </li>
      ))}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </ul>
  );
};

export default DataCard;
