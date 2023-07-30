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
        console.log(response.data.data);
        setDataQuran(response.data.data);
      })
      .catch((err) => {
        console.log("yah error", err);
      });
  }, []);
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
