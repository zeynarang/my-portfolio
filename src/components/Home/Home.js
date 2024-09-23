import { default as React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/avatar.svg";
import homeLogo from "../../assets/jatin.jpeg";
import Particle from "../Particles/ParticleVariantOne";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Jatin Narang</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{
                paddingBottom: 20,
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%",
                  border: "1px solid #ad75d3",
                  boxShadow: "0px 0px 10px 0px #ad75d3 ",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Full-Stack Web Developer with expertise in modern web
                technologies and a passion for building high-performance,
                scalable applications.
                <br />
                <br />
                Proficient in
                <i>
                  <b className="purple">
                    {" "}
                    HTML, CSS, JavaScript, and frameworks like React.js,
                    Node.js, and Next.js,
                  </b>
                </i>
                I specialize in crafting intuitive and dynamic user experiences.
                I have hands-on experience with both relational and
                non-relational databases, including PostgreSQL and MongoDB, as
                well as deploying applications using AWS for cloud solutions.
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b>
                </i>
                <br />
                <br />
                Driven by a passion for innovation, my areas of interest include
                developing cutting-edge web technologies and products, and
                leveraging full-stack technologies to build robust and efficient
                applications.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/zeynarang"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/jatin-narang/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/jatin_narangg/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
