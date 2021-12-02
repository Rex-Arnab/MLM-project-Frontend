import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Razorpay from "./Razorpay";
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
  const user = JSON.parse(localStorage.getItem("user"));

  const buyIDsFromActivationWallet = (e) => {
    e.preventDefault();
    axios
      .post("https://stormy-ridge-27884.herokuapp.com/getUser", {
        token: localStorage.getItem("token"),
      })
      .then((check) => {
        user.wallet = check.data.wallet;
      })
      .then(() => {
        // axios.post("https://stormy-ridge-27884.herokuapp.com/register",{
        axios
          .post("https://stormy-ridge-27884.herokuapp.com/register", {
            token: localStorage.getItem("token"),
            username: regsiterUsername,
            name: regsiterName,
            phone: regsiterPhone,
            email: regsiterEmail,
            aadhar: regsiterAddar,
            head: regsiterHeadmem,
            type: "activation",
          })
          .then((resp) => {
            if (resp.status === 200) {
              alert(resp.data.message);
              user.wallet = resp.data.wallet;
              localStorage.setItem("user", JSON.stringify(user));
            } else {
              alert("Account Not Created");
            }
          })
          .catch((err) => {
            alert("Error : ", err);
          });
      });
  };

  return (
    <div className="section">
      <h1 className="join-head">Join Members</h1>
      <Form>
        <Form.Group className="mb-3" controlId="fromRegisterUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            {...register("uname", {
              required: "Username is required",
            })}
            className="text-left pl-2 w-100"
            value={regsiterUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </Form.Group>
        <ErrorMessage
          errors={errors}
          name="uname"
          render={({ message }) => <p className="error">{message}</p>}
        />
        <Form.Group className="mb-3" controlId="fromRegisterName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
            })}
            className="text-left pl-2 w-100"
            value={regsiterName}
            onChange={(e) => setRegisterName(e.target.value)}
          />
        </Form.Group>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="error">{message}</p>}
        />

        <Form.Group className="mb-3" controlId="fromRegisterPhone">
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
            className="text-left pl-2 w-100"
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
            className="text-left pl-2 w-100"
            value={regsiterEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </Form.Group>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p className="error">{message}</p>}
        />
        <Form.Group className="mb-3" controlId="formRegisterAadhar">
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
            className="text-left pl-2 w-100"
            value={regsiterAddar}
            onChange={(e) => setRegisterAddar(e.target.value)}
          />
        </Form.Group>
        <ErrorMessage
          errors={errors}
          name="addhar"
          render={({ message }) => <p className="error">{message}</p>}
        />
        <Form.Group className="mb-3" controlId="fromRegisterHeadMember">
          <Form.Label>Head Member</Form.Label>
          <Form.Control
            type="text"
            placeholder="Head member"
            {...register("head", {
              required: "Head Member is required",
            })}
            className="text-left pl-2 w-100"
            value={regsiterHeadmem}
            onChange={(e) => setRegisterHeadmem(e.target.value)}
          />
        </Form.Group>
        <ErrorMessage
          errors={errors}
          name="head"
          render={({ message }) => <p className="error">{message}</p>}
        />
        <div className="w-50 paySection">
          <Razorpay
            amount={localStorage.getItem("id_price")}
            userDetail={{
              uname: regsiterUsername,
              name: regsiterName,
              phone: regsiterPhone,
              email: regsiterEmail,
              addhar: regsiterAddar,
              head: regsiterHeadmem,
              type: "joinMember",
            }}
            text="Pay Now"
          />
          <span className="mr-2">OR</span>
          {/*<Razorpay amount={localStorage.getItem("id_price")} userDetail={{
                        uname: regsiterUsername,
                        name: regsiterName,
                        phone: regsiterPhone,
                        email: regsiterEmail,
                        addhar: regsiterAddar,
                        head: regsiterHeadmem
                            
                    }}
                        text="Pay with Activation wallet"
                    />*/}
          <button
            className="btn btn-primary"
            onClick={buyIDsFromActivationWallet}
            disabled={
              user.wallet.activation_wallet < localStorage.getItem("id_price")
            }
          >
            Pay with Activation wallet
          </button>
        </div>
      </Form>
    </div>
  );
}

export default JoinNmem;
