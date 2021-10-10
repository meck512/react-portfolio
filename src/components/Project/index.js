import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import bootstrapIMG from '../../assets/images/front-page.PNG';
import ImpulseIMG from '../../assets/images/ImpulseConcerts.png';
import runBuddyIMG from '../../assets/images/Run-buddy-capture.jpg';
import horiseonIMG from '../../assets/images/Robot-gladiators-capture.jpg';
import robotIMG from '../../assets/images/Robot-gladiators-capture.jpg'
import tashIMG from '../../assets/images/Tash-sultana-capture.jpg';

const projectData = [
  {
    name: "Binge Bucket",
    image: {bootstrapIMG},
    liveLink: "https://whispering-everglades-56821.herokuapp.com/",
    githubRepo: "https://github.com/meck512/BingeBucket",
    technologies: "https://github.com/meck512/BingeBucket"
  },
  {
    name: "Impulse Concerts",
    image: {ImpulseIMG},
    liveLink: "https://meck512.github.io/projectOne/",
    githubRepo: "https://github.com/meck512/projectOne",
    technologies: ""
  },
  {
    name: "Run Buddy",
    image: {runBuddyIMG},
    liveLink: "https://meck512.github.io/run-buddy/",
    githubRepo: "https://github.com/meck512/run-buddy",
    technologies: ""
  },
  {
    name: "Horiseon Business Marketing",
    image: {horiseonIMG},
    liveLink: "https://meck512.github.io/Horiseon_Business_Marketing/",
    githubRepo: "https://github.com/meck512/Horiseon_Business_Marketing",
    technologies: ""
  },
  {
    name: "Robot Gladiators",
    image: {robotIMG},
    liveLink: "http://google.com/",
    githubRepo: "https://github.com/meck512/robot-gladiators",
    technologies: ""
  },
  {
    name: "Tash Sultana Fanpage",
    image: {tashIMG},
    liveLink: "https://meck512.github.io/tash-sultana-fanpage/",
    githubRepo: "https://github.com/meck512/tash-sultana-fanpage",
    technologies: ""
  }
];


function Project() {
  return (
    <section className="Portfolio">
      {projectData.map((projectData) => (
        <Card key={projectData.image}>
          <Card.Img variant="top" src={projectData.image} />
          <Card.Body>
            <Card.Text >
              <p key={projectData.name}>
                {projectData.name}</p>
              <p key={projectData.liveLink}>
                {projectData.liveLink}</p>
                <p key={projectData.githubRepo}>
                {projectData.githubRepo}</p>
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