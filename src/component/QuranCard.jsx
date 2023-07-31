import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const QuranCard = ({ surah }) => {
  const navigate = useNavigate();
  const handleCard = () => {
    navigate(`/detailsurah/${surah.nomor}`);
  };
  return (
    <Card className="mt-3 cursor-pointer border-0 " onClick={handleCard}>
      <Card.Body className="card-style">
        <Row>
          <Col lg={1} sm={6} className="text-center">
            <h5> {surah.nomor} </h5>
          </Col>
          <Col lg={2} sm={6} className="text-center">
            <h5> {surah.nama}</h5>
          </Col>
          <Col lg={3} sm={6} className="text-center">
            <h5> {surah.namaLatin} </h5>
          </Col>
          <Col lg={3} sm={6} className="text-center">
            <h5> {surah.arti} </h5>
          </Col>
          <Col lg={3} sm={6} className="text-center">
            <h5> {surah.jumlahAyat} ayat</h5>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuranCard;
