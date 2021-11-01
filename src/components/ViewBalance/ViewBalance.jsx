import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { ApiCall } from "../../Api/Axios";
import { Button, TextField, CircularProgress } from "@mui/material";
import Styles from "./styles.module.css";

const ViewBalance = () => {
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState({
    balLoading: true,
    payLoading: false,
  });
  const history = useHistory();

  useEffect(() => {
    ApiCall.get("/viewBalance")
      .then((res) => {
        setBalance(res?.data?.balance);
        setIsLoading({ ...isLoading, balLoading: false });
      })
      .catch((err) => setBalance("Unable to fetch balance"));
  }, []);

  const handleAmountChange = (e) => {
    const isNum = /^[0-9\b]+$/;
    if (isNum.test(e.target.value)) {
      setAmount(Number(e.target.value));
    }
  };

  const handlePayment = () => {
    if (amount) {
      setAmount("");
      setIsLoading({ ...isLoading, payLoading: true });
      const data = {
        balance: balance + amount,
      };

      ApiCall.post("/viewBalance", data)
        .then((res) => {
          setIsLoading({ ...isLoading, payLoading: false });
          history.push("/payConfirmation");
        })
        .catch((err) => setIsLoading({ ...isLoading, payLoading: false }));
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.balContainer}>
        <div className={Styles.viewBalContainer}>
          <label className={Styles.balAmount}>Balance</label>:
          {isLoading.balLoading ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <strong>{balance}</strong>
          )}
        </div>
        <TextField
          id="outlined-basic"
          label="Enter amount"
          variant="outlined"
          value={amount}
          onChange={handleAmountChange}
        />
        <Button variant="contained" onClick={handlePayment}>
          {isLoading.payLoading ? "Processing Payment..." : "Pay now"}
        </Button>
      </div>
    </div>
  );
};

export default ViewBalance;
