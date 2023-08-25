import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

const api = "https://api.spacexdata.com/v3/capsules";

const Selector = () => {
  const [datas, setDatas] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        let uniqueChars = [];
        data.forEach((dat) => {
          if (!uniqueChars.includes(dat.status)) {
            uniqueChars.push(dat.status);
          }
        });
        setDatas(uniqueChars);
      });
  }, []);

  return (
    <div className="w-[200px]">
      <div
        className="bg-black  p-2 flex items-center justify-between rounded "
        onClick={() => setOpen(!open)}
      >
        <span className="capitalize">
          {selected ? selected : "Filter Status"}
        </span>
        <BiChevronDown size={20} />
      </div>
      <ul
        className={`bg-slate-400 ${
          open ? "max-h-100 block" : "max-h-0 hidden"
        } mt-2`}
      >
        {datas.map((data) => (
          <li
            key={data}
            className="p-2 text-sm capitalize hover:bg-cyan-600 hover:text-white"
            onClick={() => {
              data !== selected && setSelected(data);
              setOpen(false);
            }}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
