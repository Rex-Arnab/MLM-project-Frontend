import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    const handleLogout = () => {
        setClicked(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        history.push('/admin')
    }
    const [clicked, setClicked] = useState(false)
    return (
        <div>
            <h1>Logout</h1>
            <button
                onClick={() => {
                    setClicked(true)
                    setTimeout(() => {
                        handleLogout()
                    }, 800)
                }}
                className={clicked ? 'btn btn-danger' : 'btn btn-primary'}
            >
                {clicked ? <span>Logging out... <i className="fas fa-spinner fa-spin"></i></span> : 'Logout'}
            </button>
        </div>
    )
}
export default Logout;