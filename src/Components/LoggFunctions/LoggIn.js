import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../../index";

function LoggInForm() {
  const { user, setUser } = useContext(UserContext);

  const [enteredFirstName, setEnteredFirstName] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    console.log(enteredFirstName);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      firstName: enteredFirstName,
    };
    setUser(userData.firstName);
    console.log(userData);
  };
  if (user === null) {
    return (
      <div>
        <Container className="m-5">
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <div>{user}</div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className="FormLabel">First name:</Form.Label>
                      <Form.Control
                        type="text"
                        // placeholder="Enter your first name..."
                        value={enteredFirstName}
                        onChange={firstNameChangeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="m-3"
                  variant="primary"
                  type="submit"
                  // onClick={() => setUser(userData.firstName.value.target)}
                >
                  Add new login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  } else if (user !== null) {
    return (
      <div>
        <Container className="m-5">
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Row>
                  <Col>
                    <p>You have sucessfully logged in!</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      You are currently logged in as: <b>{user}</b>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default LoggInForm;
