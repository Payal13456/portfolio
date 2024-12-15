import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import bannerImg from "../../Assets/Projects/banner-about.jpeg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Know More <strong className="purple">About Me </strong>
        </h1>
        <Row>
          <Col md={12} style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left"
            }}>
            <p>I am a seasoned <strong className="purple">Full-Stack Developer</strong> with over <strong className="purple">5 years</strong> of professional experience, adept at building, deploying, and maintaining dynamic and scalable applications. <br/>My technical skill set spans across front-end and back-end development, as well as infrastructure management.</p>
            <p>I specialize in using cutting-edge technologies like:</p>
            <ul>
            <p>•	<strong className="purple">Laravel: </strong> Crafting robust and scalable back-end solutions, RESTful APIs, and managing complex database structures.</p>
            <p>•	<strong className="purple">React: </strong> Developing interactive and user-friendly front-end applications with modern com-ponent-based architecture.</p>
            <p>•	<strong className="purple">Angular: </strong> Building structured, scalable, and high-performing single-page applications (SPA).</p>
            <p>•	<strong className="purple">Node.js: </strong> Implementing fast and efficient server-side logic for real-time applications.</p>
            <p>•	<strong className="purple">Project Deployment: </strong> Ensuring seamless application deployment on various environments using modern CI/CD tools and cloud platforms.</p>

            </ul>
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
