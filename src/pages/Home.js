import React, { useContext } from "react";

import { UserContext } from "../context/users";
import UserList from "../components/UserList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchUser from "../components/SearchUser";

const Home = () => {
  const { loading, users, currentUsers, usersPerPage, paginate } = useContext(
    UserContext
  );
  console.log(users);
  console.log(currentUsers);
  console.log(usersPerPage);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="text-center">
      <SearchUser users={users} />
      <h3 className="display-3">User List</h3>
      <h4>There are {users.length} users to review</h4>
      <UserList users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
