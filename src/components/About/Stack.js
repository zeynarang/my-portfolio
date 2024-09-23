import { Col, Row } from "react-bootstrap";

export default function Stack({ category, stacks }) {
  console.log(stacks);
  return (
    <Row className="mt-3">
      <h2 style={{ textAlign: "left" }} className="purple">
        {<b>{category}</b>}
      </h2>
      {stacks.map(({ name, Icon }) => {
        return (
          <Col key={name} xs={4} md={2} className="tech-icons">
            <Icon />
          </Col>
        );
      })}
    </Row>
  );
}
