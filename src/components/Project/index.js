import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const projectData = [
  {
    name: "Binge Bucket",
    image: "../../images/front-page.PNG",
    liveLink: "https://whispering-everglades-56821.herokuapp.com/",
    githubRepo: "https://github.com/meck512/BingeBucket",
    technologies: ""
  },
  {
    name: "Impulse Concerts",
    image: "../../images/ImpulseConcerts.png",
    liveLink: "",
    githubRepo: "",
    technologies: ""
  },
  {
    name: "Run Buddy",
    image: "../../images/Run-buddy-capture.jpg",
    liveLink: "",
    githubRepo: "",
    technologies: ""
  },
  {
    name: "Horiseon Business Marketing",
    image: "../../images/Horiseon-capture.jpg",
    liveLink: "",
    githubRepo: "",
    technologies: ""
  },
  {
    name: "Robot Gladiators",
    image: "../../images/Robot-gladiators-capture.jpg",
    liveLink: "",
    githubRepo: "",
    technologies: ""
  },
  {
    name: "Tash Sultana Fanpage",
    image: "../../images/Tash-sultana-capture.jpg",
    liveLink: "",
    githubRepo: "",
    technologies: ""
  }
];


function Project() {
  return (
    <section>
      {projectData.map((projectData) => (
        <Card key={projectData.image}>
          <Card.Img variant="top" src={projectData.image} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))
      }
    </section>
  )}


export default Project;


//   For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository