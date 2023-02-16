import React,{useState} from 'react'
import {NavLink} from "react-router-dom"

import "./mix.css"


const Login = () => {

const [passShow,setPassShow]=useState(false);

const [inpval, setInpval] = useState({
    email: "",
    password: "" 
  })

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };
//   console.log(inpval)

const loginuser = (e)=> {
    e.preventDefault();

    const {email,password} = inpval;

  if (email === "") {
        alert("enter your email");
      } else if (!email.includes("@")) {
        alert("plzz enter correct email");
      } else if (password === "") {
        alert("enter your password");
      } else if (password.length < 6) {
        alert("Invalid credential");
      } else {
        console.log("user login done");
      
    }
}

    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1> Welcome back. LogIn !</h1>
                        <p>Glad you came back. Please Login</p>
                    </div>
                    <form>
                        <div className='form_input'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={setVal} value={inpval.email} placeholder='Enter your email address' />
                        </div>
                        <div className='form_input'>
                            <label htmlFor="password">Password</label>
                            <div className='two'>
                                <input type={!passShow ? "password" : "text"}  value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter your password' />
                                <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                            
                        </div>
                        <button className='btn' onClick={loginuser}>LogIn</button>
                        <p>Don't have an account?<NavLink to="/register">Sign Up</NavLink> </p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login