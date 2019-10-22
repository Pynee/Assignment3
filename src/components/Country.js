import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const country = props => {
  return (
    <div className="card m-2 flex-fill">
      <div className="card-body">
        <div className="text-dark">{props.name}</div>
        <div className="text-dark">Population: {props.population}</div>
      </div>
    </div>
  );
};

export default country;
