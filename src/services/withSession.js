import React from "react";
import { useQuery } from "react-apollo-hooks";

import { GET_CURRENT_USER } from "../queries";

const withSession = Component => props => {
  const { error, loading, data, refetch } = useQuery(GET_CURRENT_USER);
  if (loading) return null;

  console.log("data", data);

  return <Component {...props} refetch={refetch} session={data} />;
};

export default withSession;
