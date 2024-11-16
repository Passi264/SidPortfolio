import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone! I'm <span className="purple">Siddhant Somvanshi</span>, currently based in 
          <span className="purple">pmOntario, Canada</span>.
          <br />
          I am an Assistant Team Lead (Operations & Management) at Dollarama and hold a Postgraduate Certificate in Data Analytics for Business Decision Making from Durham College.
          <br />
          <br />
          Beyond analyzing data, I enjoy:
        </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Investing in the stock market
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "Learn continually. There's always "one more thing" to learn.{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
