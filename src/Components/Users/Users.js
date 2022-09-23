import UserItem from "./UserItem";

import "./Users.css";

const Users = (props) => {
  return (
    <div className="users">
      {props.items.map((user) => (
        <UserItem
          key={user.email}
          firstName={user.firstName}
          secondName={user.secondName}
          age={user.age}
          nationality={user.nationality}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Users;
