import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";

import Button from "./Button";
import { Wrapper } from "./Login.styles";
import Context from "../context";

const Login = () => {
  const handleSubmit = () => {};
  const handleInput = e => {};

  return (
    <Wrapper>
      <label htmlFor="">Username:</label>
      <input type="text" value="state" name="username" onChange={handleInput} />
      <input
        type="password"
        value="state"
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit}></Button>
    </Wrapper>
  );
};

export default Login;
