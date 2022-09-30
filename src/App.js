import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "./Components/Pages/Navbar";
// import UserList from "../src/Components/Pages/UserList";
import UserList, { userArray } from "../src/Components/Pages/UserList";
import LoggInForm from "../src/Components/LoggFunctions/LoggIn";
import LoggOut from "../src/Components/LoggFunctions/LoggOut";
import Home from "../src/Components/Pages/Home";
import Details from "../src/Components/Pages/Details";
// import { UserContext, UserDetails } from "./index";
import { UserContext, UserDetails, UserListData } from "./index";

function App() {
  const [user, setUser] = useState(null);
  const providerValu = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [userDetails, setUserDetails] = useState(null);
  const detailValues = useMemo(
    () => ({ userDetails, setUserDetails }),
    [userDetails, setUserDetails]
  );

  const [userList, setUserList] = useState(userArray);
  const listValues = useMemo(
    () => ({ userList, setUserList }),
    [userList, setUserList]
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={providerValu}>
        <Navbar />
      </UserContext.Provider>
      <Routes>
        <Route
          path="/"
          element={
            <UserContext.Provider value={providerValu}>
              <Home />
            </UserContext.Provider>
          }
        />
        <Route
          path="/Home"
          element={
            <UserContext.Provider value={providerValu}>
              <Home />
            </UserContext.Provider>
          }
        />
        <Route
          path="/Userlist"
          element={
            <UserDetails.Provider value={detailValues}>
              <UserListData.Provider value={listValues}>
                <UserList />
              </UserListData.Provider>
            </UserDetails.Provider>
          }
        />
        <Route
          path="/Loggin"
          element={
            <UserContext.Provider value={providerValu}>
              <LoggInForm />
            </UserContext.Provider>
          }
        />
        <Route
          path="/LoggOut"
          element={
            <UserContext.Provider value={providerValu}>
              <LoggOut />
            </UserContext.Provider>
          }
        />
        <Route
          path="/Details"
          element={
            <UserDetails.Provider value={detailValues}>
              <Details />
            </UserDetails.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
