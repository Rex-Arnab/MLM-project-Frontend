import { useEffect } from "react";
import axios from "axios";

function MyTeam({team, setTeam}) {
    const user = JSON.parse(localStorage.getItem("user"));
    

    useEffect(() => {
        if (team.length === 0) {
            axios.post("https://stormy-ridge-27884.herokuapp.com/getUsers", {
            token: JSON.parse(localStorage.getItem("token")),
            userIds: user.referals,
        })
            .then(res => {
                setTeam(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [team, setTeam, user]);
        return (
        <div className="section">
                <h1>This My team </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">ID</th>
                            <th scope="col">Join Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.uid}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}

export default MyTeam;
