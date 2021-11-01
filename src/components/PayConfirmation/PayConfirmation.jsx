import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Styles from "./styles.module.css";
import { Constants } from "../../Constants";

const PayConfirmation = () => {
  return (
    <div className={Styles.container}>
      <div>{Constants.paySuccess}</div>
      <Button variant="contained">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          {Constants.viewBalance}
        </NavLink>
      </Button>
    </div>
  );
};

export default PayConfirmation;
