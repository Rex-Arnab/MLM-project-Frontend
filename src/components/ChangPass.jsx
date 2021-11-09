import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
function ChangPass() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");

    const changePassword = () => {
        if (newPassword === reEnterPassword) {
            axios({
                method: "POST",
                data: {
                    username: "Arnab Biswas",
                    old_password: currentPassword,
                    new_password: newPassword,
                },
                withCredentials: true,
                url: "https://stormy-ridge-27884.herokuapp.com/change_password",
            }).then((response) => {
                console.log(response);
            });
            alert("Password change Sucessfull");
        } else {
            alert("password not match");
        }
    };
    const onSubmit = (data) => {
        changePassword();
    };
    return (
        <div className="change-container">
            <h1 className="change-head">Change Password</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Current Password "
                        {...register("cpassword", {
                            required: "Current password is required",
                        })}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="cpassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your new password"
                        {...register("npassword", {
                            required: "Enter your new password",
                            maxLength: {
                                value: 12,
                                message: "password maximum 12 character",
                            },
                        })}
                        value={newPassword}
                        onChange={(e) => setnewPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="npassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Comfirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Comfirmation Password"
                        {...register("compassword", {
                            required: "Re-enter your password",
                        })}
                        value={reEnterPassword}
                        onChange={(e) => setReEnterPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="compassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ChangPass;
