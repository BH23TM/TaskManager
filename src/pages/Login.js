
import './Login.css';
import { Route } from 'react-router-dom';
const Login = () => {
    return(

        <div class = 'box'>
            <h1>Login</h1>
            <div class = 'email'>
            <p>Email</p>
            <input type={'text'}></input>
            </div>
            <div class = 'password'>
                <p>password</p>
                <input type = {'text'}></input>
            </div>
            <button  class = 'signup'>Sign Up</button>

        </div>
    )
}

export default Login;