import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
               
              </li>
              <li className="social-icons">
               
              </li>
              <li className="social-icons">
               
              </li>
              <li className="social-icons">
               
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer