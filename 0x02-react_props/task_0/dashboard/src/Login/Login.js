import React from 'react';
import './login.css'; 

export default function Login() {
    return (
        <React.Fragment>
            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id='email' name='email'></input>
                    <label htmlFor='pwd'>Password:</label>
                    <input type='password' id='password' name='password'></input>
                    <button className='button'>OK</button>
                </form>
            </div> 
        </React.Fragment>
    )
}

