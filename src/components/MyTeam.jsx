import { useEffect } from "react";
import axios from "axios";

function MyTeam({team, setTeam}) {
    const user = JSON.parse(localStorage.getItem("user"));
    

    useEffect(() => {
        if (team.length === 0) {
            axios.post("https://stormy-ridge-27884.herokuapp.com/getUsers", {
            token: localStorage.getItem("token"),
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
                {team.length > 0 ? (
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">My Team</span>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>ID</th>
                                                <th>Join Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {team.map((member, index) => (
                                                <tr key={member._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{member.name}</td>
                                                    <td>{member.uid}</td>
                                                    <td>{new Date(member.created_at).toLocaleDateString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="text-center">
                            <h3>No Referals</h3>
                            <p>You have no referals yet</p>
                        </div>
                    )}
        </div>
    );
}

export default MyTeam;
