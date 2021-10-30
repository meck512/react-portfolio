import React from 'react';
import gitHubLogo from '../../assets/images/4747499_github_icon.png'
import linkedInLogo from '../../assets/images/linkedinLogo.png'
import { Row } from 'react-bootstrap';


function Footer() {

  return (
    <section className="footerSection fixed">

      <Row className="bg-dark py-2" sm={12}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
         <a href="https://github.com/meck512"> <img  src={gitHubLogo} style={{ width: "10%" }} alt="Github" />
         </a>
         <a href="https://www.linkedin.com/in/mariah-eckrich-b821b6211/">
          <img src={linkedInLogo} style={{ width: "10%" }} alt="LinkedIn" />
        </a>
        </div>
      </Row>

    </section>
  )
}


export default Footer;