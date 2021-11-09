import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
function Activation() {
    const [noofid, setNumberOfId] = useState(0);
    const [perid, setPerid] = useState();
    return (
        <div className="active-container">
            <h1 className="active-head">Activation Wallet Recharge</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Number Of ID: </Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        placeholder="Enter number of id "
                        onChange={(e) => setNumberOfId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Per ID: </Form.Label>
                    <Form.Control
                        type="number"
                        value={perid}
                        onChange={(e) => setPerid(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Final Amount: </Form.Label>
                    <Form.Control
                        type="text"
                        name="famount"
                        defaultValue={noofid * perid}
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Activation;
