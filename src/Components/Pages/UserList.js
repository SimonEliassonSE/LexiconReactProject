import React, { useContext } from "react";
//useState,
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Card, Col } from "react-bootstrap";
import NewUser from "../NewUsers/NewUser";
import Users from "../Users/Users";
import { UserListData } from "../../index";
// import { UserDetails } from "../../index";

export const userArray = [
  {
    firstName: "Alejandro",
    secondName: "Salomon",
    age: "35",
    nationality: "Norway",
    email: "asalomon0@eventbrite.com",
  },
  {
    firstName: "Blair",
    secondName: "Freebury",
    age: "24",
    nationality: "Somalia",
    email: "bfreebury1@csmonitor.com",
  },
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

const UserList = () => {
  // const [users, setUsers] = useState(userArray);

  // const addUserHandler = (user) => {
  //   setUsers((prevUsers) => {
  //     return [user, ...prevUsers];
  //   });
  // };

  const { userList, setUserList } = useContext(UserListData);

  const addUserHandler = (user) => {
    setUserList((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  // if (users.length > 0)
  if (userList.length > 0) {
    return (
      <div className="App">
        {/* <Navbar /> */}
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
              {/* Add link down below at "Details" to a form called details that takes the Key and displays al data  */}
              <Col className="mb-2">
                <h5>Details:</h5>
              </Col>
              <Users items={userList} />
              {/* users               */}
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
  // else if (users.length <= 0)
  else if (userList.length <= 0) {
    return (
      <div className="App">
        {/* <Navbar /> */}
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
              <Col className="mb-2">
                <h5>Details:</h5>
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

export default UserList;
