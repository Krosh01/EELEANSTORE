import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../Components/Login'

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>

            <Login />

            <p>
                or <Link to="/register">
                    REGISTER
                </Link>
            </p>
        </div>
    )
}

export default LoginPage