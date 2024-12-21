import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import rymindr from "../../Assets/Projects/rymindr.jpeg";
import PerfectChoice from "../../Assets/Projects/perfect-choice.png";
import Planiteach from "../../Assets/Projects/planiteach.gif";
import yogifi from "../../Assets/Projects/cropped-Logo-yogifi.png";
import Loadout from "../../Assets/Projects/loadout.jpeg";
import Ozgigs from "../../Assets/Projects/ozgigs.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rymindr}
              isBlog={false}
              title="Rymindr"
              description="Reminder app and web which can be used at business and education level. => Crafted a web application with a mobile app to use by educations and business and send rymindrs , bookings , messages from web to app."
              // demoLink="https://app.rymindr.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Loadout}
              isBlog={false}
              title="Loadout"
              description="Travelling management system. => We have used React.js and Firebase fire store as database and authentication. => Also we have used GCP Cloud function to manage stripe payment gateway as there were no backend technology we had used."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ozgigs}
              isBlog={false}
              title="Ozgigs Marketplace"
              description="Ozgig is the event vendor marketplace where they can list their videos and events. Also a user can be able to chat with vendor to plan for organizing an event."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yogifi}
              isBlog={false}
              title="YogiFi - Phase 1"
              description="Yoga teacher attendance management. => Web application for the organization use to manage their yoga teachers schedule, availability and attendance. => Yoga teachers has ability to manage their schedule and students. "
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PerfectChoice}
              isBlog={false}
              title="Perfect Choice Music"
              description="Website built to get clients music albums published. => Client has his own albums and playlist to get published so this website is designed to upload all of the client albums for users to listen and share with clients. "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Planiteach}
              isBlog={false}
              title="Planiteach"
              description="LMS Platform built to manage school’s outcome, activity and activity lessons to be created and getting downloaded in doc format. => A user need to register and subscribe to the plans available. We have used stripe payment for subscription."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          My Recent <strong className="purple">Ecommerce Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={yogifi}
              isBlog={false}
              title="Adeshanusaar"
              description="Adeshanusaar serves as an online platform where businesses and customers can engage in seamless buying and selling activities. "
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://adeshanusaar.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={PerfectChoice}
              isBlog={false}
              title="Adeshanusaar Dropshipping"
              description="Adeshanusaar Dropshipping is an sonline platform that allows businesses to sell products to customers without holding inventory. Instead, the store forwards customer orders to a supplier or wholesaler, who ships the products directly to the customers. This business model minimizes overhead costs and simplifies logistics. "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://dropshipping.adeshanusaar.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={Planiteach}
              isBlog={false}
              title="Laxmi Jewellers"
              description="Sone se kam nahi, kho jaye to gum nahi”. Nahi ye koi shayari nahi hai, balki aaj mai aapko btaungi Kanpur ke ek aese jewellery brand ke baare me jo isi tagline ke sath logo ko sone jitni sundar jewellery, adhe se bhi kam daam me provide krta hai. Ye hai Laxmi Jewellers, Kanpur ka iklauta Online jewell"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://laxmijewellerskanpur.com/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
