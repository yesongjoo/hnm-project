import React from "react";
import { Navigate } from "react-router-dom";

const PrivitRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivitRoute;
