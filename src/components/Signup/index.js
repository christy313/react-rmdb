import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { Wrapper } from "./Signup.styles";
import { Context } from "../../context";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username || !password || !email) return setError(true);
    fetch("https://react-rmdb-backend-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          setUser({
            id: user.id,
            username: user.username,
            email: user.email
          });
          navigate("/");
        }
      })
      .catch(err => console.log(err));
  };

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">Oops! Something went wrong!</div>}
      <h2>Sign Up</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />

      <label htmlFor="email">Email:</label>
      <input type="email" value={email} name="email" onChange={handleInput} />

      <label htmlFor="password">Password:</label>
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
