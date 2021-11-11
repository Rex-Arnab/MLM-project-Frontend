import axios from 'axios'
import { useState } from 'react'
import "./adminLogin.css"
import { useHistory } from 'react-router-dom'

export default function AdminLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const LoginCheck = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post('https://stormy-ridge-27884.herokuapp.com/admin/login', {
        username: username,
        password: password
        })
            .then(res => {
            setLoading(false)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setTimeout(() => {
                history.push('/admin/dashboard')
            }, 300);
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
    <div className="container-fluid container-body">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                            <form onSubmit={ LoginCheck }>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                    <input type="text" className="form-control" value={ username } onChange={ (e) => setUsername(e.target.value) }/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control i"  value={ password } onChange={ (e) => setPassword(e.target.value) } />
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                        <button
                                            type="submit"
                                            className={ loading ? "btn btn-primary btn-block btn-lg btn-login" : "btn btn-primary btn-block btn-lg btn-login" }
                                        >
                                         { loading ? <i className="fa fa-spinner fa-spin"></i> : "LOGIN" }   
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
        </div>
    )
}
