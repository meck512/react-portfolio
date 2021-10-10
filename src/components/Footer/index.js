import React from 'react';

const contactLinks = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/mariah-eckrich-b821b6211/",
    logo: "../../images/5282542_linkedin_network_social network_linkedin logo_icon.png"
  },

  {
    name: "github",
    link: "https://github.com/meck512",
    logo: "../../images/4747499_github_icon.png logo_icon.png"
  },

];

function Footer() {

  return (
    <section>
      {contactLinks.map((contactLinks) => (
        <li
          className="mx-1"
          key={contactLinks.logo}
        >
          <span>
            {contactLinks.logo}
          </span>
        </li>
      ))
      }
    </section>
  )}


export default Footer;