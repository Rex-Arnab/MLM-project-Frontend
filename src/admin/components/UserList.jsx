import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Table } from 'reactstrap'

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

     const handleSubmit = (e, uid , username, password, email, phone, head_member, bank_name, account_number, account_holder_name, bank_branch, ifsc_code, is_admin, is_bank_locked, id_count, main_wallet, activation_wallet) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/update_user/${uid}`, {
            token: JSON.parse(localStorage.getItem('token')),
            username,
            password,
            email,
            phone,
            head_member,
            bank_name,
            account_number,
            account_holder_name,
            bank_branch,
            ifsc_code,
            is_admin,
            is_bank_locked,
            id_count,
            main_wallet,
            activation_wallet,
        })
            .then(res => {
                console.log(res)

            }).catch(err => {
                console.log(err)

            })
        
    }

    return (
        <div>
            <h1>User List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Join Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.uid}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                <td>
                                    
                                    <UserEditModel user={user} handleSubmit={ handleSubmit }/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

const UserEditModel = ({user, handleSubmit}) => {
    return (
        <Fragment>
            <button type="button" class="btn btn-info mr-1 text-white" data-bs-toggle="modal" data-bs-target={`#myModal${user.uid}`}>
                <i class="fas fa-edit"></i>
            </button>
            <div class="modal fade" id={`myModal${user.uid}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Change Detail for {user.username}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                            <UserDetailEditForm user={user} handleSubmit={ handleSubmit }/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}


const UserDetailEditForm = ({ user, handleSubmit }) => {
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState(user.password)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [head_member, setHeadMember] = useState(user.head_member)
    const [bank_name, setBankName] = useState(user.bank.bank_name)
    const [account_number, setAccountNumber] = useState(user.bank.account_number)
    const [account_holder_name, setAccountHolderName] = useState(user.bank.account_holder_name)
    const [bank_branch, setBankBranch] = useState(user.bank.bank_branch)
    const [ifsc_code, setIfscCode] = useState(user.bank.ifsc_code)
    const [is_admin, setIsAdmin] = useState(user.is_admin)
    const [is_bank_locked, setIsBankLocked] = useState(user.is_bank_locked)
    const [id_count, setIdCount] = useState(user.id_count)
    // const [referals, setReferals] = useState(user.referals)
    const [main_wallet, setMainWallet] = useState(user.wallet.main_wallet)
    const [activation_wallet, setActivationWallet] = useState(user.wallet.activation_wallet)
    // const [status, setStatus] = useState(user.status)
    const [created_at, setCreatedAt] = useState(user.created_at)
    const [level, setLevel] = useState({
        bronze: {
            joined: user.levels.bronze.joined,
            days: user.levels.bronze.days,
            missed: user.levels.bronze.missed
        },
        silver: {
            joined: user.levels.silver.joined,
            days: user.levels.silver.days,
            missed: user.levels.silver.missed
        },
        gold: {
            joined: user.levels.gold.joined,
            days: user.levels.gold.days,
            missed: user.levels.gold.missed
        },
        pearl: {
            joined: user.levels.pearl.joined,
            days: user.levels.pearl.days,
            missed: user.levels.pearl.missed
        },
        emerald: {
            joined: user.levels.emerald.joined,
            days: user.levels.emerald.days,
            missed: user.levels.emerald.missed
        },
        ruby: {
            joined: user.levels.ruby.joined,
            days: user.levels.ruby.days,
            missed: user.levels.ruby.missed
        },
        platinum: {
            joined: user.levels.platinum.joined,
            days: user.levels.platinum.days,
            missed: user.levels.platinum.missed
        },
        diamond: {
            joined: user.levels.diamond.joined,
            days: user.levels.diamond.days,
            missed: user.levels.diamond.missed
        },
        royal: {
            joined: user.levels.royal.joined,
            days: user.levels.royal.days,
            missed: user.levels.royal.missed
        },
        crown: {
            joined: user.levels.crown.joined,
            days: user.levels.crown.days,
            missed: user.levels.crown.missed
        },
        king: {
            joined: user.levels.king.joined,
            days: user.levels.king.days,
            missed: user.levels.king.missed
        }
    })

    const [loading, setLoading] = useState(false)

    
   
    
    return (
        <Fragment>
            
            <form onSubmit={(e) => {
                setLoading(true)
                handleSubmit(e, user.uid, username, password, email, phone, head_member, bank_name, account_number, account_holder_name, bank_branch, ifsc_code, is_admin, is_bank_locked, id_count, main_wallet, activation_wallet)
                    .then(() => {
                        setLoading(false)
                    })
            }}>
                        <div className="form-group">
                            <label htmlFor="uid">UID</label>
                            <input type="text" className="form-control w-100" id="uid" placeholder="uid" defaultValue={user.uid} disabled />
                        </div>
                        <div className="card">
                    <div className="card-header">
                        <h5>User Detail</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control w-100" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control w-100" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control w-100" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control w-100" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="head_member">Head Member</label>
                            <input type="text" className="form-control w-100" id="head_member" placeholder="Head Member" value={head_member} onChange={(e) => setHeadMember(e.target.value)} />
                        </div>
                    </div>
                    </div>
                        

                        <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Bank Details</h3>
                    </div>
                    <div className="card-body">
                         <div className="form-group">
                                    <label htmlFor="bank_name">Bank Name</label>
                                    <input type="text" className="form-control w-100" id="bank_name" placeholder="Bank Name" value={bank_name} onChange={(e) => setBankName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bank_branch">Bank Branch</label>
                                    <input type="text" className="form-control w-100" id="bank_branch" placeholder="Bank Branch" value={bank_branch} onChange={(e) => setBankBranch(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account_holder_name">Account holder Name</label>
                                    <input type="text" className="form-control w-100" id="account_holder_name" placeholder="Account holder Name" value={account_holder_name} onChange={(e) => setAccountHolderName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account_number">Account Number</label>
                                    <input type="text" className="form-control w-100" id="account_number" placeholder="Account Number" value={account_number} onChange={(e) => setAccountNumber(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ifsc_code">IFSC Code</label>
                                    <input type="text" className="form-control w-100" id="ifsc_code" placeholder="IFSC Code" value={ifsc_code} onChange={(e) => setIfscCode(e.target.value)} />
                        </div>
                    </div>
                </div>


                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Levels</h3>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="level">Level</label>
                                    <select className="form-control w-100" id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                                        <option value="">Select Level</option>
                                        <option value="bronze">Bronze</option>
                                        <option value="silver">Silver</option>
                                        <option value="gold">Gold</option>
                                        <option value="platinum">Platinum</option>
                                        <option value="diamond">Diamond</option>
                                        <option value="royal">Royal</option>
                                        <option value="crown">Crown</option>
                                        <option value="king">King</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="joined">Joined</label>
                                    <input type="datetime-local" className="form-control w-100" id="joined" placeholder="Joined" value={created_at} onChange={(e) => setCreatedAt(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="isAdmin">is Admin?</label>
                                    <select className="form-control w-100" id="isAdmin" value={is_admin} onChange={(e) => setIsAdmin(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id_count">id Count</label>
                                    <input type="number" className="form-control w-100" id="id_count" placeholder="id Count" value={id_count} onChange={(e) => setIdCount(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="is_bank_locked">is Bank Locked?</label>
                                    <select className="form-control w-100" id="is_bank_locked" value={is_bank_locked} onChange={(e) => setIsBankLocked(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                {/* <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Wallet Information</h3>
                                         */}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Save'}
                        </button>
                    </form>
                
        </ Fragment>
    )
}

export default UserList;