import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { ApiCall } from "./Api/Axios";

const ViewBalance = () => {
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState("");
  //   const [valid, setValid] = useState("");
  const [isLoading, setIsLoading] = useState({
    balLoading: true,
    payLoading: false,
  });
  const history = useHistory();
  // const { oktaAuth } = useOktaAuth();
  // const [success, setSuccess] = useState('');

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
      //   handleValidation();
    }
  };

  //   const handleValidation = () => {
  //     amount >= 100 ? setValid("") : setValid("Amount should be min 100");
  //   };

  const handlePayment = () => {
    // setBalance((preBal) => preBal + amount);
    if (amount) {
      setAmount("");
      setIsLoading({ ...isLoading, payLoading: true });
      const data = {
        balance: balance + amount,
      };

      ApiCall.post("/viewBalance", data)
        .then((res) => {
          setIsLoading({ ...isLoading, payLoading: false });

          // setBalance(res?.data?.balance)
          history.push("/payConfirmation");
          // setSuccess('Amout added successfully');
        })
        .catch((err) => setIsLoading({ ...isLoading, payLoading: false }));
    }
  };

  // const handleLogout = async () => {
  //    await oktaAuth.tokenManager.clear();
  //     history.push('/login');
  // }

  return (
    <div>
      <label>
        Balance : {isLoading.balLoading ? "loading balance..." : balance}
      </label>
      <input
        type="text"
        name="amount"
        value={amount}
        onChange={handleAmountChange}
        placeholder="enter amount"
      />
      {/* {valid} */}
      <button type="button" onClick={handlePayment}>
        {isLoading.payLoading ? "Processing Payment..." : "Pay now"}
      </button>
      {/* <Link to="/protected"><button type="button" onClick={handlePayment}>Pay now</button></Link> */}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default ViewBalance;
