import React from 'react';
import gitHubLogo from '../../assets/images/4747499_github_icon.png'
import linkedInLogo from '../../assets/images/linkedinLogo.png'

// const contactLinks = [ 
//   {
//     name: "linkedin",
//     link: "https://www.linkedin.com/in/mariah-eckrich-b821b6211/",
//     logo: {linkedInLogo}
//   },

//   {
//     name: "github",
//     link: "https://github.com/meck512",
//     logo: {gitHubLogo}
//   },

// ];

function Footer() {

  return (
    <section>

      {/* {contactLinks.map((contactLinks) => (
        <img key={contactLinks.logo} src={contactLinks.logo} style={{ width: "25%" }} alt="cover" />
      ))
      } */}
      <img href="https://github.com/meck512" src={gitHubLogo} style={{ width: "5%" }} alt="Github" />
      <img href="https://www.linkedin.com/in/mariah-eckrich-b821b6211/" src={linkedInLogo} style={{ width: "5%" }} alt="LinkedIn" />


    </section>
  )
}


export default Footer;