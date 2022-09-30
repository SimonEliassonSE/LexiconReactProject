// Måste manupilera context. Om man trycker på logg out (om man är inloggad)
// Så ska man komma hit, en funktion skall gå igång och sätta context till null igen för att indikera att ingen är inloggad.
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { UserContext } from "../../index";
import { useContext } from "react";

const LoggOut = () => {
  // const [loggInStatus, setLoggedIn] = useContext(UserContext);
  // if (loggInStatus) {
  //   setLoggedIn = null;
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  if (!user) {
    return (
      <div>
        <Container className="m-5">
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Body>
              <Row>
                <Col className="m-3">
                  <h4>You have been sucessfully logged out!</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container className="m-5">
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Body>
              <Row>
                <Col className="m-3">
                  <p>
                    You are currently logged in as: <b>{user}</b>
                    <Button className="m-3" onClick={() => setUser(null)}>
                      Logg out
                    </Button>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
};
// };

export default LoggOut;
