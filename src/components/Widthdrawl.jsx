import Activation from "./Activation";
import axios from "axios";
import { useState } from "react";


function Widthdrawl() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(user.wallet.main_wallet)
    const [success, setSuccess] = useState(false)
    const withdrawlBalance = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: {
                username: user.username,
                amount: amount,
                token: JSON.parse(localStorage.getItem("token"))
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/withdraw_from_main",
        }).then((response) => {
            user.wallet = response.data.balance;
            localStorage.setItem("user", JSON.stringify(user));
            setBalance(response.data.balance.main_wallet)
            setSuccess(true)
        });
    };

    return (
        <div className="section">
            <div
                className="alert alert-success text-center alert-dismissible fade show"
                role="alert"
                style={{ display: success ? "block" : "none" }}
            >
                Withdrawl Successful
                <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setSuccess(false)}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h1 className="withd-head">Withdrawal Balance</h1>
       
            <form onSubmit={withdrawlBalance}>
                <div className="form-group" key="formAvailableBalance">
                    <label>Available Balance</label>
                    <input
                        type="number"
                        className="form-control text-left pl-2 w-100"
                        placeholder="Available Balance"
                        value={balance}
                        disabled
                    />
                </div>

                <div className="form-group" key="formWithdrawalAmount">
                    <label>Withdrawal Amount</label>
                    <input
                        type="number"
                        className="form-control text-left pl-2 w-100"
                        placeholder="Enter Amount"
                        value={0 || amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>


                <div className="form-group" key="formFinalAmount">
                    <label>Final Amount</label>
                    <input
                        type="number"
                        className="form-control text-left pl-2 w-100"
                        placeholder="No Balance Found"
                        value={user.wallet.main_wallet - amount}
                        disabled
                    />
                </div>

                <button
                    type="submit"
                    className={user.wallet.main_wallet - amount >= 0 ? "btn btn-primary" : "btn btn-primary disabled"}
                    disabled={user.wallet.main_wallet - amount >= 0 ? false : true}
                >
                    {user.wallet.main_wallet - amount >= 0 ? "Withdraw" : "No Balance Found"}
                </button>

                       

            </form>
            <br />
            <br />
            <Activation />
        </div>
    );
}

export default Widthdrawl;
