import React, { useEffect, useState } from "react";
import Table from "./Table";
import "./App.css";
import { getUserListApiCall } from "./apis";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    getUserList();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(projects.length / recordsPerPage);

  const getUserList = async () => {
    const res = await getUserListApiCall();
    if (res && res.length > 0) {
      setProjects(res);
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>Kickstarter Projects</h1>
      <Table projects={currentRecords} />
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePagination(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
