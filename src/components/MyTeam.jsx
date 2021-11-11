import { useEffect, useState } from "react";
import axios from "axios";

function MyTeam({ team, setTeam }) {
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
    }, [user.referals]);
        return (
        <div className="section">
                <h1>This My team </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Referals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.referals.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}

export default MyTeam;
