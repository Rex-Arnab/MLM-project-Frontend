import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
function Logout({setTeam}) {
    let history = useHistory();
    useEffect(() => {
        axios.post("https://stormy-ridge-27884.herokuapp.com/logout", { token: localStorage.getItem("token") })
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setTeam([]);
        history.push("/");
    });
    return (
        <div>
            <h1>Log Out Successful</h1>
        </div>
    );
}

export default Logout;
