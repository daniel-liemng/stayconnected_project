import React from "react";

const About = () => {
  return (
    <div className="container">
      <h3 className="text-center display-3">About</h3>
      <div className="jumbotron">
        <h3 className="display-4">This is a "Stay Connected" app.</h3>
        <p className="lead">
          A list of random users is fetched for you to review.
        </p>
        <p className="lead">
          There is a statistic of nationalities of users in the list. User can
          review which nationalities are included in the list.
        </p>
        <p className="lead">
          User can switch between the pages to view all users.
        </p>
        <p className="lead">
          User can review profile of a specific user and get connected.
        </p>
        <p className="lead">
          <strong>
            This app uses public API to fetch random users, React for Fronend
            and ContextAPI/Hooks for communication among components.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
