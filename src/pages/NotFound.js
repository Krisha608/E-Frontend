import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h4 className="text-red">Not Found</h4>
      <Link to="/">Go Back </Link>
    </>
  );
};

export default NotFound;