import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Razorpay from "./Razorpay"
import axios from 'axios'

export default function Referal() {
  const params = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [aadhaar, setAadhaar] = useState('')
  const [phone, setPhone] = useState('')
  const [id_price, setId_price] = useState('')
  
  useEffect(() => {
    axios.get('https://stormy-ridge-27884.herokuapp.com/get_id_price').then(res => {
      setId_price(res.data.price)
    })
  }, [])
    return (
           
                <div className="container-fluid my-3 section">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header">
                                    <b>Referal by { params.ref_id }</b>
                                </div>
                  <div className="card-body">
                    <form>


                    <div className="row">
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control w-100" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control w-100" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group">
                          <label>Username</label>
                          <input type="text" className="form-control w-100" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group">
                          <label>Aadhaar</label>
                          <input type="text" className="form-control w-100" placeholder="Enter Aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
                        </div>
                      </div>

                    <div className="row">
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" className="form-control w-100" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>


                      {/* <div className="col-md-12">
                          <button className="btn btn-primary" type="submit">Submit</button>
                  </div> */}
                  <Razorpay
                    amount={id_price}
                    userDetail={{
                        uname: username,
                        name: name,
                        phone: phone,
                        email: email,
                        addhar: aadhaar,
                        head: params.ref_id,
                        type: 'referal'   
                    }}
                        text="Sign Up"
                    />

                        
                  </form>
            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
}