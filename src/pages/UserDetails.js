import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
// import ReactMapGL from "react-map-gl";

import { UserContext } from "../context/users";

import DoAgain from "../components/DoAgain";

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);

  // const [viewport, setViewport] = useState({
  //   latitude: 0,
  //   longitude: 0,
  //   width: "400px",
  //   height: "300px",
  //   zoom: 10
  // });

  const { getUser } = useContext(UserContext);
  const choseUser = getUser(id)[0];
  if (!choseUser) {
    return <DoAgain />;
  }

  return (
    <div className="container">
      <h3 className="display-4 text-center mx-3">User Profile</h3>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={choseUser.picture.large}
                alt={choseUser.name.last}
                width="100%"
              />
              <button
                type="button"
                className="btn btn-secondary mt-3"
                data-toggle="modal"
                data-target="#userLocation"
              >
                Connect Me
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="userLocation"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalLabel">
                        Let's Connect
                      </h5>
                      <button
                        className="close"
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken="pk.eyJ1IjoiaGxpZW0iLCJhIjoiY2s1YmdxeXFpMHg2bDNtbjNjNnZxMzV1cSJ9.kGELjIKwKDsQy5g_X1fMlA"
                        mapStyle="mapbox://styles/hliem/ck5bid78b0s4a1cp263szl2ph"
                        onViewportChange={viewport => {
                          setViewport(viewport);
                        }}
                      ></ReactMapGL> */}
                      <p>
                        Hi! My name is {choseUser.name.first}{" "}
                        {choseUser.name.last}
                      </p>
                      <p>
                        Let's connect with me at{" "}
                        <strong>{choseUser.email}</strong> or text me at{" "}
                        <strong>{choseUser.cell}</strong>
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">
                {choseUser.name.first} {choseUser.name.last}
              </h2>
              <div className="accordion" id="userAccordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Personal Information
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#userAccordion"
                  >
                    <div className="card-body">
                      <p>Title: {choseUser.name.title}</p>
                      <p>Gender: {choseUser.gender}</p>
                      <p>
                        DOB:{" "}
                        {moment(`${choseUser.dob.date}`).format("MMMM Do YYYY")}
                      </p>
                      <p>Age: {choseUser.dob.age}</p>
                      <p>Country: {choseUser.nat}</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Contact Information
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#userAccordion"
                  >
                    <div className="card-body">
                      <p>
                        Address: {choseUser.location.street.number}{" "}
                        {choseUser.location.street.name}
                      </p>

                      <p> City: {choseUser.location.city}</p>
                      <p>State: {choseUser.location.state}</p>
                      <p> Country: {choseUser.location.country}</p>
                      <p>Postal Code: {choseUser.location.postcode}</p>
                      <hr />
                      <p>Home Phone: {choseUser.phone}</p>
                      <p>Cell Phone: {choseUser.cell}</p>
                    </div>
                  </div>
                </div>
                {/*
                 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Account Information
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#userAccordion"
                  >
                    <div className="card-body">
                      <p>Username: {choseUser.login.username}</p>
                      <p>Email: {choseUser.email}</p>
                      <p>Password: {choseUser.login.password}</p>
                      <p>
                        Registered:{" "}
                        {moment(`${choseUser.registered.date}`).format(
                          "MMMM Do YYYY"
                        )}{" "}
                        -{" "}
                        <strong>
                          {" "}
                          It means{" "}
                          {moment(
                            `${choseUser.registered.date}`,
                            "YYYYMMDD"
                          ).fromNow()}{" "}
                          from now
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
