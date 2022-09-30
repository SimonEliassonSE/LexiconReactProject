import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Card, Col, FormLabel } from "react-bootstrap";
import { UserDetails } from "../../index";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const { userDetails } = useContext(UserDetails);
  return (
    <Container className="m-5">
      <Card className="p-2">
        <Row className="mb-2">
          <Col>
            <p>
              User detail for <b>{userDetails.firstName}</b>
            </p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <FormLabel>Firstname: {userDetails.firstName}</FormLabel>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <FormLabel>Lastname: {userDetails.secondName}</FormLabel>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <FormLabel>Age: {userDetails.age}</FormLabel>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <FormLabel>Nationality: {userDetails.nationality}</FormLabel>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <FormLabel>E-mail: {userDetails.email}</FormLabel>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Link to="/Userlist">
              <b>Go back to Useer list!</b>
            </Link>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Details;
