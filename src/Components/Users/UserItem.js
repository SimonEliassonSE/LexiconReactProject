import "./UserItem.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserDetails } from "../../index";
import { useContext } from "react";
// , redirect
const UserItem = (props) => {
  const { userDetails, setUserDetails } = useContext(UserDetails);

  const clickHandler = (event) => {
    const userData = {
      firstName: props.firstName,
      secondName: props.secondName,
      age: props.age,
      nationality: props.nationality,
      email: props.email,
    };
    if (userDetails !== null) {
      setUserDetails(null);
    }
    setUserDetails(userData);
    console.log(userDetails);
  };

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
            <Col>
              <Link to="/Details" onClick={clickHandler}>
                Details
              </Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
  // }
  //  else {
  //   return (
  //     <div>
  //       <Container>
  //         <Card className="p-2">
  //           <Row className="mb-2">
  //             <Col>
  //               <div>{props.firstName}</div>
  //             </Col>
  //             <Col>
  //               <div>{props.secondName}</div>
  //             </Col>
  //             <Col>
  //               <div>{props.age}</div>
  //             </Col>
  //             <Col>
  //               <div>{props.nationality}</div>
  //             </Col>
  //             <Col>
  //               <div>{props.email}</div>
  //             </Col>
  //             <Col>
  //               <Link to="/Details">Details</Link>
  //             </Col>
  //           </Row>
  //         </Card>
  //       </Container>
  //     </div>
  //   );
  // }
};

export default UserItem;
