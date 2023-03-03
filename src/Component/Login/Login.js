import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/home');
    }
    const signupHandler = () =>{
      navigate('/signupC')
    }
  return (
    <div className="login-container">
      <h3>Welcome Back To Grow Bangla !</h3>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">E-mail</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button onClick={loginHandler} type="submit">Login</button>
        <Link className='forgot' to='/forgotPage'>Forgot Password ?</Link>
        <p>Or , Create An Account</p>
        <button onClick={signupHandler}>SignUp</button>
      </form>
    </div>
  );
}

export default Login;
