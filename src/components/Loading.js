import React from "react";

import loading from "../assets/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
