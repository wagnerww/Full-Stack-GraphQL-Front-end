import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "react-apollo-hooks";
import { SIGNUP_USER } from "../../queries";

import Error from "../../components/Error";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

function SignUp({ history, refetch }) {
  const [user, setNewUser] = useState(INITIAL_STATE);

  const [addUser, { error, loading, data }] = useMutation(SIGNUP_USER);

  function clearState() {
    setNewUser(INITIAL_STATE);
  }

  function validateForm() {
    const { username, email, password, passwordConfirmation } = user;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;

    return isInvalid;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addUser({
      variables: {
        ...user
      }
    }).then(async data => {
      localStorage.setItem("token", data.data.signUpUser.token);
      await refetch();
      clearState();
      history.push("/");
    });
  }

  return (
    <div className="App">
      <h2 className="App">Signup</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={user.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
          onChange={handleChange}
          value={user.passwordConfirmation}
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

export default withRouter(SignUp);
