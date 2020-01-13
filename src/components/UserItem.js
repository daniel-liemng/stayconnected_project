import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const id = user.login.uuid;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <img
          src={user.picture.large}
          alt="pic"
          className="card-img-top img-thumbnail"
          width="500"
          height="600"
        />
        <div className="card-body">
          <h5>
            {user.name.first} {user.name.last}
          </h5>
          <p>{user.nat}</p>
          <Link className="btn btn-secondary" to={`/users/${id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
