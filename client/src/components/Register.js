import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import "./mix.css";


const Register = () => {

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: ""
  })
  // console.log(inpval)

  const setVal =  (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };

  const addUserdata = async(e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("Plzz enter your name");
    } else if (email === "") {
      alert("enter your email");
    } else if (!email.includes("@")) {
      alert("plzz enter correct email");
    } else if (password === "") {
      alert("enter your password");
    } else if (password.length < 6) {
      alert("must be atleast 6 character");
    } else if (cpassword === "") {
      alert("enter your confirm password");
    } else if (cpassword.length < 6) {
      alert("must be atleast 6 character");
    } else if (password !== cpassword) {
      alert("password and confirm password doesn't match");
    } else {
      console.log("user registration done");

      const data = await fetch("register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        
        body : JSON.stringify({
          fname, email, password, cpassword
         })
      });

      const res = await data.json();
      console.log(res.status);
      console.log("hello")

    }
  }


  return (
    <>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1> Sign Up</h1>
            <p style={{ textAlign: "center" }}>We are happy to know that you will be using CLOUDY to manage<br />your tasks! We
              hope that you will like it.</p>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id="fname" onChange={setVal} value={inpval.fname} placeholder='Enter your Name' />
            </div>
            <div className='form_input'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={setVal} value={inpval.email} placeholder='Enter your email address' />
            </div>
            <div className='form_input'>
              <label htmlFor="password">Password</label>
              <div className='two'>
                <input type={!passShow ? "password" : "text"} name="password" value={inpval.password} onChange={setVal} id="password" placeholder='Enter your password' />
                <div className='showpass' onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>

            </div>
            <div className='form_input'>
              <label htmlFor="password">Confirm Password</label>
              <div className='two'>
                <input type={!cpassShow ? "password" : "text"} onChange={setVal} value={inpval.cpassword} name="cpassword" id="cpassword" placeholder='Enter your confirm password' />
                <div className='showpass' onClick={() => setCPassShow(!cpassShow)}>
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>

            </div>
            <button className='btn' onClick={addUserdata}>Sign Up</button>
            <p>Don't have an account?<NavLink to="/">Log In</NavLink> </p>
          </form>
        </div>
      </section>

    </>
  )
}

export default Register