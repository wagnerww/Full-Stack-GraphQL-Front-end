import React from "react";

import { useQuery } from "react-apollo-hooks";
import { Redirect } from "react-router-dom";
import { GET_CURRENT_USER } from "../queries";

export default function WithAuth(conditionalFunc, Component, props) {
  const { error, loading, data } = useQuery(GET_CURRENT_USER);
  if (loading) return null;

  return conditionalFunc(data) ? <Component {...props} /> : <Redirect to="/" />;
}
