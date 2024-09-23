import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Stack from "./Stack";
import { techStacks } from "../../shared/constant";

function Techstack() {
  return (
    <Container className="mt-5">
      {techStacks.map((techStack, index) => (
        <Stack
          key={index}
          category={techStack.category}
          stacks={techStack.stacks}
        />
      ))}
    </Container>
  );
}

export default Techstack;
