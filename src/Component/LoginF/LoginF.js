import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginF = () => {
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/homeF');
    }
    const signupHandler = () =>{
      navigate('/signupF')
    }
    return (
        <div>
            <div className="login-container">
                <h3>Welcome Back To Grow Bangla Sir!</h3>
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Farmer-ID</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button onClick={loginHandler} type="submit">Login</button>
                    <Link className='forgot' to='/forgotPage'>Forgot Password ?</Link>
                    <p>Or , Create An Account</p>
                    <button onClick={signupHandler}>SignUp</button>
                </form>
            </div>
        </div>
    );
};

export default LoginF;