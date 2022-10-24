import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API";

import Button from "../Button";
import { Wrapper } from "./Signup.styles";
import { Context } from "../../context";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, username });

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">Oops! Something went wrong!</div>}
      <label htmlFor="">Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <label htmlFor="">Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Signup" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Signup;
