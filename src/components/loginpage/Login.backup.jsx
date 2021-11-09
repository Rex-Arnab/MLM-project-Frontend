import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [action, setAction] = useState(true);
    useEffect(() => {
        axios
            .post("https://stormy-ridge-27884.herokuapp.com/login", {
                username: userName,
                password: password,
            })

            .then((res) => {
                if (res.data.status === "Successful") {
                    console.log("we are done");
                } else {
                    console.log("UnSuccessful");
                }
            })
            .catch((err) => console.error("API not found", err));
        console.log("running");
    }, [action]);

    const checkLogin = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            data: {
                username: userName,
                password,
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/login",
        }).then((response) => {
            console.log(response);
        });
    };
    useEffect(() => {
        axios
            .get("https://stormy-ridge-27884.herokuapp.com/balance")
            .then((data) => console.log(data))
            .catch((err) => console.error("API not found", err));
    }, [action]);

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
                    <h5 className="text-muted">Welcome Back</h5>
                    <button onClick={(e) => setAction(!action)}>
                        Show balance
                    </button>
                    <h4 className="featurette-heading">
                        Login to Your Account
                    </h4>
                    <form onSubmit={checkLogin}>
                        <div className="login ml-5">
                            <h1>Login</h1>
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <button className="button" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
