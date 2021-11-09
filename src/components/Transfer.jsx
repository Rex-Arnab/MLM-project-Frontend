import { Button, Form } from "react-bootstrap";

function Transfer() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="section">
            <h1 className="trans-head">
                Transfer: Main Wallet to Activation Wallet{" "}
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Main Wallet Balance:</Form.Label>
                    <Form.Control type="text" name="wallet" defaultValue={user.wallet.main_wallet} className="text-left pl-2"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="text" className="text-left pl-2" />
                </Form.Group>

                <Button
                    variant={user.wallet.main_wallet < 100 ? "danger" : "success"}
                    type="submit">
                    Withdrawal
                </Button>
            </Form>
        </div>
    );
}

export default Transfer;
