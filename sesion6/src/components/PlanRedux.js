import React from "react";
import { Link } from "react-router-dom";

const PlanRedux = (props) => {
  const {
    match: { url }
  } = props;

  return (
    <div>
      <h1>Redux</h1>
      <Link to={`${url}/ejemplo1`}>Ejemplo1</Link>
      <br />
      <Link to={`${url}/ejemplo2`}>Ejemplo2</Link>
    </div>
  );
}

export default PlanRedux;