import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="ContactTab">
      <Row >
        <Col s={10} md={6} className="mx-auto">
          <Card className=" bg-dark text-white mx-3 my-5 p-3">
            <Form id="contact-form" onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formName">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control onBlur={handleChange} type="text" placeholder="" defaultValue={name} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="email">Email address:</Form.Label>
                <Form.Control onBlur={handleChange} type="email" placeholder="" defaultValue={email} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control onBlur={handleChange} as="textarea" rows={2} defaultValue={message} textarea name="message" />
              </Form.Group>

              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div className="d-grid">
                <Button data-testid="button" variant="outline-light" type="submit">
                  Submit
                </Button>
              </div>
            </Form>

          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default ContactForm;
