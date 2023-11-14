import React from 'react'
import LogImage from "./images/login_image.png"
import "../Styles/Login.css"




export default function Login() {
  return (
    <>
      
      <div className="LogBody">

        <h1 className="log-heading">LOGIN</h1>
        <div className="form">
          <img className="login-img" src={LogImage} alt='login_image' height={150} />
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='abc@gmail.com' required autofocus />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" required />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>


      </div>
    </>
  )
}
