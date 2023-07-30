import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const QuranCard = ({ surah }) => {
  const navigate = useNavigate();
  const handleCard = () => {
    navigate("/detailsurah");
  };
  return (
    <Card className="mt-3 cursor-pointer" onClick={handleCard}>
      <Card.Body>
        <Row>
          <Col lg={1} sm={6}>
            <h5> {surah.nomor} </h5>
          </Col>
          <Col lg={2} sm={6}>
            <h5> {surah.nama}</h5>
          </Col>
          <Col lg={3} sm={6}>
            <h5> {surah.nama_latin} </h5>
          </Col>
          <Col lg={3} sm={6}>
            <h5> {surah.arti} </h5>
          </Col>
          <Col lg={3} sm={6}>
            <h5> {surah.jumlah_ayat} ayat</h5>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuranCard;
