import React from "react";
import "../styles/login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postQuery } from "../axiosService";

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(false);
  const [role, setRole] = useState('FABRICATION');
  const [name, setName] = useState('')

  const navigation = useNavigate();

  const handleSignUp = (e) =>{
    e.preventDefault();
    if(email.length < 5 || password.length <5 || name.length <4){
      setErr(true)
      return;
    }
    postQuery('signup', {name, email, password, role}).then(res=>{
      setErr(res.error);
      if(!res.error) {
        localStorage.setItem('userID', res.data.userID);
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
        marginTop: "100px",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          position: "relative",
          left: "-27%",
          fontSize: "1.8rem",
        }}
      >
        Sign Up
      </h2>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Name"
            onChange={(e)=>{setName(e.target.value); setErr(false)}}
            value={name}
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
            onChange={e=>{setEmail(e.target.value); setErr(false)}}
            value={email}
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            onChange={e=>{setPassword(e.target.value);setErr(false)}}
            value={password}
          />
        </div>

        <div class="form-group">
          <label
            htmlFor="roles"
            style={{ width: "25%", marginRight: "5%", fontSize: "1.2rem" }}
          >
            Roles :
          </label>
          <select name="roles" id="roles" placeholder="Roles" onChange={e=>setRole(e.target.value)}>
            <option value="FABRICATION" selected>Fabrication</option>
            <option value="SUB_ASSEMBLY">Sub Assembly</option>
            <option value="ASSEMBLY">Assembly</option>
          </select>
        </div>
        {err && <span style={{color: 'red'}}>Invalid Details</span>}

        <button type="submit" class="btn" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <div class="con">
        <p>Already have account?&nbsp;</p>
        <Link to="/login"> login</Link>
      </div>
    </div>
  );
};

export default SignUp;
