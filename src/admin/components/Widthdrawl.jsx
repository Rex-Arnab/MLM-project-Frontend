import { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'uid',
        selector: row => row.uid,
        sortable: true,
    },
    {
        name: 'name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'amount',
        selector: row => row.amount,
        sortable: true,
    },
    // {
    //     name: 'bank',
    //     selector: row => row.bank,
    //     sortable: false,
    // },
    {
        name: 'created_at',
        selector: row => new Date(row.created_at).toLocaleDateString(),
        sortable: true,
    },
    {
        name: 'status',
        selector: row => row.status ? <button className="btn btn-warning">Complete</button> : <button className="btn btn-primary">Pending</button>,
        sortable: true,
    },
];



const WidthdrawlHistory = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        axios.post('https://stormy-ridge-27884.herokuapp.com/widthdrawl/all')
            .then(res => {
                console.log(res)
                setTransactions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="section">
            <h1>Widthdrawl History</h1>
            <DataTable
                columns={columns}
                data={transactions}
                pagination
                paginationPerPage={10}
            />
        </div>
    );
}

export default WidthdrawlHistory;