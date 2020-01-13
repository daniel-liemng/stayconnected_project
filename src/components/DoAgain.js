import React from "react";
import { Link } from "react-router-dom";

const DoAgain = () => {
  return (
    <div className="text-center mt-5">
      <h2>Go back to Home And Choose Again</h2>
      <Link className="btn btn-secondary my-3" to="/">
        Back Home
      </Link>
    </div>
  );
};

export default DoAgain;
