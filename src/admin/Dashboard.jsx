import { Tab, Row, Col, Nav, Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminDashboard() {
    return (
        <div className="section">

            
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">User List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Transaction History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="logout">Logout</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <UserList />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <TransactionHistory />
                </Tab.Pane>
                <Tab.Pane eventKey="logout">
                    <Logout />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>

        </div>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://stormy-ridge-27884.herokuapp.com/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>User List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>level</th>
                        <th>Referal Count</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.uid}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.level}</td>
                                <td>{user.referralCount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        axios.get('https://stormy-ridge-27884.herokuapp.com/transaction/all')
            .then(res => {
                setTransactions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h1>Transaction History</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{new Date(transaction.created_at).toLocaleDateString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            
        </div>
    )
}

const Logout = () => {
    const history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/admin')
    }
    const [clicked, setClicked] = useState(false)
    return (
        <div>
            <h1>Logout</h1>
            <button
                onClick={() => {
                    setClicked(true)
                    // delay for 2 seconds
                    setTimeout(() => {
                        handleLogout()
                    }, 2000)
                }}
                className={clicked ? 'btn btn-danger' : 'btn btn-primary'}
            >Logout</button>
        </div>
    )
}

