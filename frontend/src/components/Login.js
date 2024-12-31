import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import a from './images/frontimage1.jpg';
import './login.css';
import { FaShoppingBag } from 'react-icons/fa';
import axios from 'axios';



const Login = () => {
    const navigate = useNavigate();

    const [useremail, setuseremail] = useState("");
    const [userpassword, setpass] = useState("");
    const [userinfo, setUserinfo] = useState(null);

    const Loginsucess = (e) => {
        e.preventDefault();
        if (validation()) {
            axios.get('http://127.0.0.1:8000/api/users/' + useremail)
                .then(response => {
                    const userData = response.data;
                    console.log(userData);
                    setUserinfo(userData);
                    if (!response.data || Object.keys(response.data).length === 0) {
                        alert("Please enter valid Email and Password");
                    }
                    else if (response.data.password === userpassword) {
                        alert("Login Successfully");
                        navigate("/Home", { state: { user_name: userData?.user_name || "" } });
                    }
                    else {
                        alert("Please enter valid Credentials");
                    }
                })
                .catch((error) => {
                    alert("Login Failed due to : " + error.message);
                })

        }

    }

    const validation = () => {
        let result = true;
        if (useremail === '' || useremail === null) {
            result = false;
            alert("Please enter the email ID")
        }
        if (userpassword === '' || userpassword === null) {
            result = false;
            alert("Please enter the Password")
        }
        return result;
    }
    return (
        <div className='loginpage'>
            <div className='image'>
                <img src={a} alt='frontimage1' className='loginimage'></img>

            </div>
            <div className='loginform'>
                <form className='form' onSubmit={Loginsucess}>
                    <div className='shop'>
                        <p><FaShoppingBag /><b>shop</b>cart</p>
                    </div>
                    <div className='loginhead'>
                        <p>Login</p>
                    </div>
                    <div>
                        <input type="text" value={useremail} onChange={(e) => setuseremail(e.target.value)} name="email" placeholder="E-mail" className='email'></input>
                    </div>
                    <div>
                        <input type="password" value={userpassword} onChange={(e) => setpass(e.target.value)} name="password" placeholder="Password" className='password'></input>
                    </div>
                    <div>
                        <button className='shopnow'>Shopnow</button>
                    </div>
                    <div className='end'>
                        <p>Don't have an account? <Link to="/Register" className='register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
