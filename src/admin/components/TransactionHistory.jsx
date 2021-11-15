import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

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

export default TransactionHistory;