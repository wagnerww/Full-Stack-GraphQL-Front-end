import React from "react";
import { withRouter } from "react-router-dom";
import { useApolloClient } from "react-apollo-hooks";

function SignOut({ history }) {
  const client = useApolloClient();

  function handleSignOut() {
    localStorage.setItem("token", "");
    client.resetStore();
    history.push("/");
  }

  return <button onClick={handleSignOut}>SignOut</button>;
}

export default withRouter(SignOut);
