import React, { Component } from 'react';
import './style.css';

class Login extends Component {

    _handleSubmit = e => {
        e.preventDefault();
        
    };

    _handleBlur = e => {
        if (!e.target.value.length) {
           return e.target.style.padding = '10px';
        } 
        e.target.style.padding = '22px 10px 15px 15px';
    }

    render() {
        return (
            <div className="login">
               <h2>Sign in</h2>
               <form onSubmit={this._handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        name="username"
                        className="form-control"
                        id="username"
                        autoComplete="off"
                        onBlur={this._handleBlur}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        onBlur={this._handleBlur}
                      />
                    </div>
                    <button className="btn-signin" type="submit">Signin to Coders-x</button>
                    <div className="form-group check">
                        <input type="checkbox" />
                        <span style={{color: '#adadad', marginLeft: '5px'}}>Keep me signed in</span>
                    </div>
                    <div className="login-forget">
                        <a href="#">Forgot username?</a>
                        <a href="#">Forgot password?</a>
                    </div>
               </form>
            </div>
        );
    }
}


export default Login;