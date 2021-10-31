import React from 'react'
import { Link } from 'react-router-dom';

const PayConfirmation = () => {
    return (
        <div>
            <div>Thanks for submitting the payment</div>
            <Link to="/">View Balance</Link>
        </div>
    )
}

export default PayConfirmation;
