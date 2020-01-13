import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import url from "../utils/url";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // useState
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);
  // const [filterUsers, setFilterUsers] = useState([]);
  // const [nat, setNat] = useState("");

  // useEffect
  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/?results=50`).then(res => {
      setUsers(res.data.results);
      setLoading(false);
    });
    return () => {};
  }, []);

  // pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const getUser = id => {
    const oneUser = users.filter(user => user.login.uuid === id);
    console.log(oneUser);
    return oneUser;
  };

  // const handleChange = e => {
  //   setNat(e.target.value);
  //   searchUserNat();
  // };

  // const searchUserNat = () => {
  //   let tempUsers = [...users];
  //   if (nat !== "ALL") {
  //     tempUsers = tempUsers.filter(user => user.nat === nat);
  //   }
  //   setFilterUsers(tempUsers);
  // };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        currentUsers,
        paginate,
        usersPerPage,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
