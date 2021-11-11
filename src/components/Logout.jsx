import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        axios.post("https://stormy-ridge-27884.herokuapp.com/logout", { token: localStorage.getItem("token") })
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }, [navigate]);
    return (
        <div>
            <h1>Log Out Successful</h1>
        </div>
    );
}

export default Logout;
