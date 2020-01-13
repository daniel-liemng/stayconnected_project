import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="container mt-4">
      <p className="lead">Navigation Error!!!</p>
      <Link className="btn btn-secondary">Back Home</Link>
    </section>
  );
};

export default Error;
