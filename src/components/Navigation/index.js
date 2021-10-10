import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Navigation(props) {

  const {
    activeTab = [],
    setCurrentTab,
    currentTab,
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
                className={`mx-1 ${currentTab.name === tab.name && !'navActive'
                  }`}
                key={tab.name}
              >
                <span
                  onClick={() => {
                    setCurrentTab(tab);
                  }}
                >
                  {capitalizeFirstLetter(tab.name)}
                </span>
              </Nav.Link>
            ))}

          
          </Nav>
        </Container>
      </Navbar>
    </section>
  );
}

export default Navigation;

