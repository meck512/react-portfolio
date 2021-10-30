import React from "react";
import { Card, Col, Button, Row } from 'react-bootstrap';

const Resume = () => {
  return (
    // https://drive.google.com/uc?id=1kn1hSTBWnbHnRnKhosmI3qx2u2AUNTxR5dnIlcbJX_0&export=download
    // https://docs.google.com/document/d/1kn1hSTBWnbHnRnKhosmI3qx2u2AUNTxR5dnIlcbJX_0/edit?usp=sharing
    <div className="ResumeTab">
      <Row className="mx-auto my-3" style={{ display: 'flex', justifyContent: 'center', maxWidth: "40%" }}>
        <Button href="https://docs.google.com/document/d/e/2PACX-1vTbZ17wGW9Azl5uJlZ7ZQzrIRapkOTI_F8BLOdePAA6dbhrzx-boNArZuZsE4UJmZTLMvHV2Kd5yzan/pub" variant="light" className="m-2">Download Resume</Button>
      </Row>
      <Row  className="mx-auto my-3" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Col id={'deckCol'} xs={5}>

          <Card className="my-2 bg-secondary text-white">
            <Card.Body>
              <Card.Text >
                <h2 style={{ display: 'flex', justifyContent: 'space-around' }}>Frond-End</h2>
                <div className="my-3">
                  <Button variant="outline-light" className="m-2">HTML</Button>
                  <Button variant="outline-light" className="m-2">CSS</Button>
                  <Button variant="outline-light" className="m-2">Javascript</Button>
                  <Button variant="outline-light" className="m-2">React</Button>
                  <Button variant="outline-light" className="m-2">Reaponsive UI</Button>
                  <Button variant="outline-light" className="m-2">Bootstrap</Button>
                  <Button variant="outline-light" className="m-2">Materialize</Button>
                  {/* <Button variant="outline-light"></Button> */}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col id={'deckCol'} xs={5}>
          <Card className="my-2 bg-secondary text-white">
            <Card.Body>
              <Card.Text >
                <h2 style={{ display: 'flex', justifyContent: 'space-around' }}>Back-End</h2>
                <div className="my-3">
                  <Button variant="outline-light" className="m-2">Node JS</Button>
                  <Button variant="outline-light" className="m-2">Express JS</Button>
                  <Button variant="outline-light" className="m-2">MongoDB/Mongoose</Button>
                  <Button variant="outline-light" className="m-2">Progressive Web Applications</Button>
                  <Button variant="outline-light" className="m-2">User Authentication</Button>
                  <Button variant="outline-light" className="m-2">GraphQL</Button>
                  <Button variant="outline-light" className="m-2">MySQL/Sequelize</Button>

                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        
      </Row>

    </div>



  );
};
export default Resume;