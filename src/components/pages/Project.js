import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Button } from 'react-bootstrap';

function ProjectTemplate(props) {
  return (
    <Col id={'deckCol'} xs={4} >
      <Card className="my-2 bg-dark text-white" >
        <Card.Img variant="top" src={require(`../../assets/images/${props.image}`).default} />
        <Card.Body >
          <Card.Text style={{ display: 'flex', justifyContent: 'center' }} >
            <p style={{justifyContent: 'center' }}className="mx-auto">{props.name}</p>
            <div className="d-grid">
              
              <Button href={props.liveLink} variant="outline-light" className="m-2">Demo</Button>
            <Button href={props.githubRepo} variant="outline-light" className="m-2">Github Repository</Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}


export default ProjectTemplate;


//   For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository