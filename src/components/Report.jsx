import { useEffect, useState } from "react";
import axios from "axios";

function Report() {
    return (
        <div className="section">
            <h2>My Report</h2>
            <LevelReport />
            <TransactionHistory />
            <WidthdrawlHistory />
        </div>
    );
}

const LevelReport = () => {
    // const [level, setLevel] = useState([]);
    return (
        <div className="section">
            <h3>Level Report</h3>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Level</th>
                                <th>Direct</th>
                                <th>Income</th>
                                <th>Days</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="table-success">
                                <td>Bronze Star</td>
                                <td>100</td>
                                <td>1</td>
                                <td>40</td>
                                <td>30</td>
                                <td>1200</td>
                            </tr>
                            <tr>
                                <td>Silver Star</td>
                                <td>200</td>
                                <td>1</td>
                                <td>50</td>
                                <td>30</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Gold Star</td>
                                <td>400</td>
                                <td>3</td>
                                <td>80</td>
                                <td>30</td>
                                <td>2400</td>
                            </tr>
                            <tr>
                                <td>Pearl Star</td>
                                <td>600</td>
                                <td>5</td>
                                <td>110</td>
                                <td>30</td>
                                <td>3300</td>
                            </tr>
                            <tr>
                                <td>Emerald Star</td>
                                <td>800</td>
                                <td>7</td>
                                <td>140</td>
                                <td>40</td>
                                <td>5600</td>
                            </tr>
                            <tr>
                                <td>Ruby Star</td>
                                <td>1000</td>
                                <td>9</td>
                                <td>170</td>
                                <td>40</td>
                                <td>6800</td>
                            </tr>
                            <tr>
                                <td>Platinum Star</td>
                                <td>1200</td>
                                <td>11</td>
                                <td>200</td>
                                <td>40</td>
                                <td>8000</td>
                            </tr>
                            <tr>
                                <td>Diamond Star</td>
                                <td>1400</td>
                                <td>13</td>
                                <td>230</td>
                                <td>40</td>
                                <td>9200</td>
                            </tr>
                            <tr>
                                <td>Royal Star</td>
                                <td>1600</td>
                                <td>15</td>
                                <td>260</td>
                                <td>60</td>
                                <td>15600</td>
                            </tr>
                            <tr>
                                <td>Crown Star</td>
                                <td>1800</td>
                                <td>17</td>
                                <td>290</td>
                                <td>60</td>
                                <td>17400</td>
                            </tr>
                            <tr>	
                                <td>King</td>
                                <td>2000</td>
                                <td>19</td>
                                <td>320</td>
                                <td>60</td>
                                <td>19200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>


        </div>
    );
}

const TransactionHistory = () => {
    const [txd, setTxd] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        axios.post("https://stormy-ridge-27884.herokuapp.com/transaction/user", { uid: user.uid })
            .then(res => {
                setTxd(res.data.txd);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user.uid])
    return (
        <div className="section">
            {txd ? (
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Transaction History</h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {txd.map(tx => (
                                            <tr key={tx._id}>
                                                <td>{new Date(tx.created_at).toLocaleDateString()}</td>
                                                <td>{tx.amount}</td>
                                                <td>{tx.type}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Transaction History</h4>
                            </div>
                            <div className="card-body">
                                <h3>No Transaction History</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const WidthdrawlHistory = () => {
    const [txd, setTxd] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        axios.post("https://stormy-ridge-27884.herokuapp.com/widthdrawl/user", { uid: user.uid })
        // axios.post("http://localhost:5000/widthdrawl/user", { uid: user.uid })
            .then(res => {
                setTxd(res.data.txd);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user.uid])
    return (
        <div className="section">
            {txd ? (
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Widthdrawl History</h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>UID</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {txd.map(tx => (
                                            <tr key={tx._id}>
                                                <td>{tx.uid}</td>
                                                <td>{tx.name}</td>
                                                <td>{tx.amount}</td>
                                                <td>{new Date(tx.created_at).toLocaleDateString()}</td>
                                                <td>{tx.status ? "Processed" : "Pending Approval"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Transaction History</h4>
                            </div>
                            <div className="card-body">
                                <h3>No Transaction History</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Report;
