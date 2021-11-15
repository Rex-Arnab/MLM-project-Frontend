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
    const [loading, setLoading] = useState(false);

    const changePassword = () => {
        if (newPassword === reEnterPassword) {
            axios({
                method: "POST",
                data: {
                    token: localStorage.getItem("token"),
                    old_password: currentPassword,
                    new_password: newPassword,
                },
                withCredentials: true,
                url: "https://stormy-ridge-27884.herokuapp.com/change_password",
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    alert("Password changed successfully");
                }
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
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
                <Form.Group className="mb-3" controlId="formCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Current Password "
                        {...register("cpassword", {
                            required: "Current password is required",
                        })}
                        className="text-left pl-2 w-100"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="cpassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formNewPassword">
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
                        className="text-left pl-2 w-100"
                        value={newPassword}
                        onChange={(e) => setnewPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="npassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Comfirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Comfirmation Password"
                        {...register("compassword", {
                            required: "Re-enter your password",
                        })}
                        className="text-left pl-2 w-100"
                        value={reEnterPassword}
                        onChange={(e) => setReEnterPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="compassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />

                <Button
                    variant={newPassword === reEnterPassword ? "primary" : "danger"}
                    type="submit"
                    onClick={() => setLoading(true)}
                >
                    {loading ? "Loading..." : (newPassword === reEnterPassword ? "Change Password" : "Password not match")}
                </Button>
            </Form>
        </div>
    );
}

export default ChangPass;
