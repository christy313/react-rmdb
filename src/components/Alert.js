import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";

const Alert = () => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success"
  });
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
