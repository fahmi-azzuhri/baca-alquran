import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailSurah = () => {
  const { nomor } = useParams();
  const [data, setData] = useState({});
  const [showDeskripsi, setShowDeskripsi] = useState(false);
  const handleShow = () => {
    setShowDeskripsi((prevShowDeskripsi) => !prevShowDeskripsi);
  };
  const parsedDescription = () => {
    return { __html: data.deskripsi };
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ALL_SURAH}/${nomor}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [nomor]);

  return (
    <Container>
      <div key={data.nomor} className="text-center mt-5">
        <h3>{data.nama}</h3>
        <h4>
          {data.namaLatin} ({data.arti})
        </h4>
        <Button className="bg-primary mb-2" onClick={handleShow}>
          {showDeskripsi ? "Tutup Deskripsi" : "Lihat Deskripsi"}
        </Button>
        {showDeskripsi && (
          <div dangerouslySetInnerHTML={parsedDescription()}></div>
        )}
      </div>
      <ul>
        {data.ayat &&
          data.ayat.map((verse) => (
            <Card key={verse.nomorAyat} className="mt-2 py-4 px-3">
              <h2 className="mb-5" style={{ textAlign: "right" }}>
                {" "}
                {verse.teksArab}{" "}
              </h2>
              <h5> {verse.teksLatin} </h5>
              <p> {verse.teksIndonesia} </p>
              <audio controls style={{ textAlign: "right" }}>
                <source src={verse.audio["05"]} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </Card>
          ))}
      </ul>
    </Container>
  );
};

export default DetailSurah;
