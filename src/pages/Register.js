import React, { useState } from 'react';
import RegImg from './images/Register.png';
import "../Styles/Register.css";
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/user/save", {
        employeename: `${firstName} ${lastName}`,
        email: email,
        password: password,
      });
      alert("Employee Registration Successful");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="second-half">
          <h1 className="log-heading">REGISTER</h1>
          <div className="form">
            <img className="login-img" src={RegImg} alt='login_image' height={150} />
            <form onSubmit={save}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder='abc@gmail.com'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div id="passwordHelp" className="form-text">Provide a password combination of capital letters, small letters, and special characters.</div>
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
