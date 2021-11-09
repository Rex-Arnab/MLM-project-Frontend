import { useState } from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { Link } from "react-router-dom";
function Register() {
    const {
        register,
        formState: { errors },
    } = useForm();
    const [registerName, setRegisterName] = useState("");
    const [regsiterEmail, setRegisterEmail] = useState("");
    const [regsiterPassword, setRegisterPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");
    const Regis = () => {
        if (regsiterPassword === reEnterPassword) {
            axios({
                method: "POST",
                data: {
                    name: registerName,
                    email: regsiterEmail,
                    password: regsiterPassword,
                },
                withCredentials: true,
                url: "https://stormy-ridge-27884.herokuapp.com/update_bank_info",
            }).then((response) => {
                console.log(response);
            });
            alert("Register Successfull");
        } else {
            alert("password not match");
        }
    };

    return (
        <div className="">
            <div className="row featurette sizing d-flex justify-content-center align-items-center">
                <div className="col-md-5 order-md-1 ">
                    <img
                        src="https://source.unsplash.com/user/erondu/800x1000"
                        alt=""
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    />
                </div>
                <div className="col-md-4 order-md-2 mt-5">
                    <h5 className="text-muted">Welcome</h5>
                    <h4 className="featurette-heading">
                        Register Your Account
                    </h4>
                    <div className="register ml-5">
                        <h1>Register</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            onChange={(e) => setRegisterName(e.target.value)}
                        ></input>
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ message }) => (
                                <p className="error">{message}</p>
                            )}
                        />
                        <input
                            type="text"
                            placeholder="Your Email"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        ></input>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => (
                                <p className="error">{message}</p>
                            )}
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            {...register("pass", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "password minimum 6 character ",
                                },
                                maxLength: {
                                    value: 12,
                                    message: "password maximum 12 character",
                                },
                            })}
                            onChange={(e) =>
                                setRegisterPassword(e.target.value)
                            }
                        ></input>
                        <ErrorMessage
                            errors={errors}
                            name="pass"
                            render={({ message }) => (
                                <p className="error">{message}</p>
                            )}
                        />
                        <input
                            type="password"
                            placeholder="Re-enter Password "
                            {...register("rpass", {
                                required: "Re-enter your password",
                            })}
                            onChange={(e) => setReEnterPassword(e.target.value)}
                        ></input>
                        <ErrorMessage
                            errors={errors}
                            name="rpass"
                            render={({ message }) => (
                                <p className="error">{message}</p>
                            )}
                        />
                        <div
                            className="button"
                            onClick={() => Regis()}
                        >
                            <Link to="/login">Register</Link>
                        </div>
                        <div>or</div>
                        <div className="button">
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
