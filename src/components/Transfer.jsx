import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Transfer() {

    const user = JSON.parse(localStorage.getItem("user"));
    const [amount, setAmount] = useState(0);
    const [mainBalance, setMainBalance] = useState(user.wallet.main_wallet);
    const [loading, setLoading] = useState(false);

    const transferBalance = (e) => {
        e.preventDefault();
        axios.post("https://stormy-ridge-27884.herokuapp.com/transfer_to_activation", {
            token: JSON.parse(localStorage.getItem("token")),
            amount: parseInt(amount)
        }).then(res => {
            user.wallet = res.data.balance;
            setMainBalance(res.data.balance.main_wallet);
            localStorage.setItem("user", JSON.stringify(user));
            setLoading(false);
        }).catch(err => {
                console.log(err);
        })
    }

    return (
        <div className="section">
            <h1 className="trans-head">
                Activation Wallet Recharge
            </h1>
            <Form onSubmit={transferBalance} >
                <div className="form-group" key="formMainBalance">
                    <label>Main Wallet Balance:</label>
                    <input
                        type="text"
                        className="form-control text-left"
                        placeholder="Main Wallet Balance"
                        value={mainBalance}
                        disabled
                    />
                </div>

                <div className="form-group" key="formAmount">
                    <label>Amount:</label>
                    <input
                        type="text"
                        className="form-control w-100 text-left"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                        value={amount}
                    />
                </div>


                <button
                    className={`btn btn-primary ml-3 ${loading ? "disabled" : ""}`}
                    onClick={() => setLoading(true)}
                >
                    {loading ? "Loading..." : "Withdrawal"}
                </button>

            </Form>
        </div>
    );
}

export default Transfer;
