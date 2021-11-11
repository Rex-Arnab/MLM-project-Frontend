import { useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    useEffect(() => {
        console.log("IN DASHBOARD")
        if (!user) {
            navigate("/user/logout");
        }
    }, [navigate, user]);
    return (
        <div>
            <div className="d-flex flex-column">
                <div className="p-2">
                    <h5 className="text-black">Name: { user.username }</h5>
                    <h5 className="text-black">ID: { user.uid} </h5>
                    <h5 className="text-black">Joining Date:{ new Date(user.created_at).toLocaleDateString()}</h5>
                </div>
            </div>
            
            <div className="d-flex flex-column">
                <div className="text-center">
                    <h4>
                        <b className="text-black">Offers Provided By Company</b>
                    </h4>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="grid-container d-flex flex-wrap justify-content-center">
                            <div className="grid-item my-3 py-3 cardRem">
                                Refarel Income
                            </div>
                            <div className="grid-item my-3 py-3 cardRem">
                                Joing Income
                            </div>
                            <div className="grid-item my-3 py-3 cardRem">
                                Level Income
                            </div>
                            <div className="grid-item my-3 py-3 cardRem">
                                Total Income
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="grid-container d-flex flex-wrap justify-content-center">
                            <div className="grid-item my-3 py-3 cardRem">
                                Main Income
                            </div>
                            <div className="grid-item my-3 py-3 cardRem">
                                Active Income
                            </div>
                            <div className="grid-item my-3 py-3 cardRem">
                                Offer Income
                            </div>
                            <div className="grid-item my-3 py-3 cardRem">
                                Global Income
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
