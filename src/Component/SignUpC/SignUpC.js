import React from 'react';
import './SignUpC.css';

const SignUpC = () => {
    return (
        <div className='body'>
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form className='signUpForm'>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Sign Up</button>
                </form>
                </div>
        </div>
    );
};

export default SignUpC;