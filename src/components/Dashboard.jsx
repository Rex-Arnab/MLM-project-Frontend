import { useEffect } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const promotion = localStorage.getItem("promotion");
  const global = localStorage.getItem("globalCount");
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/logout");
    }
    axios
      .post("https://stormy-ridge-27884.herokuapp.com/getUser", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("user", JSON.stringify(res.data.data));
        }
      });
  }, [history, user]);
  return (
    <div className="section">
      <nav className="navbar text-white bg-dark d-flex justify-content-between flex-s-column flex-md-row">
        <div className="bg-danger p-2">ID : {user.uid}</div>
        <div className="p-2">{user.username}</div>
        <div className="p-2">
          {new Date(user.created_at).toLocaleDateString()}
        </div>
      </nav>

      {promotion !== "off" && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <h4 className="alert-heading text-center">{promotion}</h4>
        </div>
      )}

      <div className="container" style={{ padding: "1rem 0" }}>
        <div className="row">
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Referal Income</span>
            <h5 className="text-black">0</h5>
          </div>
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Joing Income</span>
            <h5 className="text-black">50</h5>
          </div>
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Level Income</span>
            <h5 className="text-black">0</h5>
          </div>
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Total Income</span>
            <h5 className="text-black">
              {Object.values(user.wallet).reduce(
                (total, balance) => total + balance,
                0
              )}
            </h5>
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Main Wallet</span>
            <h5 className="text-black">{user.wallet.main_wallet}</h5>
          </div>
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Activation wallet</span>
            <h5 className="text-black">{user.wallet.activation_wallet}</h5>
          </div>
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Offer Income</span>
            <h5 className="text-black">{user.wallet.offer_wallet}</h5>
          </div>
          <div
            className="col-md-2 col-sm-12 card card-hover-shadow h-100 m-2 p-2"
            style={{ backgroundColor: "rgb(50, 155, 247)" }}
          >
            <span>Global Joining</span>
            <h5 className="text-black">{global - user.uid}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
