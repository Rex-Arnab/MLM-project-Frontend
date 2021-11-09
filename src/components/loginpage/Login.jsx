import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css"
import axios from 'axios'


export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            history.push("/dashboard")
        }
    }, [history])
    
    const CheckLogin = (e) => {
        e.preventDefault()
        axios.post('https://stormy-ridge-27884.herokuapp.com/login', {
            username: username,
            password: password
        }).then(res => {
            if (res.data.user) {
                localStorage.setItem('token', JSON.stringify(res.data.token))
                localStorage.setItem('user', JSON.stringify(res.data.user))
                history.push("/dashboard");
            }
        })
    }
    return (
        <div>
            <div className="wrapper">
	<div className="container">
                    <h1 style={{ color: "white", fontWeight: 'bolder' }}>Welcome</h1>
		
		<form className="form">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
			<button
                            type="submit"
                            id="login-button"
                            onClick={(e) => CheckLogin(e)}>
                    Login
            </button>
		</form>
	</div>
	
        <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </div>
    )
}
