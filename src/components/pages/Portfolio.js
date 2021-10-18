import React, { useState } from 'react';
import ProjectTemplate from './Project';
import projects from '../../assets/projectData.json'
import { Container, Row } from 'react-bootstrap'

function Portfolio() {

  const [projectList] = useState(projects);


  return (
    <Container className="PortfolioTab">
      <Row>
        <Row>
          <h1>Projects</h1>
        </Row>

        {Array.from({ length: 1 }).map((_, idx) => (
          <Row>
            {/* Map through 'projectList' and render a 'ProjectCard' for each project */}
            {projectList.map(project => (
              <ProjectTemplate
                name={project.name}
                image={project.image}
                liveLink={project.liveLink}
                githubRepo={project.githubRepo}
                techUsed={project.techUsed}
              />
            ))}
          </Row>
        ))}
      </Row>

      {/* <Card>
<div class="projectCardDeck">
  <div class="projectCard">
    <div class="imgBx">
      <img src={require(`../../assets/images/${props.image}`).default} alt="BingeBucket Link"/>
    </div>
    <div class="contentBx">
      <h2>{props.name}</h2>
      <div class="size">
        <h3>Technologies:</h3>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>MongoDB</span>
      </div>
      <div class="color">
        <h3>Links</h3>
        <span>{props.githubLink}</span>
        <span href={props.deployLink}></span>
        <span></span>
      </div>
      <a href="www.google.com">Buy Now</a>
    </div>
  </div>
</div>

</Card> */}






    </Container>
  );
}

export default Portfolio;
