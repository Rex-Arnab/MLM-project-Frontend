import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";

function Widthdrawl() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(user.wallet.main_wallet)
    const [success, setSuccess] = useState(false)
    const [mainBalance, setMainBalance] = useState(user.wallet.main_wallet);
    const [loading, setLoading] = useState(false);

    const withdrawlBalance = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: {
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
            {/* WithDrawl Status Alert */}
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


            {/* Widthdrawl Form */}
            <h1 className="withd-head">Withdrawal Balance</h1>
       
            <form onSubmit={(e) => withdrawlBalance(e)}>
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

             <Form onSubmit={transferBalance} >
                 <h1>Main Wallet to Activation Wallet</h1>
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
                    {loading ? "Loading..." : "Transfer"}
                </button>

            </Form>
            <br/>
            <br/>
            <br />
       
            
        </div>
    );
}

export default Widthdrawl;
