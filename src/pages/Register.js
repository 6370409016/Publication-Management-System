import React from 'react'
import RegImg from './images/Register.png'
import "../Styles/Register.css"


function Register() {
  return (
    <>

      <div className="main-container">





        <div className="second-half">
          <h1 className="log-heading">REGISTER</h1>
          <div className="form">
            <img className="login-img" src={RegImg} alt='login_image' height={150} />
            <form>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label" > Full Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" required autofocus />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='abc@gmail.com' required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" required />
                <div id="passwordHelp" className="form-text">Provide password combination of Capital letters, small letters and special charecters.</div>
              </div>


              <button type="submit" className="btn btn-primary">REGISTER</button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Register;
