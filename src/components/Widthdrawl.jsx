import { Button, Form } from "react-bootstrap";
import Activation from "./Activation";
import axios from "axios";
import { useState } from "react";


function Widthdrawl() {
    const [amount, setAmount] = useState(0)
    const user = JSON.parse(localStorage.getItem("user"));
    const withdrawl = () => {
        axios({
            method: "POST",
            data: {
                username: "Arnab Biswas",
                amount: 10,
                //amount: 525
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/withdraw_from_main",
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="section">
            <h1 className="withd-head">Withdrawal Balance</h1>
            <Form onSubmit={withdrawl}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Available Balance</Form.Label>
                    <Form.Control type="number" defaultValue={user.wallet.main_wallet} className="text-left pl-2"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Withdrawal Amount</Form.Label>
                    <Form.Control type="number" className="text-left pl-2"
                        value={0 || amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Final Amount</Form.Label>
                    <Form.Control type="number" className="text-left pl-2"
                        value={user.wallet.main_wallet - amount}
                        disabled
                    />
                </Form.Group>
                <Button
                    variant={user.wallet.main_wallet - amount < 1 ? "danger" : "success"}
                    disabled={user.wallet.main_wallet - amount < 1}
                    type="submit">
                    Withdrawal
                </Button>
            </Form>
            <br />
            <br />
            <Activation />
        </div>
    );
}

export default Widthdrawl;
