import React, { useState } from "react";
import "./UserForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Card, Form, Col, Row, Container } from "react-bootstrap";

//This UserForm is used to "take" input from the user, however the data will not be stored here but in a list in app.

//We have a const that takes in al the required objects called UserForm
const UserForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredSecondName, setEnteredSecondName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredNationality, setEnteredNationality] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  // The folowing ChangeHandlers activates ones the user push the submit (onChange) button and will take the input from the user and...
  // asign the input data to the correct const trough the ChangeHandler's
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const secondNameChangeHandler = (event) => {
    setEnteredSecondName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const nationalityChangeHandler = (event) => {
    setEnteredNationality(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  //Prevents the page from refreshing ones the submit button is cliked
  const submitHandler = (event) => {
    event.preventDefault();
    // ones the submit button is pushed we inport input and sets it in userData
    const userData = {
      firstName: enteredFirstName,
      secondName: enteredSecondName,
      age: enteredAge,
      nationality: enteredNationality,
      email: enteredEmail,
    };

    console.log(userData);

    props.onSaveUserData(userData);
    //Removes input (value) after a new input is finished
    setEnteredFirstName("");
    setEnteredSecondName("");
    setEnteredAge("");
    setEnteredNationality("");
    setEnteredEmail("");
  };

  return (
    <div>
      <Container className="mb-3">
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label className="FormLabel">First name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name..."
                      required
                      value={enteredFirstName}
                      onChange={firstNameChangeHandler}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label className="FormLabel">Second name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your second name..."
                      required
                      value={enteredSecondName}
                      onChange={secondNameChangeHandler}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label className="FormLabel">Age: </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your age..."
                      required
                      value={enteredAge}
                      onChange={ageChangeHandler}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label className="FormLabel">Nationality: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your nationality..."
                      required
                      value={enteredNationality}
                      onChange={nationalityChangeHandler}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label className="FormLabel">Email: </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email..."
                  required
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
              </Form.Group>
              <Button className="m-3" variant="primary" type="submit">
                Add new user
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default UserForm;
