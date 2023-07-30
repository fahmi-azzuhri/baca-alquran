import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import QuranCard from "../component/QuranCard";

const ITEMS_PER_PAGE = 7; // Change this value as desired

const Home = () => {
  const [dataQuran, setDataQuran] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ALL_SURAH}`)
      .then((response) => {
        setDataQuran(response.data.data);
      })
      .catch((err) => {
        console.log("Error occurred while fetching data", err);
      });
  }, []);

  // Function to handle pagination and update current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index of the first and last item of the current page
  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;

  // Slice the dataQuran array to get only the items for the current page
  const currentItems = dataQuran.slice(firstIndex, lastIndex);

  // Add a conditional check to ensure dataQuran is available before rendering
  if (!dataQuran || dataQuran.length === 0) {
    return <p>Loading...</p>; // You can show a loading message or spinner here
  }

  return (
    <Container>
      <Row>
        {currentItems.map((surah) => (
          <div key={surah.nomor}>
            <QuranCard surah={surah} />
          </div>
        ))}
      </Row>
      <div>
        {/* Pagination */}
        {dataQuran.length > ITEMS_PER_PAGE && (
          <ul className="pagination align-items-center justify-content-center">
            {Array.from({
              length: Math.ceil(dataQuran.length / ITEMS_PER_PAGE),
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
