import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ perPage, totalPage, setCurrentPage, currentPage }) => {
  const [activeButton, setActiveButton] = useState(currentPage);
  const [disable, setDisable] = useState({
    previous: false,
    next: false,
  });

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumbers.push(i);
  }

  const clickHandler = (number) => {
    setCurrentPage(number);
    setActiveButton(number);
    setDisable({
      previous: false,
      next: false,
    });
  };

  const directionHandler = (direction) => {
    switch (direction) {
      case "prev":
        if (currentPage <= 1) {
          setDisable({ previous: !disable.previous });
        } else {
          setCurrentPage((prev) => prev - 1);
          setActiveButton((prev) => prev - 1);
          setDisable({ next: false });
        }
        break;

      case "next":
        if (currentPage >= pageNumbers.length) {
          setDisable({ next: !disable.next });
        } else {
          setCurrentPage((prev) => prev + 1);
          setActiveButton((prev) => prev + 1);
          setDisable({ previous: false });
        }
        break;
    }
  };

  return (
    <nav className="mx-auto w-50 mt-10">
      <ul className="flex gap-1 flex-wrap items-center justify-center">
        <li>
          <button
            type="button"
            onClick={() => directionHandler("prev")}
            disabled={disable.previous}
            className={`w-[40px] md:w-[60px] h-[24px] md:h-[32px]${
              currentPage === 1
                ? " bg-slate-100 text-white disabled:cursor-not-allowed"
                : " bg-slate-200"
            } grid items-center justify-center rounded-tl rounded-bl`}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => clickHandler(number)}
              className={`w-[40px] md:w-[60px] h-[24px] md:h-[32px]  grid items-center justify-center ${
                activeButton === number ? "bg-black text-white" : "bg-slate-200"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => directionHandler("next")}
            className="w-[40px] md:w-[60px] h-[24px] md:h-[32px] bg-slate-200 grid items-center justify-center rounded-tr rounded-br"
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
