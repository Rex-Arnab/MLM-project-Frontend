import ChangPass from "./ChangPass";
import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
function UpdatePro() {
    const {
        register,
        formState: { errors },
    } = useForm();
    const [regsiterBankname, setRegisterBankname] = useState("");
    const [regsiterAcountNo, setRegisterAccountNo] = useState("");
    const [regsiterIfsc, setRegisterIfsc] = useState("");
    const [regsiterHolder, setRegisterHolder] = useState("");
    const [regsiterBankbranch, setRegisterBankbranch] = useState("");
    const update = () => {
        axios({
            method: "POST",
            data: {
                username: "Anupam Roy",
                bank_name: regsiterBankname,
                account_number: regsiterAcountNo,
                account_holder_name: regsiterHolder,
                bank_branch: regsiterBankbranch,
                ifsc_code: regsiterIfsc,
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/update_bank_info",
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="section">
            <h1 className="update-head">Update Your Bank Information</h1>
            <Form onSubmit={update}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="SBI/AXIS/PNB/HDFC"
                        {...register("bank-name", {
                            required: "Bank Name is required",
                        })}
                        value={regsiterBankname}
                        onChange={(e) => setRegisterBankname(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="bank-name"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your bank account no"
                        {...register("account", {
                            required: "Account no is required",
                        })}
                        value={regsiterAcountNo}
                        onChange={(e) => setRegisterAccountNo(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="account"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter IFSC code"
                        {...register("ifsc", {
                            required: "IFSC code is required",
                        })}
                        value={regsiterIfsc}
                        onChange={(e) => setRegisterIfsc(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="ifsc"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Account Holder Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="holder-name"
                        {...register("holder-name", {
                            required: "Holder-name is required",
                        })}
                        value={regsiterHolder}
                        onChange={(e) => setRegisterHolder(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="holder-name"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Bank Branch</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Branch name"
                        {...register("branch", {
                            required: "Branch name is required",
                        })}
                        value={regsiterBankbranch}
                        onChange={(e) => setRegisterBankbranch(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="branch"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <ChangPass></ChangPass>
        </div>
    );
}

export default UpdatePro;
