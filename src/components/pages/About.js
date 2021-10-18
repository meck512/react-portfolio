import React from 'react';
import coverImage from '../../assets/images/Profile.png';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section className="aboutSection">

      <Container>

        <Row>

          <Col sm={4}>
            <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
          </Col>

          <Col sm={8} className="my-auto text-light">
            <h1 className="mx-auto" id="about">Full Stack Web Developer</h1>
            <p>
            Full stack web developer with extensive background in both project and team management across varied industries. 
            <br/>
            <br/>
            Certified at Case Western Reserve University, I am well versed in HTML, CSS, JavaScript, Node.js and database curation. My experience in construction and customer service translates into strong problem-solving and communication skills. 
            <br/>
            <br/>
            I enjoy new challenges and researching new technologies that will make my projects stand out.  My goal is to apply these skills to build memorable client and user experiences.
            </p>
          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default About;
