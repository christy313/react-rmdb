import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signUp, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../context";

import {
  SignUp,
  SignUpTitle,
  InputWrapper,
  Nickname,
  Username,
  Password,
  Button,
  ErrorMessage
} from "./SignUp.styles";

export default function SignUpPage() {
  const { user, setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const handleSignUp = useCallback(() => {
    // setErrorMessage(null);
    // signUp(nickname, username, password).then(data => {
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
  }, [nickname, username, password]);

  return (
    <SignUp onSubmit={handleSignUp}>
      <SignUpTitle>SIGN UP</SignUpTitle>
      <InputWrapper>
        Nickname:&nbsp;
        <Nickname
          value={nickname}
          type="text"
          onChange={e => setNickname(e.target.value)}
        />
      </InputWrapper>
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
      <Button>Sign Up</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignUp>
  );
}
