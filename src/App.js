import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';




function App() {
  return (
    <Container className="bg-secondary " md={12}  style={{margin: "0px", maxWidth: "100%"}}>
      <Row >
        <main >
          <Col>

            <Header />

          </Col>
        </main>
 
      </Row>
    </Container>
  );
}
export default App;