import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Payal Nihore </span>
            from <span className="purple"> Indore (M.P.), India.</span>
            <br />
            I am currently employed as a Sr. Developer at Cyber Infrastructure.
            <br />
            I have completed my Bachelor's degree in BE , CSE from RGPV University , Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I am interested in
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Quotes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live the life you want "{" "}
          </p>
          <footer className="blockquote-footer">Payal Nihore</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
