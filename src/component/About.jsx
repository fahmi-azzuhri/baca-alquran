import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <div>
          <h4 className="text-center">Tentang</h4>
          <p className="mt-5">
            Endpoint yang terdapat pada API AlQuran ini dari {""}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://quran.kemenag.go.id/"
              className="cursor-pointer"
            >
              <u>Aplikasi Quran Kementrian Agama Republik Indonesia</u>
            </a>{" "}
            {""},dan audio murrotal dari{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://qurancentral.com/"
              className="cursor-pointer"
            >
              {" "}
              <u>Quran Central</u>{" "}
            </a>{" "}
            {""}dan{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://everyayah.com/"
              className="cursor-pointer"
            >
              {" "}
              <u>Verse by Verse Quran</u>{" "}
            </a>{" "}
            {""}. Semoga dapat dimanfaatkan sebaik-baiknya.
          </p>
          <p>Apabila ada kesalahan, bisa hubungi media sosial berikut</p>

          <div className="social-media d-flex">
            <a href="mailto:your-email@example.com" className="me-3 black-icon">
              <AiOutlineMail size={24} />
            </a>
            <a
              href="https://www.facebook.com/fahmi.azzuhri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={24} className="black-icon" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default About;
