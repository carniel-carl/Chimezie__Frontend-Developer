import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Pagination from "./UI/Pagination";

const api = "https://jsonplaceholder.typicode.com/posts";
// const api = "https://api.spacexdata.com/v3/capsules";

const DataGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(12);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = datas.slice(firstDataIndex, lastDataIndex);

  return (
    <section className="bg-white text-black p-[10px] md:p-[48px] min-h-screen">
      <DataCard datas={currentData} />
      <Pagination
        perPage={dataPerPage}
        totalPage={datas.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default DataGrid;
