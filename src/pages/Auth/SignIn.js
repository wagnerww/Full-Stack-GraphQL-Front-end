import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { SIGNIN_USER } from "../../queries";

import Error from "../../components/Error";

const INITIAL_STATE = {
  username: "",
  password: ""
};

export default function SignIn() {
  const [user, setNewUser] = useState(INITIAL_STATE);

  const [SignUser, { error, loading, data }] = useMutation(SIGNIN_USER);

  function clearState() {
    setNewUser(INITIAL_STATE);
  }

  function validateForm() {
    const { username, password } = user;
    const isInvalid = !username || !password;

    return isInvalid;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    SignUser({
      variables: {
        ...user
      }
    }).then(data => {
      console.log("data", data);
      clearState();
    });
  }

  return (
    <div className="App">
      <h2 className="App">Sigin</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={user.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <button
          type="submit"
          className="button-primary"
          disabled={loading || validateForm()}
        >
          Submit
        </button>
        {error && <Error error={error} />}
      </form>
    </div>
  );
}
