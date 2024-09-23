import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Jatin Narang </span> from
            <span className="purple"> Delhi, India.</span>
            <br />
            <p>
              I am an innovative Full-Stack Web Developer with a strong focus on
              user-centric design and a passion for continuous learning and
              growth. I thrive on building solutions that not only meet
              technical needs but also deliver engaging and seamless user
              experiences.
            </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing{" "}
              <span className="purple">Table Tennis </span>
              and <span className="purple">Badminton</span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              Watching<span className="purple"> Movies</span> and{" "}
              <span className="purple">Series</span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              <span className="purple">Trekking </span> and{" "}
              <span className="purple">Travelling</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
