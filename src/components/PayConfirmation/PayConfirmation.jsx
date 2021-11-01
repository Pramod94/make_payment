import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Styles from "./styles.module.css";

const PayConfirmation = () => {
  return (
    <div className={Styles.container}>
      <div>Thanks for submitting the payment!</div>
      <Button variant="contained">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          View Balance
        </NavLink>
      </Button>
    </div>
  );
};

export default PayConfirmation;
