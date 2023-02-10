import React from 'react'
import LogImage from "./images/login_image.png"


export function Login() {
  return (
    <div class="LogBody">
    <>

    <div class="form">
      <img class="login-img" src={LogImage} alt='login_image' height={150}/>
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='abc@gmail.com' />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>

  <button type="submit" class="btn btn-primary">Login</button>
</form>
    </div>
    
    </>
    </div>
  )
}
