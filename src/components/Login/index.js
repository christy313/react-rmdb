import React, { useContext, useState, useCallback } from "react";
// import { getMe, login } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

import {
  Login,
  LoginTitle,
  InputWrapper,
  Username,
  Password,
  Button,
  ErrorMessage
} from "./Login.styles";

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    // setErrorMessage(null);
    // login(username, password).then(data => {
    //   if (data.ok === 0) {
    //     return setErrorMessage(data.message);
    //   }
    //   setAuthToken(data.token);
    //   getMe().then(response => {
    //     if (response.ok !== 1) {
    //       setAuthToken(null);
    //       return setErrorMessage(response.toString());
    //     }
    //     setUser(response.data);
    //     navigate("/");
    //   });
    // });
  }, [username, password]);

  return (
    <Login onSubmit={handleSubmit}>
      <LoginTitle>LOGIN</LoginTitle>
      <InputWrapper>
        Username:&nbsp;
        <Username
          value={username}
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        Password:&nbsp;&nbsp;
        <Password
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Button>Login</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Login>
  );
}
