import "./Home.css";
import { UserContext } from "../../index.js";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container } from "react-bootstrap";

const Home = () => {
  const { user } = useContext(UserContext);
  if (user !== null) {
    return (
      <div className="m-5">
        <Container>
          <Card>
            <Card.Body>
              <Row>
                <h5>Welcome!</h5>
              </Row>
              <Row>
                <p>
                  You are currently logged in as: <b>{user}</b>{" "}
                </p>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  } else if (user === null) {
    return (
      <div className="m-5">
        <Container>
          <Card>
            <Card.Body>
              <Row>
                <h1>Welcome</h1>
              </Row>
              <Row>
                <p>You are currently not logged in, please logg in</p>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
};

export default Home;
