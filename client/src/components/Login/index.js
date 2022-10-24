import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API";

import Button from "../Button";
import { Wrapper } from "./Login.styles";
import { Context } from "../../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(requestToken, email, password);
      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, email });

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">Oops! Something went wrong!</div>}
      <h2>Login</h2>
      <label htmlFor="email">email:</label>
      <input type="email" value={email} name="email" onChange={handleInput} />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
