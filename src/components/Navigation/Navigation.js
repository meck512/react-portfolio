import React from "react";
import { Navbar, Container, Nav, Row } from 'react-bootstrap';

const Navigation = (props) => {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  // const [showBasic, setShowBasic] = useState(false);

  return (


    <div className="Tabs">
      <Row>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Mariah Eckrich</Navbar.Brand>

            <Nav className="me-auto">
              {tabs.map(tab => (
                <Nav.Link className="nav-item" key={tab}>
                  <div onClick={() => props.setActiveTab(tab)} className={props.activePage === tab ? 'nav-link navActive' : 'nav-link'}>
                    {tab}
                  </div>
                </Nav.Link>
              ))}
            </Nav>

          </Container>
        </Navbar>
      </Row>

    </div>



  );
};
export default Navigation;