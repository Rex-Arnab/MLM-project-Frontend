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
                    <Form.Control type="text" name="wallet" defaultValue={user.wallet.main_wallet} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Withdrawal
                </Button>
            </Form>
        </div>
    );
}

export default Transfer;
