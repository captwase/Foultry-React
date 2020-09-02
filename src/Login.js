import React from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to = "/">
                <div className="login___logo">
                    <h1>foultry</h1>
                </div>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form action="">
            <h5>E-mail</h5>
            <input type="text"/>
            <h5>Password</h5>
            <input type="text"/>
            <button>Sign In</button>
            </form>

            <p>
                By signing-in you agree to Foultry's Conditions of Use & Sale.
            </p>
            <button>Create your Foultry Account</button>
        </div>
        </div>
    );
}

export default Login;
