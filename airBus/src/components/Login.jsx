import React from "react";
import "../styles/login.css";
import {  Link, Navigate, useNavigate  } from "react-router-dom";
import { useState } from "react";
import {postQuery} from '../axiosService'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');
  const [err, setErr]= useState(false)

  const navigation = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if(email.length < 5 || password.length <5){
      setErr(true)
      return;
    }
    postQuery('login', {email, password}).then(res=>{
      setErr(res.error);
      if(!res.error){
        localStorage.setItem('userID', res.data.userID)
        navigation('/home')
      } 
    })
  }

  return (
    <div
      style={{
        width: "400px",
        height: "500px",
        borderRadius: "15px",
        marginTop: "150px",
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          position: "relative",
          left: "-30%",
          fontSize: "1.8rem",
        }}
      >
        Login
      </h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value);setErr(false)}}
            value={email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value);setErr(false)}}
            value={password}
          />
        </div>

        
        {err && <span style={{color: 'red'}}>Invalid credentials</span>}
        <button type="submit" className="btn" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className="con">
        <p>don't have account?&nbsp;</p>
        <Link to="/signup">Sign In</Link>
      </div>
    </div>
  );
};

export default Login;
