import React from "react";

import UserItem from "../components/UserItem";

const UserList = ({ users }) => {
  console.log();

  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
