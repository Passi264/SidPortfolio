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
          <span className="purple"> Ontario, Canada</span>.
          <br />
           With a Postgraduate Certificate in Data Analytics for Business Decision-Making from Durham College, I’m passionate about uncovering insights through data and leveraging analytics to solve real-world problems.
          <br />
          <br />
          Beyond analyzing data, I enjoy:
        </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Exploring the world of investing and analyzing financial markets
              Staying updated on emerging technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling, capturing moments through photography, and sharing stories
            </li>
            <li className="about-activity">
              <ImPointRight /> I’m always looking to connect, learn, and grow—whether it’s diving into data, discovering new places, or embracing innovative ideas!
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
