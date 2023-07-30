import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import QuranCard from "../component/QuranCard";

const Home = () => {
  const [dataQuran, setDataQuran] = useState([]);

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

  // Add a conditional check to ensure dataQuran is available before rendering
  if (!dataQuran || dataQuran.length === 0) {
    return <p>Loading...</p>; // You can show a loading message or spinner here
  }

  return (
    <Container>
      <Row>
        {dataQuran.map((surah) => (
          <div key={surah.nomor}>
            <QuranCard surah={surah} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
