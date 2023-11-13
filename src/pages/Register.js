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
import "../Styles/Register.css"

function Register() {
  return (
    <div className="main-container">
      <>
        <div className="first-half carousel slide" id="carouselExampleSlidesOnly" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="reg1-pic d-block w-100" src={Reg1} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg2} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg3} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg4} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg5} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg6} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg7} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg8} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg9} width={800} alt="reg1 pic" />
            </div>
            <div className="carousel-item ">
              <img className="reg1-pic d-block w-100" src={Reg10} width={800} alt="reg1 pic" />
            </div>
          </div>

        </div>



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
      </>
    </div>
  )
}

export default Register;
