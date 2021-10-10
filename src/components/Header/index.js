import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Header(props) {

  const {
    activeTab = [],
    setCurrentTab,
    contactSelected,
    currentTab,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);



  return (
    <section>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mariah Eckrich</Navbar.Brand>
          <Nav className="me-auto">
            {activeTab.map((tab) => (
              <Nav.Link
                className={`mx-1 ${currentTab.name === tab.name && !contactSelected && 'navActive'
                  }`}
                key={tab.name}
              >
                <span
                  onClick={() => {
                    setCurrentTab(tab);
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(tab.name)}
                </span>
              </Nav.Link>
            ))}

            <Nav.Link href="#contact" onClick={() => setContactSelected(true)}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;

