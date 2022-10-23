import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
// import { setAlert } from "../Alert";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelSubmit = async () => {
    if (password !== confirmPassword) {
      // setAlert({
      //   open: true,
      //   message: "password do not match",
      //   type: "error"
      // });
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // handleClose();
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

      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "white" }}
        onClick={handelSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
