import {useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function Referal() {
  const params = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [aadhaar, setAadhaar] = useState('')
  const [phone, setPhone] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://stormy-ridge-27884.herokuapp.com/refer/register', {
      name: name,
      email: email,
      username: username,
      aadhaar: aadhaar,
      phone: phone,
      referal: params.referal
    })
      .then(res => {
        if(res.data.status === 'success') {
          alert(res.data.message)
        }
      })
  }
    
    return (
           
                <div className="container-fluid my-3">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header">
                                    <b>Referal by { params.ref_id }</b>
                                </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>


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


                      <div className="col-md-12">
                          <button className="btn btn-primary" type="submit">Submit</button>
                        </div>

                        
                  </form>
            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
}