import { Row, Col } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <h1 className="footer-heading mb-4">Connect with Us</h1>

          <div className="media-icons">
            <a href="https://www.instagram.com/blkmencollective_uw/" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
            <a href="#" aria-label="Twitter / X">
              <BsTwitterX />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:hello@bmc.org" aria-label="Email">
              <BiLogoGmail />
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
