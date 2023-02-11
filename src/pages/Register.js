import React from 'react'
import Reg1 from './images/Reg1.jpg'
import Reg2 from './images/Reg2.jpg'
import Reg3 from './images/Reg3.jpg'
import Reg4 from './images/Reg4.jpg'
import Reg5 from './images/Reg5.jpg'
import Reg6 from './images/Reg6.jpg'
import Reg7 from './images/Reg7.jpg'
import Reg8 from './images/Reg8.jpg'
import Reg9 from './images/Reg9.jpg'
import Reg10 from './images/Reg10.jpg'
import RegImg from './images/Register.png'
function Register() {
  return (
    <div class="main-container">
      <>
         <div class="first-half carousel slide" id="carouselExampleSlidesOnly"  data-bs-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active">
          <img class="reg1-pic d-block w-100" src={Reg1} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg2} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg3} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg4} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg5} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg6} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg7} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg8} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg9} width={800}   alt="reg1 pic"/>
            </div>
            <div class="carousel-item ">
          <img class="reg1-pic d-block w-100" src={Reg10} width={800}   alt="reg1 pic"/>
            </div>
            </div>

            </div>
           
         
         
         <div class="second-half">
         <h1 class="log-heading">REGISTER</h1>
    <div class="form">
      <img class="login-img" src={RegImg} alt='login_image' height={150}/>
    <form>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" > Full Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" required autofocus />
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='abc@gmail.com' required/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required />
  </div>
  

  <button type="submit" class="btn btn-primary">REGISTER</button>
    </form>
    </div>
        </div>
      </>
    </div>
  )
}

export default Register
