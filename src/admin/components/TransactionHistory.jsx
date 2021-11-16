import { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'amount',
        selector: row => row.amount,
        sortable: true,
    },
    {
        name: 'type',
        selector: row => row.type,
        sortable: true,
    },
    {
        name: 'created_at',
        selector: row => new Date(row.created_at).toLocaleDateString(),
        sortable: true,
    },
];



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
        <div className="section">
            <h1>Transaction History</h1>
            <DataTable
                columns={columns}
                data={transactions}
                pagination
                paginationPerPage={10}
            />
        </div>
    );
}

export default TransactionHistory;