import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "white" }}
        onClick={handelSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
