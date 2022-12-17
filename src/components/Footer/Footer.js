import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from '../../components/../img/Logo.jpg';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="4" className="footer-body">
          <ul className="footer-icons"style={{margin:"-5px 0px 0px 10px",padding:"10px 0px 0px 15px",width:"3%",height:"3%" }}>
            <li className="social-icons-facebook">
              <a
                href="https://facebook.com/hollamik"
                style={{ color: "white",padding:"15px",fontSize:"30px"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
  </li>
            <li className="social-icons-twitter">
              <a
                href="https://twitter.com/hollamik"
                style={{color: "white",padding:"15px",fontSize:"30px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons-linkedin">
              <a
                href="https://www.linkedin.com/in/oladayo-michael-a7b192171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK0em1Z8nRd6fiJYATw9eAw%3D%3D"
                style={{ color: "white",padding:"15px",fontSize:"30px"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/hollamik/saved"
                style={{color: "white",padding:"15px",fontSize:"30px"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
     <h3 style={{padding:"0px 0px 0px 20px",fontSize:"12px" }}>Copyright © {year} <img src={Logo}alt="logo" style={{padding:"2px 0px 0px 0px",width:"25%"}}/></h3> 
     <h3 style={{padding:"-20px 0px 0px 40px",fontSize:"12px" }}>14,Betty Udokwe Close,Graceland Estate,lekki-ajah,Lagos.</h3>
     <p style={{padding:"0px 0px 0px 20px",fontSize:"12px",color:"white" }}>Phone:+234-8062973305 Email:Awoseemonike@gmail.com </p>
       </Col>
        <Col md="4" className="footer-copywright"style={{padding:"0px 0px 0px 200px"}}>
          <h3 style={{marginLeft:"-80px",padding:"2px 0px 0px 0px",fontSize:"12px" }}>Designed&Developed by <span className="purple">Hollamik</span></h3>
        </Col>
        </Row>
        
      <whatsApp/>
    </Container>
  );
}

export default Footer;