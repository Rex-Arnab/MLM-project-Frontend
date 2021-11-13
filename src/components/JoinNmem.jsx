import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
function JoinNmem() {
    const {
        register,
        formState: { errors },
    } = useForm();
    const [regsiterUsername, setRegisterUsername] = useState("");
    const [regsiterName, setRegisterName] = useState("");
    const [regsiterPhone, setRegisterPhone] = useState("");
    const [regsiterEmail, setRegisterEmail] = useState("");
    const [regsiterAddar, setRegisterAddar] = useState("");
    const [regsiterHeadmem, setRegisterHeadmem] = useState("");

    const joinMem = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: {
                username: regsiterUsername,
                phone: regsiterPhone,
                email: regsiterEmail,
                aadhar: regsiterAddar,
                head: regsiterHeadmem,
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/register",
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="section">
            {/*  <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
            <h1 className="join-head">Join Members</h1>
            <Form onSubmit={joinMem}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="username"
                        {...register("uname", {
                            required: "Username is required",
                        })}
                        className="text-left pl-2"
                        value={regsiterUsername}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="uname"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        {...register("uname", {
                            required: "Name is required",
                        })}
                        className="text-left pl-2"
                        value={regsiterName}
                        onChange={(e) => setRegisterName(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="uname"
                    render={({ message }) => <p className="error">{message}</p>}
                />
           
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="phone no"
                        {...register("phone", {
                            required: "phone no is required",
                            minLength: {
                                value: 10,
                                message: "Phone number minimum 10 character",
                            },
                            maxLength: {
                                value: 10,
                                message: "Phone number maximum 10 character",
                            },
                        })}
                        className="text-left pl-2"
                        value={regsiterPhone}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="phone"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email", {
                            required: "Email number is required",
                        })}
                        className="text-left pl-2"
                        value={regsiterEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Aadhar No</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Addhar"
                        {...register("addhar", {
                            required: "Addhar number is required",

                            minLength: {
                                value: 12,
                                message: "Addhar number minimum 12 character",
                            },
                            maxLength: {
                                value: 16,
                                message: "Addhar numbe maximum 16 character",
                            },
                        })}
                        className="text-left pl-2"
                        value={regsiterAddar}
                        onChange={(e) => setRegisterAddar(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="addhar"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Head Member</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Head member"
                        {...register("head", {
                            required: "Head Member is required",
                        })}
                        className="text-left pl-2"
                        value={regsiterHeadmem}
                        onChange={(e) => setRegisterHeadmem(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="head"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default JoinNmem;
