import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Card, Col } from "react-bootstrap";
import NewUser from "./Components/NewUsers/NewUser";
import Users from "./Components/Users/Users";

import "./App.css";

const userArray = [
  // {
  //   firstName: "Alejandro",
  //   secondName: "Salomon",
  //   age: "35",
  //   nationality: "Norway",
  //   email: "asalomon0@eventbrite.com",
  // },
  // {
  //   firstName: "Blair",
  //   secondName: "Freebury",
  //   age: "24",
  //   nationality: "Somalia",
  //   email: "bfreebury1@csmonitor.com",
  // },
  // {
  //   firstName: "Alfie",
  //   secondName: "Galilee",
  //   age: "76",
  //   nationality: "Indonesia",
  //   email: "agalilee2@edublogs.org",
  // },
  // {
  //   firstName: "Allyce",
  //   secondName: "Salvadori",
  //   age: "52",
  //   nationality: "Thailand",
  //   email: "asalvadori3@redcross.org",
  // },
  // {
  //   firstName: "Meyer",
  //   secondName: "McConnel",
  //   age: "39",
  //   nationality: "Poland",
  //   email: "mmcconnel4@dagondesign.com",
  // },
];

const App = () => {
  const [users, setUsers] = useState(userArray);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  if (users.length > 0) {
    return (
      <div className="App">
        <Container>
          <Row className="mt-5">
            <NewUser onAddUser={addUserHandler} />
          </Row>

          <Card className="p-3 mt-5">
            <Row className="mb-2">
              <Col className="mb-2">
                <h5>First name: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Second name: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Age: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Nationality: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Email:</h5>
              </Col>
              <Users items={users} />
            </Row>
          </Card>
        </Container>
      </div>
    );
  } else if (users.length <= 0) {
    return (
      <div className="App">
        <Container>
          <Row className="mt-5">
            <NewUser onAddUser={addUserHandler} />
          </Row>

          <Card className="p-3 mt-5">
            <Row className="mb-2">
              <Col className="mb-2">
                <h5>First name: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Second name: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Age: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Nationality: </h5>
              </Col>
              <Col className="mb-2">
                <h5>Email:</h5>
              </Col>
            </Row>
            <Row className="m-5">
              <Card className="p-5">
                <h3>There are no user's to display! Please add a user</h3>
              </Card>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
};

export default App;
