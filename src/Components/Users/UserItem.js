import "./UserItem.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Card, Col } from "react-bootstrap";

const UserItem = (props) => {
  return (
    <div>
      <Container>
        <Card className="p-2">
          <Row className="mb-2">
            <Col>
              <div>{props.firstName}</div>
            </Col>
            <Col>
              <div>{props.secondName}</div>
            </Col>
            <Col>
              <div>{props.age}</div>
            </Col>
            <Col>
              <div>{props.nationality}</div>
            </Col>
            <Col>
              <div>{props.email}</div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default UserItem;
