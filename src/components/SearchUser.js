import React from "react";
// import { UserContext } from "../context/users";

// get unique nat
const getUnique = (users, nat) => {
  return [...new Set(users.map(user => user[nat]))];
};

const SearchUser = ({ users }) => {
  // const { handleChange, nat } = useContext(UserContext);

  // get unique nat
  let nats = getUnique(users, "nat");
  nats = [...nats].sort();
  nats = nats.map((item, index) => {
    // return (
    //   <option value={item} key={index}>
    //     {item}
    //   </option>
    // );
    return <p className="dropdown-item">{item}</p>;
  });

  return (
    <section className="container">
      <h3 className="text-center mt-3">Statistic on Nationalities</h3>
      <p className="lead">There are {nats.length} nationalities in this list</p>
      {/* <form>
        <div className="form-group">
          <select
            name="nat"
            value={nat}
            onChange={handleChange}
            className="form-control"
          >
            {nats}
          </select>
        </div>
      </form> */}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Show Nationalilties
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
          {nats}
        </div>
      </div>
    </section>
  );
};

export default SearchUser;
