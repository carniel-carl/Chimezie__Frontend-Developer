import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const Pagination = ({ perPage, totalPage, setCurrentPage, currentPage }) => {
  const [displayPage, setDisplayPage] = useState({
    start: 1,
    end: 5,
  });

  const [activeButton, setActiveButton] = useState(currentPage);

  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumbers.push(i);
  }

  const clickHandler = (number) => {
    setCurrentPage(number);
    setActiveButton(number);
    setDisplayPage({ start: number, end: 4 + number });
  };

  const directionHandler = (direction) => {
    switch (direction) {
      case "prev":
        if (currentPage <= 1) {
          return;
        } else {
          setCurrentPage((prev) => prev - 1);
          setActiveButton((prev) => prev - 1);
          setDisplayPage((prev) => ({
            start: prev.start - 1,
            end: prev.end - 1,
          }));
        }
        break;

      case "next":
        if (currentPage >= pageNumbers.length - 1) {
          return;
        } else {
          setCurrentPage((prev) => prev + 1);
          setActiveButton((prev) => prev + 1);
          setDisplayPage((prev) => ({
            start: prev.start + 1,
            end: prev.end + 1,
          }));
        }
        break;
    }
  };

  const pageHandler = (dir) => {
    switch (dir) {
      case "older":
        if (currentPage < 1) {
          return;
        }
        setDisplayPage((prev) => ({
          start: 1,
          end: 4,
        }));

        setCurrentPage(1);
        setActiveButton(1);
        break;

      case "newer":
        if (displayPage.end >= pageNumbers.length) {
          return;
        }
        setDisplayPage((prev) => ({
          start: pageNumbers.length - 4,
          end: pageNumbers.length,
        }));
        setCurrentPage(pageNumbers.length - 4);
        setActiveButton(pageNumbers.length - 4);

        break;
    }
  };

  return (
    <nav className="mx-auto w-full md:w-1/3 mt-10">
      {/* pagination buttons */}
      <ul className="flex gap-1 flex-wrap items-center justify-center">
        <li>
          <a
            href="#main"
            onClick={() => directionHandler("prev")}
            className={`w-[40px] md:w-[60px] h-[24px] md:h-[32px] grid items-center justify-center select-none ${
              currentPage === 1
                ? " bg-slate-100 text-white pointer-events-none cursor-not-allowed"
                : " bg-slate-200"
            }  rounded-tl rounded-bl`}
          >
            <MdKeyboardDoubleArrowLeft />
          </a>
        </li>
        {pageNumbers.slice(displayPage.start, displayPage.end).map((number) => (
          <li key={number}>
            <a
              href="#main"
              onClick={() => clickHandler(number)}
              className={`w-[40px] md:w-[60px] h-[24px] md:h-[32px] select-none grid items-center justify-center ${
                activeButton === number ? "bg-black text-white" : "bg-slate-200"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#main"
            onClick={() => directionHandler("next")}
            className={`w-[40px] md:w-[60px] h-[24px] md:h-[32px] select-none ${
              currentPage === pageNumbers.length - 1
                ? " bg-slate-100 text-white cursor-not-allowed pointer-events-none"
                : " bg-slate-200"
            } grid items-center justify-center rounded-tr rounded-br`}
          >
            <MdKeyboardDoubleArrowRight />
          </a>
        </li>
      </ul>

      {/* older and newer buttons */}
      <ul className="w-full flex justify-between mt-4">
        <li>
          <a
            href="#main"
            onClick={() => pageHandler("older")}
            className={`w-[100px] md:w-[150px] h-[30px] md:h-[30px] select-none flex gap-2 justify-center rounded-full ${
              displayPage.start === 0
                ? " bg-black text-white disabled:cursor-not-allowed"
                : " border border-black"
            }`}
          >
            <span>
              <CgArrowLongLeft className="inline" />
            </span>
            <span>Older</span>
          </a>
        </li>
        <li className="w-max">
          <a
            href="#main"
            onClick={() => pageHandler("newer")}
            className={`w-[100px] md:w-[150px] h-[30px] md:h-[30px] select-none flex gap-2 justify-center rounded-full ${
              currentPage === pageNumbers.length
                ? " bg-black text-white disabled:cursor-not-allowed"
                : " border border-black"
            } `}
          >
            <span>Newer</span>
            <span>
              <CgArrowLongRight className="inline" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
