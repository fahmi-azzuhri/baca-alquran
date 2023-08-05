import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import QuranCard from "../component/QuranCard";
import NavBar from "../component/NavBar";

const ITEMS_PER_PAGE = 15; // Change this value as desired

const Home = () => {
  const [dataQuran, setDataQuran] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ALL_SURAH}`)
      .then((response) => {
        setDataQuran(response.data.data);
      })
      .catch((err) => {
        alert("Error occurred while fetching data", err);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = dataQuran.filter(
    (surah) =>
      surah.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.namaLatin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(firstIndex, lastIndex);

  if (!dataQuran || dataQuran.length === 0) {
    return <p>Loading...</p>; // You can show a loading message or spinner here
  }

  return (
    <Container>
      <NavBar
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />

      <Row className="mb-3">
        <h1 className="text-center">ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</h1>
      </Row>
      <Row>
        {currentItems.map((surah) => (
          <div key={surah.nomor}>
            <QuranCard surah={surah} />
          </div>
        ))}
      </Row>
      <div>
        {/* Pagination */}
        {filteredData.length > ITEMS_PER_PAGE && (
          <ul className="pagination align-items-center justify-content-center">
            {Array.from({
              length: Math.ceil(filteredData.length / ITEMS_PER_PAGE),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <Button
                  className="page-link mt-3"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default Home;
