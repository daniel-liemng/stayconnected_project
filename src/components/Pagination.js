import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  // console.log(usersPerPage);
  // console.log(totalUsers);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="container">
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <button
                onClick={e => {
                  e.preventDefault();
                  paginate(number);
                }}
                href="!#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
