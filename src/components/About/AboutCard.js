import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">RACHIDA AMOURAK </span>
            from <span className="blue"> Morroco.</span>
            <br />
            Currently pursuing a degree in Computer Science at ENSA Al Hoceima.
            <br />
            I'm passionate about coding and enjoy tackling complex problems with creative and efficient solutions.
            <br />
            <br />
            My strong interest in technology motivates me to continuously learn, explore, and stay updated with the latest tools and techniques to enhance my skills and grow as a developer.
           
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
