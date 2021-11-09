import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
function Activation() {
    const [noofid, setNumberOfId] = useState(0);
    const [perid, setPerid] = useState(0);
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
                        className="text-left pl-2"
                        value={noofid || 0}
                        onChange={(e) => setNumberOfId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Per ID: </Form.Label>
                    <Form.Control
                        type="number"
                        value={perid || 0}
                        className="text-left pl-2"
                        onChange={(e) => setPerid(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Final Amount: </Form.Label>
                    <Form.Control
                        type="text"
                        name="famount"
                        className="text-left pl-2"
                        value={noofid && perid ? noofid * perid : 0}
                    />
                </Form.Group>
                <Button
                    variant={noofid && perid ? "primary" : "secondary"}
                    type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Activation;
